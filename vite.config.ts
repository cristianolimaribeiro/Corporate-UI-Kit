import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => {
  const isLibrary = mode === 'library';

  return {
    plugins: [
      react(),
      isLibrary
        ? dts({
            include: ['src'],
            outDir: 'dist/library',
            insertTypesEntry: true,
            tsconfigPath: './tsconfig.json',
          })
        : null,
    ].filter(Boolean),
    build: isLibrary
      ? {
          outDir: 'dist/library',
          emptyOutDir: true,
          lib: {
            entry: path.resolve(rootDir, 'src/index.ts'),
            name: 'CorporateUIKit',
            formats: ['es'],
            fileName: 'index',
          },
          rollupOptions: {
            external: ['react', 'react-dom', 'react/jsx-runtime'],
          },
          cssCodeSplit: true,
        }
      : {
          outDir: 'dist/demo',
          emptyOutDir: true,
        },
    resolve: {
      alias: {
        '@': path.resolve(rootDir, 'src'),
      },
    },
  };
});
