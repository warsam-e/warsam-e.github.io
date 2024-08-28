import type { logos } from './logos';

export interface Technology {
	label: string;
	icon: keyof typeof logos;
	href: string;
	bg: [number, number, number, number];
}

export interface TechnologySection {
	section: string;
	list: Technology[];
}

export const make_technology = (
	label: string,
	data: {
		icon: keyof typeof logos;
		href: string;
		bg: [number, number, number, number];
	},
): Technology => ({ label, ...data });
