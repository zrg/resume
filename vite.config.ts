/** @type {import('vite').UserConfig} */
import { sveltekit } from '@sveltejs/kit/vite';
import { svelteTesting } from '@testing-library/svelte/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { visualizer } from 'rollup-plugin-visualizer';
import svg from '@poppanator/sveltekit-svg';

const config = {
  plugins: [
    sveltekit(),
    svelteTesting(),
    svg({
      includePaths: ['./src/routes/'],
    }),
    visualizer({
      emitFile: true,
      filename: 'stats.html',
    }),
  ],
  preprocess: [vitePreprocess()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/setupTest.ts'],
    include: ['src/**/*.{test,spec}.{js,ts}'],
    resolve: process.env.VITEST
      ? {
          conditions: ['browser'],
        }
      : undefined,
  },
};

export default config;
