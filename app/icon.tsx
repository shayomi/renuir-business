import { ImageResponse } from 'next/og';

export const size = { width: 512, height: 512 };
export const contentType = 'image/png';

// Brand mark: white "R" on the Renuir blue, generated so every platform gets a
// crisp multi-resolution icon instead of the low-res .ico.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#2438eb',
          color: '#ffffff',
          fontSize: 340,
          fontWeight: 700,
          borderRadius: 96,
          fontFamily: 'sans-serif',
          letterSpacing: '-0.05em',
        }}
      >
        R
      </div>
    ),
    { ...size },
  );
}
