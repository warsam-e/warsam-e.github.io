import type { logos } from '../logos';

type InvertType = 'invert-logo' | 'invert-bg' | 'invert-both' | 'none';

export interface Technology {
	label: string;
	icon: keyof typeof logos;
	href: string;
	bg: [number, number, number, number];
	invert_type: InvertType;
	dim_bg: boolean;
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
		dim_bg?: boolean;
	},
): Technology => ({ label, ...data, invert_type: data.invert_type ?? 'none', dim_bg: data.dim_bg ?? false });

export const make_section = (section: string, list: Technology[]): TechnologySection => ({ section, list });
