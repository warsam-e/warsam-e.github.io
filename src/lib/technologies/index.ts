import { typescript, javascript, rust, swift, dart, bash } from './languages';
import { bun, nodejs, vite, postgres, redis, elysiajs, nginx } from './backend';
import { svelte, react, angular, tailwindcss, bootstrap, sass, html, css } from './frontend';

export const technologies = [
	{
		section: 'Languages',
		list: [typescript, javascript, rust, swift, dart, bash],
	},
	{
		section: 'Backend',
		list: [bun, nodejs, typescript, vite, postgres, redis, elysiajs, nginx],
	},
	{
		section: 'Frontend',
		list: [svelte, react, angular, typescript, javascript, tailwindcss, bootstrap, sass, html, css],
	},
];
