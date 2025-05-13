import { make_section, make_technology } from './types';

const bun = make_technology('Bun', {
	icon: 'bun',
	href: 'https://bun.sh/',
	bg: [251, 240, 223, 1],
	dim_bg: true,
});

const nodejs = make_technology('Node.js', {
	icon: 'nodejs',
	href: 'https://nodejs.org/',
	bg: [65, 126, 56, 0.2],
});

const postgres = make_technology('PostgreSQL', {
	icon: 'postgresql',
	href: 'https://www.postgresql.org/',
	bg: [51, 103, 145, 0.25],
});

const mongodb = make_technology('MongoDB', {
	icon: 'mongodb',
	href: 'https://www.mongodb.com/',
	bg: [88, 170, 80, 0.2],
});

const redis = make_technology('Redis', {
	icon: 'redis',
	href: 'https://redis.io/',
	bg: [178, 34, 34, 0.2],
});

const elysiajs = make_technology('ElysiaJS', {
	icon: 'elysiajs',
	href: 'https://elysia.dev/',
	bg: [0, 0, 0, 0.1],
	invert_type: 'invert-bg',
});

const nginx = make_technology('NGINX', {
	icon: 'nginx',
	href: 'https://www.nginx.com/',
	bg: [0, 150, 57, 0.2],
});

const docker = make_technology('Docker', {
	icon: 'docker',
	href: 'https://www.docker.com/',
	bg: [0, 105, 148, 0.15],
});

export default make_section('Backend & DevOps', [
	nodejs,
	// expressjs,
	bun,
	elysiajs,
	postgres,
	mongodb,
	redis,
	nginx,
	docker,
]);
