import { make_project } from './types';

export const projects = [
	make_project('Habi', {
		desc: 'A work-in-progress habit tracker that helps users build and maintain habits through a simple, intuitive interface.',
		stack: ['Swift'],
		links: [{ type: 'repo', href: 'habi' }],
	}),
	make_project('bun.db', {
		desc: 'Persistent key-value database for Bun, inspired by quick.db. Designed for simplicity and rapid prototyping.',
		stack: ['TypeScript'],
		links: [{ type: 'npm', href: 'bun.db' }],
	}),
	make_project('@warsam-e/rift', {
		desc: 'Type-safe PostgreSQL client for TypeScript. Offers a simple and lightweight API for querying and managing databases.',
		stack: ['TypeScript'],
		links: [{ type: 'npm', href: '@warsam-e/rift' }],
	}),
	make_project('@warsam-e/stash', {
		desc: 'Simple and flexible caching library for JavaScript and TypeScript',
		stack: ['TypeScript'],
		links: [{ type: 'npm', href: '@warsam-e/stash' }],
	}),
	make_project('Kaiga', {
		desc: 'An iOS photo management app that lets users quickly sort their camera roll by tapping an album or deleting unwanted images instantly.',
		stack: ['Flutter', 'Dart'],
		links: [{ type: 'repo', href: 'kaiga' }],
	}),
	make_project('Suru', {
		desc: 'A web-based to-do list app that works anywhere by syncing tasks through a backend API. Users can sign in with GitHub and manage their tasks seamlessly across devices.',
		stack: ['Svelte', 'TypeScript', 'SCSS', 'ElysiaJS', 'PostgreSQL'],
		links: [
			{ type: 'repo', href: 'suru' },
			{ type: 'website', href: '/suru' },
		],
	}),
	make_project('Clime', {
		desc: 'A clean and minimal weather app that displays real-time conditions and forecasts based on the user’s location.',
		stack: ['Svelte', 'TypeScript', 'SCSS'],
		links: [
			{ type: 'repo', href: 'clime' },
			{ type: 'website', href: '/clime' },
		],
	}),
	make_project('countdown', {
		desc: 'Lets users create timers from natural language input (e.g., “3 hours from now” or “next Friday at 5pm”).',
		stack: ['Svelte', 'TypeScript', 'SCSS'],
		links: [
			{ type: 'repo', href: 'countdown' },
			{ type: 'website', href: '/countdown' },
		],
	}),
];
