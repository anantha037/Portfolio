/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050510',
        surface: '#0d0d1f',
        accent1: '#6C63FF',
        accent2: '#00D4FF',
        accent3: '#FF6584',
        textPrimary: '#F0F0FF',
        textSecondary: '#A0A0C0',
        textMuted: '#606080',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(135deg, #6C63FF 0%, #00D4FF 100%)',
        'gradient-2': 'linear-gradient(135deg, #0d0d1f 0%, #1a0a2e 100%)',
      },
    },
  },
  plugins: [],
}
