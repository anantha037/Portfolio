import { ImageResponse } from 'next/og';
import { siteConfig } from '../config/site';

export const runtime = 'edge';

// Image metadata
export const alt = 'Anantha Krishnan K - AI & Machine Learning Engineer';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#050510',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          color: '#F0F0FF',
          position: 'relative',
          padding: '40px',
        }}
      >
        {/* Background Gradient */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(108, 99, 255, 0.15) 0%, rgba(5, 5, 16, 1) 100%)',
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '24px',
            padding: '60px',
            boxShadow: '0 8px 32px rgba(108, 99, 255, 0.15)',
            position: 'relative',
            zIndex: 10,
          }}
        >
          {/* Profile Photo */}
          <img
            src={`${siteConfig.url}/profile.jpg`}
            alt="Anantha Krishnan K."
            style={{
              width: '240px',
              height: '240px',
              borderRadius: '120px',
              objectFit: 'cover',
              border: '4px solid #6C63FF',
              marginRight: '60px',
            }}
          />

          {/* Text Content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <h1
              style={{
                fontSize: '64px',
                fontWeight: 'bold',
                margin: '0 0 16px 0',
                lineHeight: 1.1,
                color: '#ffffff',
              }}
            >
              {siteConfig.author}
            </h1>
            <p
              style={{
                fontSize: '32px',
                margin: '0 0 24px 0',
                color: '#00D4FF',
                fontWeight: 600,
              }}
            >
              AI & Machine Learning Engineer
            </p>
            
            <p
              style={{
                fontSize: '24px',
                margin: '0 0 24px 0',
                color: '#A0A0C0',
              }}
            >
              Creator of LexShield AI
            </p>

            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '16px',
              }}
            >
              {['LLMs', 'RAG', 'NLP', 'Computer Vision'].map((skill) => (
                <span
                  key={skill}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(108, 99, 255, 0.3)',
                    borderRadius: '9999px',
                    padding: '8px 24px',
                    fontSize: '20px',
                    color: '#F0F0FF',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
