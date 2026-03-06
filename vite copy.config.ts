import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: [
      // Существующий алиас @ для src
      { find: '@', replacement: path.resolve(__dirname, './src') },
      // Динамический резолвер для figma:asset/xxx.png -> src/assets/xxx.png
      {
        find: /^figma:asset\/(.+\.(png|jpg|jpeg|svg|gif|webp))$/,
        replacement: path.resolve(__dirname, 'src/assets/$1')
      }
    ],
  },

  // Добавлены типы Figma-ассетов
  assetsInclude: ['**/*.svg', '**/*.csv', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.webp'],
  base: '/alfaskb-prelogin/',
})
