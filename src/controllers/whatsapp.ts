import {
	GetInfoResponse,
	type AcceptInviteRequest,
	AcceptInviteResponse,
} from '../controllers/meta/whatsapp.js';
import { type WhatsWebJs } from '../third-parties/whats-web-js/wrapper.js';

export function getWhatsappController(client: WhatsWebJs) {
	return {
		async getInfo(): Promise<GetInfoResponse> {
			const info = client.getInfo();

			return GetInfoResponse.create({
				clientInfo: {
					wid: {
						...info.wid,
					},
					platform: info.platform,
					pushname: info.pushname,
				},
			});
		},

		async acceptInvite(
			request: AcceptInviteRequest,
		): Promise<AcceptInviteResponse> {
			const chatId = await client.acceptInvite(request.inviteCode);

			return AcceptInviteResponse.create({
				chatId,
			});
		},

		async acceptGroupV4Invite(): Promise<any> {
			console.log(0);
		},

		async getInviteInfo(): Promise<any> {
			console.log(0);
		},

		async archiveChat(): Promise<any> {
			console.log(0);
		},

		async pinChat(): Promise<any> {
			console.log(0);
		},

		async unpinChat(): Promise<any> {
			console.log(0);
		},

		async createGroup(): Promise<any> {
			console.log(0);
		},

		async getBlockedContacts(): Promise<any> {
			console.log(0);
		},

		async getChatById(): Promise<any> {
			console.log(0);
		},

		async getChats(): Promise<any> {
			console.log(0);
		},

		async getContactById(): Promise<any> {
			console.log(0);
		},

		async getMessageById(): Promise<any> {
			console.log(0);
		},

		async getContacts(): Promise<any> {
			console.log(0);
		},

		async getCountryCode(): Promise<any> {
			console.log(0);
		},

		async getFormattedNumber(): Promise<any> {
			console.log(0);
		},

		async getLabels(): Promise<any> {
			console.log(0);
		},

		async addOrRemoveLabels(): Promise<any> {
			console.log(0);
		},

		async getLabelById(): Promise<any> {
			console.log(0);
		},

		async getChatLabels(): Promise<any> {
			console.log(0);
		},

		async getChatsByLabelId(): Promise<any> {
			console.log(0);
		},

		async getProfilePicUrl(): Promise<any> {
			console.log(0);
		},

		async getCommonGroups(): Promise<any> {
			console.log(0);
		},

		async isRegisteredUser(): Promise<any> {
			console.log(0);
		},

		async muteChat(): Promise<any> {
			console.log(0);
		},

		async sendMessage(): Promise<any> {
			console.log(0);
		},

		async searchMessages(): Promise<any> {
			console.log(0);
		},

		async sendPresenceAvailable(): Promise<any> {
			console.log(0);
		},

		async sendPresenceUnavailable(): Promise<any> {
			console.log(0);
		},

		async sendSeen(): Promise<any> {
			console.log(0);
		},

		async markChatUnread(): Promise<any> {
			console.log(0);
		},

		async setStatus(): Promise<any> {
			console.log(0);
		},

		async setDisplayName(): Promise<any> {
			console.log(0);
		},

		async unarchiveChat(): Promise<any> {
			console.log(0);
		},

		async unmuteChat(): Promise<any> {
			console.log(0);
		},

		async setProfilePicture(): Promise<any> {
			console.log(0);
		},

		async deleteProfilePicture(): Promise<any> {
			console.log(0);
		},

		async getGroupMembershipRequests(): Promise<any> {
			console.log(0);
		},

		async approveGroupMembershipRequests(): Promise<any> {
			console.log(0);
		},

		async rejectGroupMembershipRequests(): Promise<any> {
			console.log(0);
		},
	};
}
