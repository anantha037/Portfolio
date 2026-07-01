import { siteConfig } from '../config/site';

export default function manifest() {
  return {
    name: siteConfig.name,
    short_name: 'Anantha K.',
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#050510',
    theme_color: siteConfig.themeColor,
    icons: [
      {
        src: '/icon',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
