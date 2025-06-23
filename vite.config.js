import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'd362-2804-d4b-b409-7e00-6cda-8df7-514d-7205.ngrok-free.app'
    ]
  }
})
