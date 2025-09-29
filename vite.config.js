import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If you deploy on GitHub Pages, set base to '/<repo-name>/'.
// Example: base: '/workout-tracker/'
export default defineConfig({
  plugins: [react()],
  // base: '/workout-tracker/',
})
