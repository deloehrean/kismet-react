import dns from 'node:dns';
import path from 'node:path';

import react from '@vitejs/plugin-react-swc';
import { defineConfig, loadEnv, splitVendorChunkPlugin } from 'vite';
import checker from 'vite-plugin-checker';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import svgr from 'vite-plugin-svgr';

// Open localhost instead of 127.0.0.1
dns.setDefaultResultOrder('verbatim');

const resolvePath = (dir: string) => path.resolve(__dirname, dir);

const config = defineConfig(({ command, mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  const isDevMode = command === 'serve';
  const isSourcemapEnabled = process.env.VITE_APP_SOURCEMAP_ENABLED === 'true';

  return {
    base: '/',
    plugins: [
      splitVendorChunkPlugin(),
      react(),
      svgr(),
      nodePolyfills(),
      checker({ typescript: true, enableBuild: false }),
    ],
    define: {
      // fix for @apollo/client (dev mode only)
      'Kind.FIELD': isDevMode ? "(await import('graphql')).Kind.FIELD" : undefined,
    },
    build: {
      sourcemap: isSourcemapEnabled,
      commonjsOptions: {
        sourceMap: isSourcemapEnabled,
      },
      outDir: resolvePath('build'),
      assetsInlineLimit: 0,
    },
    resolve: {
      alias: {
        src: resolvePath('src'),
      },
    },
    server: {
      port: 3000,
      open: true,
    },
    preview: {
      port: 4000,
    },
    css: {
      modules: {
        generateScopedName: '[folder]_[local]_[hash:base64:5]',
      },
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler', // or "modern"
        },
      },
    },
  };
});

export default config;
