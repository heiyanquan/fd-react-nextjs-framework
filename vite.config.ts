import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import UnoCSS from 'unocss/vite'
import eslintPlugin from 'vite-plugin-eslint'
import { fileURLToPath, URL } from 'node:url'

const pathResolve = (dir: string) => {
  return fileURLToPath(new URL(dir, import.meta.url))
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), UnoCSS(), eslintPlugin()],
  resolve: {
    alias: {
      '@': pathResolve('src')
    }
  },
  server: {
    open: true
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true
  }
})
