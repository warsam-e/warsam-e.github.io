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

const rust = make_technology('Rust', {
	icon: 'rust',
	href: 'https://www.rust-lang.org/',
	invert_bg: true,
});

const swift = make_technology('Swift', {
	icon: 'swift',
	href: 'https://swift.org/',
});

const python = make_technology('Python', {
	icon: 'python',
	href: 'https://www.python.org/',
});

export default make_section('Languages & Frameworks', [typescript, javascript, dart, rust, swift, python]);
