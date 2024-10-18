import { typescript } from './languages';
import { make_section, make_technology } from './types';

const bun = make_technology('Bun', {
	icon: 'bun',
	href: 'https://bun.sh/',
	bg: [251, 240, 223, 1],
});

const nodejs = make_technology('Node.js', {
	icon: 'nodejs',
	href: 'https://nodejs.org/',
	bg: [65, 126, 56, 0.1],
});

const vite = make_technology('Vite', {
	icon: 'vite',
	href: 'https://vite.dev/',
	bg: [150, 127, 255, 0.15],
});

const flutter = make_technology('Flutter', {
	icon: 'flutter',
	href: 'https://flutter.dev/',
	bg: [47, 183, 246, 0.2],
});

const postgres = make_technology('PostgreSQL', {
	icon: 'postgresql',
	href: 'https://www.postgresql.org/',
	bg: [51, 103, 145, 0.2],
});

const mongodb = make_technology('MongoDB', {
	icon: 'mongodb',
	href: 'https://www.mongodb.com/',
	bg: [88, 170, 80, 0.15],
});

const redis = make_technology('Redis', {
	icon: 'redis',
	href: 'https://redis.io/',
	bg: [178, 34, 34, 0.15],
});

const elysiajs = make_technology('ElysiaJS', {
	icon: 'elysiajs',
	href: 'https://elysia.dev/',
	bg: [0, 0, 0, 0.15],
	invert_type: 'invert-bg',
});

const nginx = make_technology('NGINX', {
	icon: 'nginx',
	href: 'https://www.nginx.com/',
	bg: [0, 150, 57, 0.15],
});

export default make_section('Backend', [
	bun,
	nodejs,
	typescript,
	vite,
	flutter,
	postgres,
	mongodb,
	redis,
	elysiajs,
	nginx,
]);
