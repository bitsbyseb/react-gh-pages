import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:'https://sebastianpuentespulido.github.io/',
  plugins: [react()],
})
