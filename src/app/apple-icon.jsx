import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
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
          fontSize: '100px',
          fontWeight: 'bold',
          borderRadius: '40px',
          border: '4px solid rgba(108, 99, 255, 0.5)',
        }}
      >
        AK
      </div>
    ),
    { ...size }
  );
}
