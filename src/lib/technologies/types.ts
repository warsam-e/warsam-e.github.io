import type { logos } from '../logos';

type InvertType = 'invert-logo' | 'invert-bg' | 'invert-both' | 'none';

export interface Technology<Label extends string> {
	label: Label;
	icon: keyof typeof logos;
	href: string;
	bg: [number, number, number, number];
	invert_type: InvertType;
	dim_bg: boolean;
}

export interface TechnologySection<Technologies extends Array<Technology<string>>> {
	section: string;
	list: Technologies;
}

export const make_technology = <Label extends string>(
	label: Label,
	data: {
		icon: keyof typeof logos;
		href: string;
		bg: [number, number, number, number];
		invert_type?: InvertType;
		dim_bg?: boolean;
	},
): Technology<Label> => ({ label, ...data, invert_type: data.invert_type ?? 'none', dim_bg: data.dim_bg ?? false });

export const make_section = <Technologies extends Array<Technology<string>>>(
	section: string,
	list: Technologies,
): TechnologySection<Technologies> => ({ section, list });
