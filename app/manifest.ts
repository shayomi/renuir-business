import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Renuir',
    short_name: 'Renuir',
    description:
      'The recovery platform for lost-and-found. Report once, recover faster.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2438eb',
    icons: [
      { src: '/icon', sizes: '512x512', type: 'image/png' },
      { src: '/apple-icon', sizes: '180x180', type: 'image/png' },
    ],
  };
}
