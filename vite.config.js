import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// GitHub project pages are served under /<repo-name>/ — without this base,
// built assets load from github.io/assets/... and the site stays blank.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/portfolio/' : '/',
  server: {
    port: 3000,
    open: true
  }
}))


