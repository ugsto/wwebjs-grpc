import { Command } from 'commander';
import { type ConfigLoadStrategy } from '../interfaces.js';
import { partialConfigSchema, type PartialConfig } from '../schemas.js';
import { cleanObjectUndefined } from '../../utils/clean-object-undefined.js';

export class CliConfigLoader implements ConfigLoadStrategy {
	private static parseArgs() {
		const program = new Command();

		program
			.option('-h, --host <host>', 'Host address (default: localhost)')
			.option('-p, --port <port>', 'Port number (default: 50051)')
			.option(
				'-l, --logLevel <level>',
				'Log level (debug, info, notice, warning, err, crit, alert, emerg, default: info)',
			);

		program.parse(process.argv);

		const options = program.opts();

		return {
			/* eslint-disable @typescript-eslint/no-unsafe-assignment */
			host: options.host,
			port: options.port === undefined ? undefined : Number(options.port),
			logLevel: options.logLevel,
			/* eslint-enable @typescript-eslint/no-unsafe-assignment */
		};
	}

	load(): PartialConfig {
		return partialConfigSchema.parse(CliConfigLoader.parseArgs());
	}
}
