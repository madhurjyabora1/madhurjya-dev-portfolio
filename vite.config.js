import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // <image-slot> is a native custom element, not a Vue component.
          isCustomElement: (tag) => tag === 'image-slot',
        },
      },
    }),
  ],
})
