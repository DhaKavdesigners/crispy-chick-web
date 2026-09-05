import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        skipWaiting: true,
        clientsClaim: true,
        cleanupOutdatedCaches: true
      },
      includeAssets: ['favicon.ico', 'logo.png', 'burger.png', 'fries.png', 'fried_chicken.png', 'drink.png', 'assets/*.jpg'],
      manifest: {
        name: 'Crispy Chick KGF - Food Delivery',
        short_name: 'Crispy Chick',
        description: 'Order delicious crispy chicken, burgers, and sides from Crispy Chick KGF with live tracking.',
        theme_color: '#080808',
        background_color: '#080808',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: 'logo.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'logo.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
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
