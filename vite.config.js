import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import browserslistToEsbuild from 'browserslist-to-esbuild'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  build: {
    target: browserslistToEsbuild()
  }
})
