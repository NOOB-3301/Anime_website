import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
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