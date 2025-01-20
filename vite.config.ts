/** @type {import('vite').UserConfig} */
import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { visualizer } from 'rollup-plugin-visualizer';
import svg from '@poppanator/sveltekit-svg';

const config = {
  plugins: [
    sveltekit(),
    svg({
      includePaths: ['./src/routes/'],
    }),
		visualizer({
			emitFile: true,
			filename: 'stats.html'
		})
  ],
  preprocess: [vitePreprocess()],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
  },
};

export default config;
