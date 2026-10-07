import {afterEach, beforeEach, describe, expect, it, vi} from 'vitest';
const {send} = vi.hoisted(() => ({send: vi.fn()}));
vi.mock('resend', () => ({Resend: class {emails = {send};}}));
import {sendEmails} from './leads';
const original = {...process.env};
beforeEach(() => {process.env.RESEND_API_KEY = 'test'; send.mockReset();});
afterEach(() => {process.env = {...original}; vi.restoreAllMocks();});
describe('enquiry delivery', () => {
  it('delivers all contact details as plain text, including HTML-like input', async () => {
    send.mockResolvedValue({data:{id:'test'}, error:null});
    await expect(sendEmails({email:'qa@example.com', name:'<script>name</script>',company:'Team',message:'Venue requirements',source:'contact'})).resolves.toBe(true);
    const payload = send.mock.calls[0][0];
    expect(payload.text).toContain('<script>name</script>');
    expect(payload.text).toContain('Company: Team');
    expect(payload.text).toContain('Venue requirements');
    expect(payload.html).toBeUndefined();
  });
  it('does not confirm receipt when the team notification is rejected', async () => {
    send.mockResolvedValue({data:null,error:{message:'Rejected'}});
    await expect(sendEmails({email:'qa@example.com'})).rejects.toThrow('team_email_failed');
    expect(send).toHaveBeenCalledTimes(1);
  });
  it('retains successful receipt if only the acknowledgement fails', async () => {
    vi.spyOn(console,'error').mockImplementation(()=>{});
    send.mockResolvedValueOnce({data:{id:'test'},error:null}).mockResolvedValueOnce({data:null,error:{message:'Rejected'}});
    await expect(sendEmails({email:'qa@example.com'})).resolves.toBe(true);
  });
  it('returns false without sending when unconfigured', async () => {
    delete process.env.RESEND_API_KEY;
    await expect(sendEmails({email:'qa@example.com'})).resolves.toBe(false);
    expect(send).not.toHaveBeenCalled();
  });
});
