import { make_section, make_technology } from './types';

const typescript = make_technology('TypeScript', {
	icon: 'typescript',
	href: 'https://www.typescriptlang.org/',
	bg: [49, 120, 198, 0.2],
});

const javascript = make_technology('JavaScript', {
	icon: 'javascript',
	href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
	bg: [247, 223, 30, 0.2],
});

const rust = make_technology('Rust', {
	icon: 'rust',
	href: 'https://www.rust-lang.org/',
	bg: [0, 0, 0, 0.1],
	invert_type: 'invert-both',
});

const swift = make_technology('Swift', {
	icon: 'swift',
	href: 'https://swift.org/',
	bg: [255, 165, 0, 0.15],
});

const dart = make_technology('Dart', {
	icon: 'dart',
	href: 'https://dart.dev/',
	bg: [47, 183, 246, 0.2],
});

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

const flutter = make_technology('Flutter', {
	icon: 'flutter',
	href: 'https://flutter.dev/',
	bg: [47, 183, 246, 0.2],
});

const react = make_technology('React', {
	icon: 'react',
	href: 'https://react.dev/',
	bg: [97, 218, 251, 0.15],
});

export default make_section('Languages & Frameworks', [
	typescript,
	javascript,
	dart,
	rust,
	swift,
	svelte,
	flutter,
	vue,
	react,
]);
