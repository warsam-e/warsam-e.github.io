import { logos } from './logos';
import type { Technology } from './types';

export { technologies } from './technologies';

export const tech_icon = <T extends Technology['icon']>(name: T) => logos[name];
