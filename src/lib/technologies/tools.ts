import { make_section, make_technology } from './types';

const vscode = make_technology('VSCode', {
	icon: 'vscode',
	href: 'https://code.visualstudio.com/',
	bg: [0, 122, 204, 0.2],
});

const git = make_technology('Git', {
	icon: 'git',
	href: 'https://git-scm.com/',
	bg: [255, 99, 71, 0.15],
});

const github = make_technology('GitHub', {
	icon: 'github',
	href: 'https://github.com',
	bg: [36, 41, 46, 0.1],
	invert_type: 'invert-both',
});

const trello = make_technology('Trello', {
	icon: 'trello',
	href: 'https://trello.com/',
	bg: [0, 121, 191, 0.2],
});

const figma = make_technology('Figma', {
	icon: 'figma',
	href: 'https://www.figma.com/',
	bg: [242, 78, 30, 0.15],
});

const slack = make_technology('Slack', {
	icon: 'slack',
	href: 'https://slack.com/',
	bg: [74, 21, 75, 0.25],
});

export default make_section('Tools & Workflow', [vscode, git, github, trello, figma, slack]);
