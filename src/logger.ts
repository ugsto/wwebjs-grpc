import winston from 'winston';
import { type LogLevel } from './config/schemas.js';

export class Logger {
	private static readonly levels = {
		levels: {
			emerg: 0,
			alert: 1,
			crit: 2,
			err: 3,
			warning: 4,
			notice: 5,
			info: 6,
			debug: 7,
		},
		colors: {
			emerg: 'red',
			alert: 'red',
			crit: 'red',
			err: 'red',
			warning: 'yellow',
			notice: 'cyan',
			info: 'green',
			debug: 'blue',
		},
	};

	private static getFormat(isProduction: boolean) {
		return winston.format.printf(({ ...args }) => {
			const timestamp = new Date().toISOString();
			const row = JSON.stringify(
				{ timestamp, ...args },
				null,
				isProduction ? 0 : 2,
			);

			if (isProduction) {
				return row;
			}

			return winston.format.colorize().colorize(args.level, row);
		});
	}

	private readonly logger: winston.Logger;

	constructor(logLevel: LogLevel) {
		winston.addColors(Logger.levels.colors);
		this.logger = winston.createLogger({
			level: logLevel,
			levels: Logger.levels.levels,
			format: winston.format.combine(
				Logger.getFormat(process.env.NODE_ENV === 'production'),
			),
			transports: [new winston.transports.Console()],
		});
	}

	log(level: LogLevel, message: string | Record<string, unknown>, meta?: any) {
		this.logger.log(level, message as unknown as string, meta);
	}
}
