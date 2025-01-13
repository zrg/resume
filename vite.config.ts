/** @type {import('vite').UserConfig} */
import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import svg from '@poppanator/sveltekit-svg'

const config = {
	plugins: [
		sveltekit(),
		svg({
			includePaths: ['./src/routes/'],
		}), // Options are optional
	],
	preprocess: [vitePreprocess()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
}

export default config