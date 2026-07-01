import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

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
          background: '#050510',
          color: '#6C63FF',
          fontSize: '18px',
          fontWeight: 'bold',
          borderRadius: '8px',
          border: '1px solid rgba(108, 99, 255, 0.5)',
        }}
      >
        AK
      </div>
    ),
    { ...size }
  );
}
