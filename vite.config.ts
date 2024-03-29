import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
        output: {
            entryFileNames: '[name].[hash].js',
            assetFileNames: '[name].[hash].[ext]',
            chunkFileNames: 'chunk.[name].[hash].js',
        },
    },
},
  base: '/ts-react-tw-05-movies', // Базовый путь для обработки маршрутов
  plugins: [react()],
  define: {
    global:'window',
  },
})
