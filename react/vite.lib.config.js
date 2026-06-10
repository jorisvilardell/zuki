import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist-lib',
    lib: {
      entry: resolve(__dirname, 'src/lib/index.js'),
      name: 'ZukiReact',
      fileName: (format) => `zuki-react.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'zuki-react.css';
          return assetInfo.name;
        },
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime'
        }
      }
    }
  }
})
