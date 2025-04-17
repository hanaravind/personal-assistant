import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react(), tailwindcss()], // Keep your existing plugins
    define: {
      API_URL: JSON.stringify(env.API_BASE_URL),
      global: "window",
    },
  };
})
