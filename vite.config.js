import { defineConfig } from 'vite';

export default defineConfig({
  // Project root is the folder containing index.html (project root by default)
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});
