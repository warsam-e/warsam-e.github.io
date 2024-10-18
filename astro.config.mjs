// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
	integrations: [svelte()],
	server: {
		host: true,
	},
	output: 'static',
	outDir: 'docs',
	build: {
		assets: 'assets',
		inlineStylesheets: 'always',
	},
});
