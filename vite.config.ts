import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return

          if (id.includes('react') || id.includes('scheduler')) return 'react-vendor'
          if (id.includes('react-router')) return 'router-vendor'
          if (id.includes('@reduxjs') || id.includes('redux') || id.includes('react-redux')) return 'redux-vendor'
          if (id.includes('@supabase')) return 'supabase-vendor'
          if (id.includes('styled-components')) return 'styled-vendor'
          return 'vendor'
        },
      },
    },
  },
})
