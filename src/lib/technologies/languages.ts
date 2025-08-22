import { make_section, make_technology } from './types';

const typescript = make_technology('TypeScript', {
	icon: 'typescript',
	href: 'https://www.typescriptlang.org/',
});

const javascript = make_technology('JavaScript', {
	icon: 'javascript',
	href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
});

const dart = make_technology('Dart', {
	icon: 'dart',
	href: 'https://dart.dev/',
});

const go = make_technology('Go', {
	icon: 'go',
	custom_hex: '#007d9c',
	href: 'https://go.dev/',
});

const rust = make_technology('Rust', {
	icon: 'rust',
	custom_hex: '#000000',
	href: 'https://www.rust-lang.org/',
	invert_bg: true,
});

const php = make_technology('PHP', {
	icon: 'php',
	// custom_hex: '#4F5B93',
	href: 'https://www.php.net/',
});

const swift = make_technology('Swift', {
	icon: 'swift',
	href: 'https://swift.org/',
});

const python = make_technology('Python', {
	icon: 'python',
	href: 'https://www.python.org/',
});

export default make_section('Programming Languages', [typescript, javascript, dart, go, rust, php, swift, python]);
