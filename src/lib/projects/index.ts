import { make_project } from './types';

export const projects = [
	make_project('Kaiga', {
		desc: 'An iOS app for organizing your camera roll with ease.',
		tags: ['ios', 'flutter', 'photos'],
		links: [{ type: 'repo', href: 'kaiga' }],
	}),
	make_project('Suru', {
		desc: 'Modular full-stack to-do list service with GitHub OAuth, built with SvelteKit, Elysia, and Bun.',
		tags: ['web app', 'svelte', 'bun', 'full-stack'],
		links: [
			{ type: 'repo', href: 'suru' },
			{ type: 'website', href: '/suru' },
		],
	}),
	make_project('Clime', {
		desc: 'A modern weather app built with SvelteKit, providing real-time updates and forecasts.',
		tags: ['web app', 'weather', 'openweathermap'],
		links: [
			{ type: 'repo', href: 'clime' },
			{ type: 'website', href: '/clime' },
		],
	}),
	make_project('countdown', {
		desc: 'Interactive countdown timer with natural language input and persistent storage.',
		tags: ['natural language processing', 'svelte', 'web app'],
		links: [
			{ type: 'repo', href: 'countdown' },
			{ type: 'website', href: '/countdown' },
		],
	}),
];
