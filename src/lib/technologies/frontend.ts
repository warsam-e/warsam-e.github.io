import { make_section, make_technology } from './types';

const svelte = make_technology('Svelte', {
	icon: 'svelte',
	href: 'https://svelte.dev/',
});

const vite = make_technology('Vite', {
	icon: 'vite',
	href: 'https://vite.dev/',
});

const astro = make_technology('Astro', {
	icon: 'astro',
	href: 'https://astro.build/',
});

const react = make_technology('React', {
	icon: 'react',
	href: 'https://react.dev/',
});

const flutter = make_technology('Flutter', {
	icon: 'flutter',
	href: 'https://flutter.dev/',
});

const vue = make_technology('Vue', {
	icon: 'vue',
	href: 'https://vuejs.org/',
});

const webpack = make_technology('Webpack', {
	icon: 'webpack',
	href: 'https://webpack.js.org/',
});

const parcel = make_technology('Parcel', {
	icon: 'parcel',
	href: 'https://parceljs.org/',
});

const esbuild = make_technology('esbuild', {
	icon: 'esbuild',
	href: 'https://esbuild.github.io/',
});

const tailwindcss = make_technology('Tailwind CSS', {
	icon: 'tailwindcss',
	href: 'https://tailwindcss.com/',
});

const bootstrap = make_technology('Bootstrap', {
	icon: 'bootstrap',
	href: 'https://getbootstrap.com/',
});

const bulma = make_technology('Bulma', {
	icon: 'bulma',
	href: 'https://bulma.io/',
});

const scss = make_technology('SCSS', {
	icon: 'scss',
	href: 'https://sass-lang.com/',
});

const html = make_technology('HTML', {
	icon: 'html',
	href: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
});

const css = make_technology('CSS', {
	icon: 'css',
	href: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
});

export default make_section('Frontend & UIs', [
	svelte,
	vite,
	astro,
	react,
	flutter,
	vue,
	webpack,
	parcel,
	esbuild,
	tailwindcss,
	bootstrap,
	bulma,
	scss,
	html,
	css,
]);
