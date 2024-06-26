import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	server: {
		port: 3000,
		fs: {
			// Allow serving files from one level up to the project root
			allow: ['..', 'src', '/src', './src', './src/*']
		}
	},
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
		globals: true
	}
});
