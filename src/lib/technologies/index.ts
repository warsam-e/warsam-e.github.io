import backend from './backend';
import frontend from './frontend';
import languages from './languages';
import tools from './tools';

export const technologies = await Promise.all([languages, backend, frontend, tools]);

const all = technologies.flatMap((section) =>
	section.list.map((t) => ({
		...t,
	})),
);
export type TechnologyLabel = (typeof all)[number]['label'];

export const technology = (label: TechnologyLabel) => {
	const res = all.find((tech) => tech.label === label);
	if (!res) throw new Error(`Technology with label "${label}" not found`);
	return res;
};
