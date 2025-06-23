import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/cop30/',   // <-- ESSA LINHA É FUNDAMENTAL!
})
