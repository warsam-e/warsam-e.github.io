import type { logos } from '../logos';

type InvertType = 'invert-logo' | 'invert-bg' | 'invert-both' | 'none';

export interface Technology {
	label: string;
	icon: keyof typeof logos;
	href: string;
	bg: [number, number, number, number];
	invert_type: InvertType;
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
		invert_type?: InvertType;
	},
): Technology => ({ label, ...data, invert_type: data.invert_type ?? 'none' });

export const make_section = (section: string, list: Technology[]): TechnologySection => ({ section, list });
