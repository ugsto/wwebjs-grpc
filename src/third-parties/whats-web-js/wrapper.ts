import { type Client } from 'whatsapp-web.js';

export class WhatsWebJs {
	private static stringToWid(wid: string) {
		const [user, server] = wid.split('@');

		return { user, server };
	}

	constructor(private readonly client: Client) { }

	getInfo() {
		return this.client.info;
	}

	async acceptInvite(inviteCode: string) {
		const chatId = await this.client.acceptInvite(inviteCode);

		return WhatsWebJs.stringToWid(chatId);
	}
}
