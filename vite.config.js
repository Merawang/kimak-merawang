import { defineConfig } from 'vite'
import { fileURLToPath, URL } from "node:url";
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react';

const manifestPlugin = {
  registerType: 'autoUpdate',
  workbox: {
    globPatterns: ["**/*"],
  },
  includeAssets: [
    "**/*",
  ],
  manifest: {
    name: 'Kimak+',
    short_name: 'Kimak+',
    description: 'Sebuah portal untuk integrasi berbagai sistem informasi di Desa Kimak',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'apple touch icon'
      },
      {
        src: '/maskable-icon.png',
        sizes: '225x225',
        type: 'image/png',
        purpose: 'any maskable'
      },
    ],
    theme_color: '#059669',
    background_color: '#ffffff',
    display: 'standalone',
    scope: '/',
    start_url: '/',
    orientation: 'portrait'
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestPlugin)],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)), // import mapping using @
    },
  },
})
