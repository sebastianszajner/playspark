import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/playspark/',
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: { skipWaiting: true, clientsClaim: true },
      manifest: {
        name: 'PlaySpark — Zabawy offline',
        short_name: 'PlaySpark',
        description: 'Taksonomia zabaw offline dla dzieci 3–7 lat',
        theme_color: '#FF6B6B',
        background_color: '#FAFAF7',
        display: 'standalone',
        start_url: '/playspark/',
        icons: [
          { src: '/playspark/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/playspark/icon-512.png', sizes: '512x512', type: 'image/png' },
        ],
        shortcuts: [
          {
            name: 'Ratuj mnie!',
            short_name: 'Ratuj!',
            description: 'Szybka zabawa dla dziecka',
            url: '/playspark/?rescue=1',
            icons: [{ src: '/playspark/icon-192.png', sizes: '192x192' }],
          },
          {
            name: 'Losuj zabawę',
            short_name: 'Losuj',
            description: 'Znajdź idealną zabawę',
            url: '/playspark/?wizard=1',
            icons: [{ src: '/playspark/icon-192.png', sizes: '192x192' }],
          },
        ],
      },
    }),
  ],
})
