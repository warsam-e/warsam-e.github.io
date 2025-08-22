import type { TechnologyLabel } from '$lib/technologies';

export type ProjectLinkType = 'repo' | 'npm' | 'website' | 'lab';

export type ProjectLink = {
	type: ProjectLinkType;
	href: string;
};

export interface Project {
	label: string;
	desc: string;
	stack: Array<TechnologyLabel>;
	links: ProjectLink[];
}

export const make_project = (
	label: string,
	data: {
		desc: string;
		stack: Array<TechnologyLabel>;
		links: ProjectLink[];
	},
): Project => ({ label, ...data });
