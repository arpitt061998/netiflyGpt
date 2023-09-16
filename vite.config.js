import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // build: {
  //   outDir: 'build', // Specify the output directory
  //   sourcemap: true, // Generate source maps
  //   rollupOptions: {
  //     // Additional Rollup options (optional)
  //     // For example, you can add external dependencies:
  //     external: ['react', 'react-dom'],
  //   },
  // },
})
