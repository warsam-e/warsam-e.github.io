import { make_section, make_technology } from './types';

const xcode = make_technology('Xcode', {
	icon: 'xcode',
	href: 'https://developer.apple.com/xcode/',
});

const vscode = make_technology('VSCode', {
	icon: 'vscode',
	href: 'https://code.visualstudio.com/',
});

const android_studio = make_technology('Android Studio', {
	icon: 'android_studio',
	href: 'https://developer.android.com/studio',
});

const datagrip = make_technology('DataGrip', {
	icon: 'datagrip',
	href: 'https://www.jetbrains.com/datagrip/',
});

const git = make_technology('Git', {
	icon: 'git',
	href: 'https://git-scm.com/',
});

const github = make_technology('GitHub', {
	icon: 'github',
	href: 'https://github.com',
	invert_bg: true,
});

const figma = make_technology('Figma', {
	icon: 'figma',
	href: 'https://www.figma.com/',
});

const sketch = make_technology('Sketch', {
	icon: 'sketch',
	href: 'https://www.sketch.com/',
});

export default make_section('Tools & Workflow', [xcode, vscode, android_studio, datagrip, git, github, figma, sketch]);
