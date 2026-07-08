import { ImageResponse } from 'next/og';

export const alt = 'Renuir — the recovery platform for lost-and-found';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Branded social-share card so links render a designed preview instead of blank.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#2438eb',
          padding: 80,
          fontFamily: 'sans-serif',
          color: '#ffffff',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: '#ffffff',
              color: '#2438eb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 44,
              fontWeight: 700,
              letterSpacing: '-0.05em',
            }}
          >
            R
          </div>
          <div style={{ fontSize: 34, fontWeight: 600, letterSpacing: '-0.02em' }}>
            Renuir for Business
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              maxWidth: 900,
            }}
          >
            The recovery platform for lost-and-found.
          </div>
          <div style={{ fontSize: 32, color: 'rgba(255,255,255,0.82)', maxWidth: 820 }}>
            Turn the lost-and-found box into an auditable, automated system.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
