import { type PartialConfig } from './schemas.js';

export type ConfigLoadStrategy = {
	load(): PartialConfig;
};
