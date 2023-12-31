import { z } from 'zod';

export const logLevelSchema = z.enum([
	'emerg',
	'alert',
	'crit',
	'err',
	'warning',
	'notice',
	'info',
	'debug',
]);
export const configSchema = z.object({
	host: z.string().default('localhost'),
	port: z.number().min(0).max(65535).default(50051),
	logLevel: logLevelSchema.default('info'),
});
export const partialConfigSchema = configSchema.partial();

export type LogLevel = z.infer<typeof logLevelSchema>;
export type Config = z.infer<typeof configSchema>;
export type PartialConfig = z.infer<typeof partialConfigSchema>;
