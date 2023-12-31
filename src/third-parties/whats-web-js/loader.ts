import whatsapp, { Client } from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';
import { WhatsWebJs } from './wrapper.js';

export class WhatsWebJsLoader {
	private static async createClient() {
		const client = new Client({
			authStrategy: new whatsapp.LocalAuth({
				dataPath: '/tmp/wwebjs-grpc',
			}),
			puppeteer: {
				args: ['--no-sandbox', '--disable-setuid-sandbox'],
			},
		});

		client.on('qr', (qr) => {
			qrcode.generate(qr, { small: true });
		});

		await client.initialize();

		return client;
	}

	private readonly client: Promise<Client>;

	constructor() {
		this.client = WhatsWebJsLoader.createClient();
	}

	async loadClient() {
		return new WhatsWebJs(await this.client);
	}
}
