import { get_vibrant } from '$lib/utils';
import type { logos } from '../logos';

export interface Technology<Label extends string> {
	label: Label;
	icon: keyof typeof logos;
	href: string;
	vibrant: string;
	invert_bg: boolean;
}

export interface TechnologySection<Technologies extends Array<Technology<string>>> {
	section: string;
	list: Technologies;
}

export const make_technology = async <Label extends string>(
	label: Label,
	data: {
		icon: keyof typeof logos;
		href: string;
		invert_bg?: boolean;
	},
): Promise<Technology<Label>> => ({
	label,
	...data,
	vibrant: await get_vibrant(data.icon),
	invert_bg: data.invert_bg ?? false,
});

export const make_section = async <T extends Promise<Technology<string>>>(
	section: string,
	list: Array<T>,
): Promise<TechnologySection<Awaited<T>[]>> => ({ section, list: await Promise.all(list) });
