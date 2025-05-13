export type ProjectLinkType = 'repo' | 'website';

export type ProjectLink = {
	type: ProjectLinkType;
	href: string;
};

export interface Project {
	label: string;
	desc: string;
	tags: string[];
	links: ProjectLink[];
}

export const make_project = (
	label: string,
	data: {
		desc: string;
		tags: string[];
		links: ProjectLink[];
	},
): Project => ({ label, ...data });
