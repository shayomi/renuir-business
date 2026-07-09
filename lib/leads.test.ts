import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { saveToAirtable } from './leads';

const ORIGINAL_ENV = { ...process.env };

beforeEach(() => {
  process.env.AIRTABLE_API_KEY = 'key_test';
  process.env.AIRTABLE_BASE_ID = 'base_test';
});

afterEach(() => {
  process.env = { ...ORIGINAL_ENV };
  vi.restoreAllMocks();
});

/** Build a Response-like object for the mocked fetch. */
function airtableResponse(ok: boolean, body: unknown) {
  return {
    ok,
    text: async () => JSON.stringify(body),
  } as Response;
}

describe('saveToAirtable', () => {
  it('posts the email to the Waitlist table with auth headers', async () => {
    const fetchMock = vi
      .spyOn(global, 'fetch')
      .mockResolvedValue(airtableResponse(true, { id: 'rec123' }));

    const result = await saveToAirtable({ email: 'user@example.com', source: 'waitlist' });

    expect(result).toBe(true);
    expect(fetchMock).toHaveBeenCalledTimes(1);

    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe('https://api.airtable.com/v0/base_test/Waitlist');
    expect(init?.method).toBe('POST');
    expect((init?.headers as Record<string, string>).Authorization).toBe('Bearer key_test');
    expect(JSON.parse(init?.body as string)).toEqual({
      fields: { Email: 'user@example.com' },
    });
  });

  it('only sends the Email field (never an unknown Source field)', async () => {
    const fetchMock = vi
      .spyOn(global, 'fetch')
      .mockResolvedValue(airtableResponse(true, { id: 'rec123' }));

    await saveToAirtable({ email: 'user@example.com', source: 'developer' });

    const body = JSON.parse(fetchMock.mock.calls[0][1]?.body as string);
    expect(Object.keys(body.fields)).toEqual(['Email']);
  });

  it('throws when Airtable rejects an unknown field name', async () => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
    vi.spyOn(global, 'fetch').mockResolvedValue(
      airtableResponse(false, {
        error: { type: 'UNKNOWN_FIELD_NAME', message: 'Unknown field name: "Source"' },
      }),
    );

    await expect(saveToAirtable({ email: 'user@example.com' })).rejects.toThrow('airtable_failed');
  });

  it('returns false (no fetch) when Airtable env vars are missing', async () => {
    delete process.env.AIRTABLE_API_KEY;
    delete process.env.AIRTABLE_BASE_ID;
    const fetchMock = vi.spyOn(global, 'fetch');

    const result = await saveToAirtable({ email: 'user@example.com' });

    expect(result).toBe(false);
    expect(fetchMock).not.toHaveBeenCalled();
  });
});
