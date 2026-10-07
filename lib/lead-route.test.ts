import {afterEach, beforeEach, expect, it, vi} from 'vitest';
const {persist, email} = vi.hoisted(() => ({persist:vi.fn(),email:vi.fn()}));
vi.mock('./leads', async importOriginal => ({...await importOriginal<typeof import('./leads')>(),saveToAirtable:persist,sendEmails:email}));
import {POST} from '../app/api/lead/route';
beforeEach(()=>{persist.mockReset(); email.mockReset(); vi.spyOn(console,'error').mockImplementation(()=>{});});
afterEach(()=>vi.restoreAllMocks());
let ip = 0;
function request(body: object) {return new Request('http://localhost/api/lead',{method:'POST',headers:{'content-type':'application/json','x-forwarded-for':`192.0.2.${++ip}`},body:JSON.stringify(body)});}
it('does not claim receipt when no collector is configured', async()=>{
  persist.mockResolvedValue(false); email.mockResolvedValue(false);
  expect((await POST(request({email:'qa@example.com'}))).status).toBe(503);
});
it('does not claim receipt of contact details when only an email-only collector is available', async()=>{
  persist.mockResolvedValue(true); email.mockResolvedValue(false);
  expect((await POST(request({email:'qa@example.com',message:'A detailed request'}))).status).toBe(503);
});
it('accepts a delivered enquiry', async()=>{
  persist.mockResolvedValue(false); email.mockResolvedValue(true);
  expect((await POST(request({email:'qa@example.com',message:'A detailed request'}))).status).toBe(200);
});
it('never delivers a honeypot submission', async()=>{
  expect((await POST(request({email:'qa@example.com',website:'spam'}))).status).toBe(200);
  expect(persist).not.toHaveBeenCalled(); expect(email).not.toHaveBeenCalled();
});
