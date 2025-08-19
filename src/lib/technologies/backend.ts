import { make_section, make_technology } from './types';

const bun = make_technology('Bun', {
	icon: 'bun',
	href: 'https://bun.sh/',
});

const nodejs = make_technology('Node.js', {
	icon: 'nodejs',
	href: 'https://nodejs.org/',
});

const expressjs = make_technology('Express.js', {
	icon: 'expressjs',
	href: 'https://expressjs.com/',
});

const postgres = make_technology('PostgreSQL', {
	icon: 'postgresql',
	href: 'https://www.postgresql.org/',
});

const mysql = make_technology('MySQL', {
	icon: 'mysql',
	custom_hex: '#0074a3',
	href: 'https://www.mysql.com/',
});

const mariadb = make_technology('MariaDB', {
	icon: 'mariadb',
	href: 'https://mariadb.org/',
});

const mongodb = make_technology('MongoDB', {
	icon: 'mongodb',
	href: 'https://www.mongodb.com/',
});

const redis = make_technology('Redis', {
	icon: 'redis',
	href: 'https://redis.io/',
});

const elysiajs = make_technology('ElysiaJS', {
	icon: 'elysiajs',
	href: 'https://elysiajs.com/',
});

const nginx = make_technology('NGINX', {
	icon: 'nginx',
	href: 'https://www.nginx.org/',
});

const docker = make_technology('Docker', {
	icon: 'docker',
	href: 'https://www.docker.com/',
});

const github_actions = make_technology('GitHub Actions', {
	icon: 'github',
	href: 'https://github.com/features/actions',
});

export default make_section('Backend & DevOps', [
	nodejs,
	expressjs,
	bun,
	elysiajs,
	postgres,
	mysql,
	mariadb,
	mongodb,
	redis,
	nginx,
	docker,
	github_actions,
]);
