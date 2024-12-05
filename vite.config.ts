/** @type {import('vite').UserConfig} */
import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import svg from '@poppanator/sveltekit-svg'

const config = {
	plugins: [
		sveltekit(),
		svg({
				includePaths: ['./src/routes/'],
		}), // Options are optional
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
}

export default config