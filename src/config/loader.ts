import { mergeObjects } from '../utils/merge-objects.js';
import { type ConfigLoadStrategy } from './interfaces.js';
import { type PartialConfig, type Config, configSchema } from './schemas.js';

export class ConfigLoader {
	private readonly config: Config;

	constructor(strategies: ConfigLoadStrategy[]) {
		const partialConfig = strategies.reduce<PartialConfig>(
			(prev, curr) => mergeObjects(prev, curr.load()),
			{},
		);

		this.config = configSchema.parse(partialConfig);
	}

	get() {
		return this.config;
	}
}
