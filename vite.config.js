import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api/manga' : {
        target:'https://api.mangadex.org',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/manga/, '')
      },
      '/manga-cover':{
        target:'https://anime-website-gamma.vercel.app/mangauploads.mangadex.org',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/manga-cover/, '')
      }
    },
  },
  plugins: [react()],
})

// server:{
//   proxy:{
//     '/anime/gogoanime/recent-episodes':{
//       target:'https://animeapi-gbxe8g2dp-arka-basaks-projects.vercel.app',
//       changeOrigin: true,
//       secure:false,
//     },
//   },
// },