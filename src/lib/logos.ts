const languages = {
	typescript: 'logos/typescript.svg',
	javascript: 'logos/javascript.svg',
	rust: 'logos/rust.svg',
	swift: 'logos/swift.svg',
	dart: 'logos/dart.svg',
	bash: 'logos/bash.svg',
} as const;

const backend = {
	bun: 'logos/bun.svg',
	nodejs: 'logos/nodejs.svg',
	vite: 'logos/vite.svg',
	flutter: 'logos/flutter.svg',
	postgresql: 'logos/postgresql.svg',
	mongodb: 'logos/mongodb.svg',
	redis: 'logos/redis.svg',
	elysiajs: 'logos/elysiajs.svg',
	nginx: 'logos/nginx.svg',
} as const;

const frontend = {
	svelte: 'logos/svelte.svg',
	vue: 'logos/vue.svg',
	react: 'logos/react.svg',
	angular: 'logos/angular.svg',
	javascript: 'logos/javascript.svg',
	tailwindcss: 'logos/tailwindcss.svg',
	bootstrap: 'logos/bootstrap.png',
	bulma: 'logos/bulma.svg',
	sass: 'logos/sass.svg',
	html: 'logos/html.svg',
	css: 'logos/css.svg',
} as const;

export const logos = {
	...languages,
	...backend,
	...frontend,
} as const;
