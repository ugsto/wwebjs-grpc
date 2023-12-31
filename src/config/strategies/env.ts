import { cleanObjectUndefined } from '../../utils/clean-object-undefined.js';
import { type ConfigLoadStrategy } from '../interfaces.js';
import { partialConfigSchema, type PartialConfig } from '../schemas.js';

export class EnvConfigLoader implements ConfigLoadStrategy {
	private static fromEnv() {
		return {
			host: process.env.HOST,
			port:
				process.env.PORT === undefined ? undefined : Number(process.env.PORT),
			logLevel: process.env.LOG_LEVEL,
		};
	}

	load(): PartialConfig {
		return partialConfigSchema.parse(EnvConfigLoader.fromEnv());
	}
}
