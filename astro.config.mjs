// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	server: {
		host: true,
		port: 5173,
		allowedHosts: true,
	},
	output: 'static',
	outDir: 'docs',
	build: {
		assets: 'assets',
		inlineStylesheets: 'always',
	},
});
