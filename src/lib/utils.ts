import { Vibrant } from 'node-vibrant/node';
import { join } from 'node:path';
import sharp from 'sharp';
import { logos } from './logos';

const proj_root = join(import.meta.url.replace('file:///', ''), '../../..');
const public_root = join(proj_root, 'public');

console.log(public_root);

export const get_vibrant = (icon: keyof typeof logos) =>
	sharp(join(public_root, logos[icon]))
		.png()
		.toBuffer()
		.then((buffer) => Vibrant.from(buffer).getPalette())
		.then(
			(r) =>
				(r.Vibrant ?? r.DarkVibrant ?? r.LightVibrant ?? r.Muted ?? r.DarkMuted ?? r.LightMuted)?.hex ??
				'#000000',
		);
