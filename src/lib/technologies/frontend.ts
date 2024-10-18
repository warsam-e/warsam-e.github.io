import { javascript, typescript } from './languages';
import { make_section, make_technology } from './types';

const svelte = make_technology('Svelte', {
	icon: 'svelte',
	href: 'https://svelte.dev/',
	bg: [255, 99, 71, 0.15],
});

const vue = make_technology('Vue', {
	icon: 'vue',
	href: 'https://vuejs.org/',
	bg: [65, 184, 131, 0.15],
});

const react = make_technology('React', {
	icon: 'react',
	href: 'https://react.dev/',
	bg: [97, 218, 251, 0.15],
});

const angular = make_technology('Angular', {
	icon: 'angular',
	href: 'https://angular.io/',
	bg: [220, 0, 0, 0.15],
});

const tailwindcss = make_technology('Tailwind CSS', {
	icon: 'tailwindcss',
	href: 'https://tailwindcss.com/',
	bg: [59, 130, 246, 0.15],
});

const bootstrap = make_technology('Bootstrap', {
	icon: 'bootstrap',
	href: 'https://getbootstrap.com/',
	bg: [112.520718, 44.062154, 249.437846, 0.2],
});

const bulma = make_technology('Bulma', {
	icon: 'bulma',
	href: 'https://bulma.io/',
	bg: [0, 209, 178, 0.15],
});

const sass = make_technology('SASS', {
	icon: 'sass',
	href: 'https://sass-lang.com/',
	bg: [199, 93, 190, 0.15],
});

const html = make_technology('HTML', {
	icon: 'html',
	href: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
	bg: [255, 99, 71, 0.15],
});

const css = make_technology('CSS', {
	icon: 'css',
	href: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
	bg: [59, 130, 246, 0.15],
});

export default make_section('Frontend', [
	svelte,
	vue,
	react,
	angular,
	typescript,
	javascript,
	tailwindcss,
	bootstrap,
	bulma,
	sass,
	html,
	css,
]);
