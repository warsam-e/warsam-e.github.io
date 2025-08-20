import type { logos } from './logos';

export interface SocialLink {
	logo: keyof typeof logos;
	name: string;
	link: string;
}

const make_social_link = ({
	logo,
	name,
	link,
}: {
	logo: keyof typeof logos;
	name: string;
	link: string;
}): SocialLink => ({
	logo,
	name,
	link,
});

export const social_links: SocialLink[] = [
	make_social_link({
		logo: 'github',
		name: '@warsam-e',
		link: 'https://github.com/warsam-e',
	}),
	make_social_link({
		logo: 'email',
		name: 'Email Me',
		link: 'mailto:contact@warsame.me',
	}),
];
