export interface SocialLink {
	logo: string;
	name: string;
	link: string;
}

const make_social_link = ({ logo, name, link }: { logo: string; name: string; link: string }): SocialLink => ({
	logo,
	name,
	link,
});

export const social_links: SocialLink[] = [
	make_social_link({
		logo: 'logo_github',
		name: '@warsam-e',
		link: 'https://github.com/warsam-e',
	}),
	make_social_link({
		logo: 'envelope',
		name: 'Email Me',
		link: 'mailto:contact@warsame.me',
	}),
];
