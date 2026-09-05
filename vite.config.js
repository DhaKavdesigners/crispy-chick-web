import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      workbox: {
        skipWaiting: true,
        clientsClaim: true,
        cleanupOutdatedCaches: true
      },
      includeAssets: [
        'favicon.ico',
        'logo.png',
        'logo-192.png',
        'logo-512.png',
        'logo_rm_bg.png',
        'burger.png',
        'fries.png',
        'fried_chicken.png',
        'drink.png',
        'assets/*.jpg'
      ],
      manifest: {
        id: '/?source=pwa',
        name: 'Crispy Chick KGF - Food Delivery',
        short_name: 'Crispy Chick',
        description: 'Order delicious crispy chicken, burgers, and sides from Crispy Chick KGF with live tracking.',
        theme_color: '#080808',
        background_color: '#080808',
        display: 'standalone',
        display_override: ['standalone', 'window-controls-overlay'],
        orientation: 'portrait',
        dir: 'ltr',
        lang: 'en-US',
        categories: ['food', 'shopping', 'lifestyle'],
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: '/logo-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/logo-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: '/logo.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          }
        ],
        screenshots: [
          {
            src: '/assets/banner1.jpg',
            sizes: '1280x720',
            type: 'image/jpeg',
            form_factor: 'wide',
            label: 'Crispy Chick Food Menu'
          },
          {
            src: '/assets/banner2.jpg',
            sizes: '1280x720',
            type: 'image/jpeg',
            form_factor: 'narrow',
            label: 'Crispy Chick Offers'
          }
        ],
        shortcuts: [
          {
            name: 'Order Food',
            short_name: 'Order',
            description: 'Order fresh fried chicken & burgers',
            url: '/',
            icons: [{ src: '/logo-192.png', sizes: '192x192' }]
          },
          {
            name: 'Track Order',
            short_name: 'Track',
            description: 'Track your live delivery status',
            url: '/#/track',
            icons: [{ src: '/logo-192.png', sizes: '192x192' }]
          }
        ]
      }
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'firebase-core': ['firebase/app', 'firebase/firestore', 'firebase/auth'],
          'lucide': ['lucide-react']
        }
      }
    }
  }
});
