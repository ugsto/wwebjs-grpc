/* eslint-disable */
import Long from "long";
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal.js";
import { Duration } from "./google/protobuf/duration.js";
import { Empty } from "./google/protobuf/empty.js";
import { Timestamp } from "./google/protobuf/timestamp.js";

export const protobufPackage = "wwebjs";

export enum MessageAck {
  MESSAGE_ACK_UNSPECIFIED = 0,
  MESSAGE_ACK_ERROR = 1,
  MESSAGE_ACK_PENDING = 2,
  MESSAGE_ACK_SERVER = 3,
  MESSAGE_ACK_DEVICE = 4,
  MESSAGE_ACK_READ = 5,
  MESSAGE_ACK_PLAYED = 6,
  UNRECOGNIZED = -1,
}

export function messageAckFromJSON(object: any): MessageAck {
  switch (object) {
    case 0:
    case "MESSAGE_ACK_UNSPECIFIED":
      return MessageAck.MESSAGE_ACK_UNSPECIFIED;
    case 1:
    case "MESSAGE_ACK_ERROR":
      return MessageAck.MESSAGE_ACK_ERROR;
    case 2:
    case "MESSAGE_ACK_PENDING":
      return MessageAck.MESSAGE_ACK_PENDING;
    case 3:
    case "MESSAGE_ACK_SERVER":
      return MessageAck.MESSAGE_ACK_SERVER;
    case 4:
    case "MESSAGE_ACK_DEVICE":
      return MessageAck.MESSAGE_ACK_DEVICE;
    case 5:
    case "MESSAGE_ACK_READ":
      return MessageAck.MESSAGE_ACK_READ;
    case 6:
    case "MESSAGE_ACK_PLAYED":
      return MessageAck.MESSAGE_ACK_PLAYED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MessageAck.UNRECOGNIZED;
  }
}

export function messageAckToJSON(object: MessageAck): string {
  switch (object) {
    case MessageAck.MESSAGE_ACK_UNSPECIFIED:
      return "MESSAGE_ACK_UNSPECIFIED";
    case MessageAck.MESSAGE_ACK_ERROR:
      return "MESSAGE_ACK_ERROR";
    case MessageAck.MESSAGE_ACK_PENDING:
      return "MESSAGE_ACK_PENDING";
    case MessageAck.MESSAGE_ACK_SERVER:
      return "MESSAGE_ACK_SERVER";
    case MessageAck.MESSAGE_ACK_DEVICE:
      return "MESSAGE_ACK_DEVICE";
    case MessageAck.MESSAGE_ACK_READ:
      return "MESSAGE_ACK_READ";
    case MessageAck.MESSAGE_ACK_PLAYED:
      return "MESSAGE_ACK_PLAYED";
    case MessageAck.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum MessageType {
  MESSAGE_TYPE_UNSPECIFIED = 0,
  MESSAGE_TYPE_TEXT = 1,
  MESSAGE_TYPE_AUDIO = 2,
  MESSAGE_TYPE_VOICE = 3,
  MESSAGE_TYPE_IMAGE = 4,
  MESSAGE_TYPE_VIDEO = 5,
  MESSAGE_TYPE_DOCUMENT = 6,
  MESSAGE_TYPE_STICKER = 7,
  MESSAGE_TYPE_LOCATION = 8,
  MESSAGE_TYPE_CONTACT_CARD = 9,
  MESSAGE_TYPE_CONTACT_CARD_MULTI = 10,
  MESSAGE_TYPE_ORDER = 11,
  MESSAGE_TYPE_REVOKED = 12,
  MESSAGE_TYPE_PRODUCT = 13,
  MESSAGE_TYPE_UNKNOWN = 14,
  MESSAGE_TYPE_GROUP_INVITE = 15,
  MESSAGE_TYPE_LIST = 16,
  MESSAGE_TYPE_LIST_RESPONSE = 17,
  MESSAGE_TYPE_BUTTONS_RESPONSE = 18,
  MESSAGE_TYPE_PAYMENT = 19,
  MESSAGE_TYPE_BROADCAST_NOTIFICATION = 20,
  MESSAGE_TYPE_CALL_LOG = 21,
  MESSAGE_TYPE_CIPHERTEXT = 22,
  MESSAGE_TYPE_DEBUG = 23,
  MESSAGE_TYPE_E2E_NOTIFICATION = 24,
  MESSAGE_TYPE_GP2 = 25,
  MESSAGE_TYPE_GROUP_NOTIFICATION = 26,
  MESSAGE_TYPE_HSM = 27,
  MESSAGE_TYPE_INTERACTIVE = 28,
  MESSAGE_TYPE_NATIVE_FLOW = 29,
  MESSAGE_TYPE_NOTIFICATION = 30,
  MESSAGE_TYPE_NOTIFICATION_TEMPLATE = 31,
  MESSAGE_TYPE_OVERSIZED = 32,
  MESSAGE_TYPE_PROTOCOL = 33,
  MESSAGE_TYPE_REACTION = 34,
  MESSAGE_TYPE_TEMPLATE_BUTTON_REPLY = 35,
  MESSAGE_TYPE_POLL_CREATION = 36,
  UNRECOGNIZED = -1,
}

export function messageTypeFromJSON(object: any): MessageType {
  switch (object) {
    case 0:
    case "MESSAGE_TYPE_UNSPECIFIED":
      return MessageType.MESSAGE_TYPE_UNSPECIFIED;
    case 1:
    case "MESSAGE_TYPE_TEXT":
      return MessageType.MESSAGE_TYPE_TEXT;
    case 2:
    case "MESSAGE_TYPE_AUDIO":
      return MessageType.MESSAGE_TYPE_AUDIO;
    case 3:
    case "MESSAGE_TYPE_VOICE":
      return MessageType.MESSAGE_TYPE_VOICE;
    case 4:
    case "MESSAGE_TYPE_IMAGE":
      return MessageType.MESSAGE_TYPE_IMAGE;
    case 5:
    case "MESSAGE_TYPE_VIDEO":
      return MessageType.MESSAGE_TYPE_VIDEO;
    case 6:
    case "MESSAGE_TYPE_DOCUMENT":
      return MessageType.MESSAGE_TYPE_DOCUMENT;
    case 7:
    case "MESSAGE_TYPE_STICKER":
      return MessageType.MESSAGE_TYPE_STICKER;
    case 8:
    case "MESSAGE_TYPE_LOCATION":
      return MessageType.MESSAGE_TYPE_LOCATION;
    case 9:
    case "MESSAGE_TYPE_CONTACT_CARD":
      return MessageType.MESSAGE_TYPE_CONTACT_CARD;
    case 10:
    case "MESSAGE_TYPE_CONTACT_CARD_MULTI":
      return MessageType.MESSAGE_TYPE_CONTACT_CARD_MULTI;
    case 11:
    case "MESSAGE_TYPE_ORDER":
      return MessageType.MESSAGE_TYPE_ORDER;
    case 12:
    case "MESSAGE_TYPE_REVOKED":
      return MessageType.MESSAGE_TYPE_REVOKED;
    case 13:
    case "MESSAGE_TYPE_PRODUCT":
      return MessageType.MESSAGE_TYPE_PRODUCT;
    case 14:
    case "MESSAGE_TYPE_UNKNOWN":
      return MessageType.MESSAGE_TYPE_UNKNOWN;
    case 15:
    case "MESSAGE_TYPE_GROUP_INVITE":
      return MessageType.MESSAGE_TYPE_GROUP_INVITE;
    case 16:
    case "MESSAGE_TYPE_LIST":
      return MessageType.MESSAGE_TYPE_LIST;
    case 17:
    case "MESSAGE_TYPE_LIST_RESPONSE":
      return MessageType.MESSAGE_TYPE_LIST_RESPONSE;
    case 18:
    case "MESSAGE_TYPE_BUTTONS_RESPONSE":
      return MessageType.MESSAGE_TYPE_BUTTONS_RESPONSE;
    case 19:
    case "MESSAGE_TYPE_PAYMENT":
      return MessageType.MESSAGE_TYPE_PAYMENT;
    case 20:
    case "MESSAGE_TYPE_BROADCAST_NOTIFICATION":
      return MessageType.MESSAGE_TYPE_BROADCAST_NOTIFICATION;
    case 21:
    case "MESSAGE_TYPE_CALL_LOG":
      return MessageType.MESSAGE_TYPE_CALL_LOG;
    case 22:
    case "MESSAGE_TYPE_CIPHERTEXT":
      return MessageType.MESSAGE_TYPE_CIPHERTEXT;
    case 23:
    case "MESSAGE_TYPE_DEBUG":
      return MessageType.MESSAGE_TYPE_DEBUG;
    case 24:
    case "MESSAGE_TYPE_E2E_NOTIFICATION":
      return MessageType.MESSAGE_TYPE_E2E_NOTIFICATION;
    case 25:
    case "MESSAGE_TYPE_GP2":
      return MessageType.MESSAGE_TYPE_GP2;
    case 26:
    case "MESSAGE_TYPE_GROUP_NOTIFICATION":
      return MessageType.MESSAGE_TYPE_GROUP_NOTIFICATION;
    case 27:
    case "MESSAGE_TYPE_HSM":
      return MessageType.MESSAGE_TYPE_HSM;
    case 28:
    case "MESSAGE_TYPE_INTERACTIVE":
      return MessageType.MESSAGE_TYPE_INTERACTIVE;
    case 29:
    case "MESSAGE_TYPE_NATIVE_FLOW":
      return MessageType.MESSAGE_TYPE_NATIVE_FLOW;
    case 30:
    case "MESSAGE_TYPE_NOTIFICATION":
      return MessageType.MESSAGE_TYPE_NOTIFICATION;
    case 31:
    case "MESSAGE_TYPE_NOTIFICATION_TEMPLATE":
      return MessageType.MESSAGE_TYPE_NOTIFICATION_TEMPLATE;
    case 32:
    case "MESSAGE_TYPE_OVERSIZED":
      return MessageType.MESSAGE_TYPE_OVERSIZED;
    case 33:
    case "MESSAGE_TYPE_PROTOCOL":
      return MessageType.MESSAGE_TYPE_PROTOCOL;
    case 34:
    case "MESSAGE_TYPE_REACTION":
      return MessageType.MESSAGE_TYPE_REACTION;
    case 35:
    case "MESSAGE_TYPE_TEMPLATE_BUTTON_REPLY":
      return MessageType.MESSAGE_TYPE_TEMPLATE_BUTTON_REPLY;
    case 36:
    case "MESSAGE_TYPE_POLL_CREATION":
      return MessageType.MESSAGE_TYPE_POLL_CREATION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MessageType.UNRECOGNIZED;
  }
}

export function messageTypeToJSON(object: MessageType): string {
  switch (object) {
    case MessageType.MESSAGE_TYPE_UNSPECIFIED:
      return "MESSAGE_TYPE_UNSPECIFIED";
    case MessageType.MESSAGE_TYPE_TEXT:
      return "MESSAGE_TYPE_TEXT";
    case MessageType.MESSAGE_TYPE_AUDIO:
      return "MESSAGE_TYPE_AUDIO";
    case MessageType.MESSAGE_TYPE_VOICE:
      return "MESSAGE_TYPE_VOICE";
    case MessageType.MESSAGE_TYPE_IMAGE:
      return "MESSAGE_TYPE_IMAGE";
    case MessageType.MESSAGE_TYPE_VIDEO:
      return "MESSAGE_TYPE_VIDEO";
    case MessageType.MESSAGE_TYPE_DOCUMENT:
      return "MESSAGE_TYPE_DOCUMENT";
    case MessageType.MESSAGE_TYPE_STICKER:
      return "MESSAGE_TYPE_STICKER";
    case MessageType.MESSAGE_TYPE_LOCATION:
      return "MESSAGE_TYPE_LOCATION";
    case MessageType.MESSAGE_TYPE_CONTACT_CARD:
      return "MESSAGE_TYPE_CONTACT_CARD";
    case MessageType.MESSAGE_TYPE_CONTACT_CARD_MULTI:
      return "MESSAGE_TYPE_CONTACT_CARD_MULTI";
    case MessageType.MESSAGE_TYPE_ORDER:
      return "MESSAGE_TYPE_ORDER";
    case MessageType.MESSAGE_TYPE_REVOKED:
      return "MESSAGE_TYPE_REVOKED";
    case MessageType.MESSAGE_TYPE_PRODUCT:
      return "MESSAGE_TYPE_PRODUCT";
    case MessageType.MESSAGE_TYPE_UNKNOWN:
      return "MESSAGE_TYPE_UNKNOWN";
    case MessageType.MESSAGE_TYPE_GROUP_INVITE:
      return "MESSAGE_TYPE_GROUP_INVITE";
    case MessageType.MESSAGE_TYPE_LIST:
      return "MESSAGE_TYPE_LIST";
    case MessageType.MESSAGE_TYPE_LIST_RESPONSE:
      return "MESSAGE_TYPE_LIST_RESPONSE";
    case MessageType.MESSAGE_TYPE_BUTTONS_RESPONSE:
      return "MESSAGE_TYPE_BUTTONS_RESPONSE";
    case MessageType.MESSAGE_TYPE_PAYMENT:
      return "MESSAGE_TYPE_PAYMENT";
    case MessageType.MESSAGE_TYPE_BROADCAST_NOTIFICATION:
      return "MESSAGE_TYPE_BROADCAST_NOTIFICATION";
    case MessageType.MESSAGE_TYPE_CALL_LOG:
      return "MESSAGE_TYPE_CALL_LOG";
    case MessageType.MESSAGE_TYPE_CIPHERTEXT:
      return "MESSAGE_TYPE_CIPHERTEXT";
    case MessageType.MESSAGE_TYPE_DEBUG:
      return "MESSAGE_TYPE_DEBUG";
    case MessageType.MESSAGE_TYPE_E2E_NOTIFICATION:
      return "MESSAGE_TYPE_E2E_NOTIFICATION";
    case MessageType.MESSAGE_TYPE_GP2:
      return "MESSAGE_TYPE_GP2";
    case MessageType.MESSAGE_TYPE_GROUP_NOTIFICATION:
      return "MESSAGE_TYPE_GROUP_NOTIFICATION";
    case MessageType.MESSAGE_TYPE_HSM:
      return "MESSAGE_TYPE_HSM";
    case MessageType.MESSAGE_TYPE_INTERACTIVE:
      return "MESSAGE_TYPE_INTERACTIVE";
    case MessageType.MESSAGE_TYPE_NATIVE_FLOW:
      return "MESSAGE_TYPE_NATIVE_FLOW";
    case MessageType.MESSAGE_TYPE_NOTIFICATION:
      return "MESSAGE_TYPE_NOTIFICATION";
    case MessageType.MESSAGE_TYPE_NOTIFICATION_TEMPLATE:
      return "MESSAGE_TYPE_NOTIFICATION_TEMPLATE";
    case MessageType.MESSAGE_TYPE_OVERSIZED:
      return "MESSAGE_TYPE_OVERSIZED";
    case MessageType.MESSAGE_TYPE_PROTOCOL:
      return "MESSAGE_TYPE_PROTOCOL";
    case MessageType.MESSAGE_TYPE_REACTION:
      return "MESSAGE_TYPE_REACTION";
    case MessageType.MESSAGE_TYPE_TEMPLATE_BUTTON_REPLY:
      return "MESSAGE_TYPE_TEMPLATE_BUTTON_REPLY";
    case MessageType.MESSAGE_TYPE_POLL_CREATION:
      return "MESSAGE_TYPE_POLL_CREATION";
    case MessageType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Wid {
  server: string;
  user: string;
}

export interface MessageId {
  fromMe: boolean;
  remote: Wid | undefined;
  id: string;
}

export interface MessageMedia {
  data: string;
  filename?: string | undefined;
  filesize?: number | undefined;
  mimetype: string;
}

export interface Location {
  address?: string | undefined;
  description?: string | undefined;
  latitude: number;
  longitude: number;
  name?: string | undefined;
  url?: string | undefined;
}

export interface Message {
  ack: MessageAck;
  author?: Wid | undefined;
  body: string;
  broadcast: boolean;
  deviceType: string;
  duration: string;
  forwardingScore: number;
  from: Wid | undefined;
  fromMe: boolean;
  hasMedia: boolean;
  hasQuotedMessage: boolean;
  id: MessageId | undefined;
  inviteV4?: InviteV4 | undefined;
  isEphemeral: boolean;
  isForwarded: boolean;
  isGif: boolean;
  isStatus: boolean;
  links: Message_Link[];
  location: Location | undefined;
  mediaKey?: string | undefined;
  mentionedIds: Wid[];
  orderId: string;
  timestamp: Date | undefined;
  to: Wid | undefined;
  token: string;
  type: MessageType;
  vCards: string[];
}

export interface Message_Link {
  link: string;
  isSuspicious: boolean;
}

export interface Contact {
  id: Wid | undefined;
  isBlocked: boolean;
  isBusiness: boolean;
  isEnterprise: boolean;
  isGroup: boolean;
  isMe: boolean;
  isMyContact: boolean;
  isUser: boolean;
  isWaContact: boolean;
  name?: string | undefined;
  number: string;
  pushname: string;
  shortName?: string | undefined;
}

export interface Chat {
  archived: boolean;
  id: Wid | undefined;
  isGroup: boolean;
  isMuted: boolean;
  isReadOnly: boolean;
  lastMessage: Message | undefined;
  muteExpiration: Duration | undefined;
  name: string;
  pinned: boolean;
  timestamp: Date | undefined;
  unreadCount: number;
}

export interface Label {
  hexColor: string;
  id: string;
  name: string;
}

export interface ClientInfo {
  wid: Wid | undefined;
  platform: string;
  pushname: string;
}

export interface InviteV4 {
  inviteCode: string;
  inviteCodeExp: Date | undefined;
  groupId: Wid | undefined;
  groupName?: string | undefined;
  fromId: Wid | undefined;
  toId: Wid | undefined;
}

export interface GetInfoResponse {
  clientInfo: ClientInfo | undefined;
}

export interface CreateGroupResult {
  title: string;
  gid: Wid | undefined;
  participants: { [key: string]: CreateGroupResult_Participant };
}

export interface CreateGroupResult_Participant {
  statusCode: number;
  message: string;
  isGroupCreator: boolean;
  isInviteV4Sent: boolean;
}

export interface CreateGroupResult_ParticipantsEntry {
  key: string;
  value: CreateGroupResult_Participant | undefined;
}

export interface MembershipRequestActionOptions {
  requesterIds: Wid[];
  sleep: Duration | undefined;
}

export interface MembershipRequestActionResult {
  requesterId: Wid | undefined;
  error?: number | undefined;
  message: string;
}

export interface AcceptInviteRequest {
  inviteCode: string;
}

export interface AcceptInviteResponse {
  chatId: Wid | undefined;
}

export interface AcceptGroupV4InviteResponse {
  status: number;
}

export interface GetInviteInfoRequest {
  inviteCode: string;
}

export interface GetInviteInfoResponse {
  inviteV4: InviteV4 | undefined;
}

export interface ArchiveChatRequest {
  chatId: Wid | undefined;
}

export interface PinChatRequest {
  chatId: Wid | undefined;
}

export interface UnpinChatRequest {
  chatId: Wid | undefined;
}

export interface CreateGroupRequest {
  title: string;
  participantIds: Wid[];
  options?: CreateGroupRequest_Options | undefined;
}

export interface CreateGroupRequest_Options {
  messageTimer?: Duration | undefined;
  parentGroupId?: Wid | undefined;
  autoSendInviteV4?: boolean | undefined;
  comment?: string | undefined;
}

export interface CreateGroupResponse {
  result: CreateGroupResult | undefined;
}

export interface GetBlockedContactsResponse {
  contacts: Contact[];
}

export interface GetChatByIdRequest {
  chatId: Wid | undefined;
}

export interface GetChatByIdResponse {
  chat: Chat | undefined;
}

export interface GetChatsResponse {
  chats: Chat[];
}

export interface GetContactByIdRequest {
  contactId: Wid | undefined;
}

export interface GetContactByIdResponse {
  contact: Contact | undefined;
}

export interface GetMessageByIdRequest {
  messageId: MessageId | undefined;
}

export interface GetMessageByIdResponse {
  message: Message | undefined;
}

export interface GetContactsResponse {
  contacts: Contact[];
}

export interface GetCountryCodeRequest {
  messageId: MessageId | undefined;
}

export interface GetCountryCodeResponse {
  countryCode: string;
}

export interface GetFormattedNumberRequest {
  messageId: MessageId | undefined;
}

export interface GetFormattedNumberResponse {
  formattedNumber: string;
}

export interface GetLabelsResponse {
  labels: Label[];
}

export interface AddOrRemoveLabelsRequest {
  labelIds: string[];
  chatIds: Wid[];
}

export interface GetLabelByIdRequest {
  labelId: string;
}

export interface GetLabelByIdResponse {
  label: Label | undefined;
}

export interface GetChatLabelsRequest {
  chatId: Wid | undefined;
}

export interface GetChatLabelsResponse {
  labels: Label[];
}

export interface GetChatsByLabelIdRequest {
  labelId: string;
}

export interface GetChatsByLabelIdResponse {
  chats: Chat[];
}

export interface GetProfilePicUrlRequest {
  contactId: Wid | undefined;
}

export interface GetProfilePicUrlResponse {
  profilePicUrl: string;
}

export interface GetCommonGroupsRequest {
  contactId: Wid | undefined;
}

export interface GetCommonGroupsResponse {
  chats: Chat[];
}

export interface IsRegisteredUserRequest {
  contactId: Wid | undefined;
}

export interface IsRegisteredUserResponse {
  isRegistered: boolean;
}

export interface MuteChatRequest {
  chatId: Wid | undefined;
}

export interface SendMessageRequest {
  chatId: Wid | undefined;
  content: string;
  options?: SendMessageRequest_Options | undefined;
}

export interface SendMessageRequest_Options {
  linkPreview?: boolean | undefined;
  sendAudioAsVoice?: boolean | undefined;
  sendVideoAsGif?: boolean | undefined;
  sendMediaAsSticker?: boolean | undefined;
  sendMediaAsDocument?: boolean | undefined;
  isViewOnce?: boolean | undefined;
  parseVcards?: boolean | undefined;
  caption?: string | undefined;
  quotedMessageId?: MessageId | undefined;
  mentions: Contact[];
  sendSeen?: boolean | undefined;
  stickerAuthor?: string | undefined;
  stickerName?: string | undefined;
  stickerCategories: string[];
  media?: MessageMedia | undefined;
}

export interface SendMessageResponse {
  message: Message | undefined;
}

export interface SearchMessagesRequest {
  query: string;
  options?: SearchMessagesRequest_Options | undefined;
}

export interface SearchMessagesRequest_Options {
  page?: number | undefined;
  limit?: number | undefined;
  chatId?: Wid | undefined;
}

export interface SearchMessagesResponse {
  messages: Message[];
}

export interface SendSeenRequest {
  chatId: Wid | undefined;
}

export interface MarkChatUnreadRequest {
  chatId: Wid | undefined;
}

export interface SetStatusRequest {
  status: string;
}

export interface SetDisplayNameRequest {
  displayName: string;
}

export interface UnarchiveChatRequest {
  chatId: Wid | undefined;
}

export interface UnmuteChatRequest {
  chatId: Wid | undefined;
}

export interface SetProfilePictureRequest {
  media: MessageMedia | undefined;
}

export interface GetGroupMembershipRequestsRequest {
  chatId: Wid | undefined;
}

export interface GetGroupMembershipRequestsResponse {
  requests: GetGroupMembershipRequestsResponse_GroupMembershipRequest[];
}

export interface GetGroupMembershipRequestsResponse_GroupMembershipRequest {
  id: Wid | undefined;
  addedBy: Wid | undefined;
  parentGroupId?: Wid | undefined;
  requestMethod: string;
  t?: Date | undefined;
}

export interface ApproveGroupMembershipRequestsRequest {
  chatId: Wid | undefined;
  options: MembershipRequestActionOptions | undefined;
}

export interface ApproveGroupMembershipRequestsResponse {
  results: MembershipRequestActionResult[];
}

export interface RejectGroupMembershipRequestsRequest {
  chatId: Wid | undefined;
  options: MembershipRequestActionOptions | undefined;
}

export interface RejectGroupMembershipRequestsResponse {
  results: MembershipRequestActionResult[];
}

function createBaseWid(): Wid {
  return { server: "", user: "" };
}

export const Wid = {
  encode(message: Wid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.server !== "") {
      writer.uint32(10).string(message.server);
    }
    if (message.user !== "") {
      writer.uint32(18).string(message.user);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Wid {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.server = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.user = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Wid {
    return {
      server: isSet(object.server) ? globalThis.String(object.server) : "",
      user: isSet(object.user) ? globalThis.String(object.user) : "",
    };
  },

  toJSON(message: Wid): unknown {
    const obj: any = {};
    if (message.server !== "") {
      obj.server = message.server;
    }
    if (message.user !== "") {
      obj.user = message.user;
    }
    return obj;
  },

  create(base?: DeepPartial<Wid>): Wid {
    return Wid.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Wid>): Wid {
    const message = createBaseWid();
    message.server = object.server ?? "";
    message.user = object.user ?? "";
    return message;
  },
};

function createBaseMessageId(): MessageId {
  return { fromMe: false, remote: undefined, id: "" };
}

export const MessageId = {
  encode(message: MessageId, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fromMe === true) {
      writer.uint32(8).bool(message.fromMe);
    }
    if (message.remote !== undefined) {
      Wid.encode(message.remote, writer.uint32(18).fork()).ldelim();
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageId {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.fromMe = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.remote = Wid.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MessageId {
    return {
      fromMe: isSet(object.fromMe) ? globalThis.Boolean(object.fromMe) : false,
      remote: isSet(object.remote) ? Wid.fromJSON(object.remote) : undefined,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
    };
  },

  toJSON(message: MessageId): unknown {
    const obj: any = {};
    if (message.fromMe === true) {
      obj.fromMe = message.fromMe;
    }
    if (message.remote !== undefined) {
      obj.remote = Wid.toJSON(message.remote);
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create(base?: DeepPartial<MessageId>): MessageId {
    return MessageId.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MessageId>): MessageId {
    const message = createBaseMessageId();
    message.fromMe = object.fromMe ?? false;
    message.remote = (object.remote !== undefined && object.remote !== null)
      ? Wid.fromPartial(object.remote)
      : undefined;
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseMessageMedia(): MessageMedia {
  return { data: "", filename: undefined, filesize: undefined, mimetype: "" };
}

export const MessageMedia = {
  encode(message: MessageMedia, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data !== "") {
      writer.uint32(10).string(message.data);
    }
    if (message.filename !== undefined) {
      writer.uint32(18).string(message.filename);
    }
    if (message.filesize !== undefined) {
      writer.uint32(24).uint64(message.filesize);
    }
    if (message.mimetype !== "") {
      writer.uint32(34).string(message.mimetype);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageMedia {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageMedia();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.data = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.filename = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.filesize = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.mimetype = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MessageMedia {
    return {
      data: isSet(object.data) ? globalThis.String(object.data) : "",
      filename: isSet(object.filename) ? globalThis.String(object.filename) : undefined,
      filesize: isSet(object.filesize) ? globalThis.Number(object.filesize) : undefined,
      mimetype: isSet(object.mimetype) ? globalThis.String(object.mimetype) : "",
    };
  },

  toJSON(message: MessageMedia): unknown {
    const obj: any = {};
    if (message.data !== "") {
      obj.data = message.data;
    }
    if (message.filename !== undefined) {
      obj.filename = message.filename;
    }
    if (message.filesize !== undefined) {
      obj.filesize = Math.round(message.filesize);
    }
    if (message.mimetype !== "") {
      obj.mimetype = message.mimetype;
    }
    return obj;
  },

  create(base?: DeepPartial<MessageMedia>): MessageMedia {
    return MessageMedia.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MessageMedia>): MessageMedia {
    const message = createBaseMessageMedia();
    message.data = object.data ?? "";
    message.filename = object.filename ?? undefined;
    message.filesize = object.filesize ?? undefined;
    message.mimetype = object.mimetype ?? "";
    return message;
  },
};

function createBaseLocation(): Location {
  return { address: undefined, description: undefined, latitude: 0, longitude: 0, name: undefined, url: undefined };
}

export const Location = {
  encode(message: Location, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== undefined) {
      writer.uint32(10).string(message.address);
    }
    if (message.description !== undefined) {
      writer.uint32(18).string(message.description);
    }
    if (message.latitude !== 0) {
      writer.uint32(29).float(message.latitude);
    }
    if (message.longitude !== 0) {
      writer.uint32(37).float(message.longitude);
    }
    if (message.name !== undefined) {
      writer.uint32(42).string(message.name);
    }
    if (message.url !== undefined) {
      writer.uint32(50).string(message.url);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Location {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLocation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 29) {
            break;
          }

          message.latitude = reader.float();
          continue;
        case 4:
          if (tag !== 37) {
            break;
          }

          message.longitude = reader.float();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.name = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.url = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Location {
    return {
      address: isSet(object.address) ? globalThis.String(object.address) : undefined,
      description: isSet(object.description) ? globalThis.String(object.description) : undefined,
      latitude: isSet(object.latitude) ? globalThis.Number(object.latitude) : 0,
      longitude: isSet(object.longitude) ? globalThis.Number(object.longitude) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : undefined,
      url: isSet(object.url) ? globalThis.String(object.url) : undefined,
    };
  },

  toJSON(message: Location): unknown {
    const obj: any = {};
    if (message.address !== undefined) {
      obj.address = message.address;
    }
    if (message.description !== undefined) {
      obj.description = message.description;
    }
    if (message.latitude !== 0) {
      obj.latitude = message.latitude;
    }
    if (message.longitude !== 0) {
      obj.longitude = message.longitude;
    }
    if (message.name !== undefined) {
      obj.name = message.name;
    }
    if (message.url !== undefined) {
      obj.url = message.url;
    }
    return obj;
  },

  create(base?: DeepPartial<Location>): Location {
    return Location.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Location>): Location {
    const message = createBaseLocation();
    message.address = object.address ?? undefined;
    message.description = object.description ?? undefined;
    message.latitude = object.latitude ?? 0;
    message.longitude = object.longitude ?? 0;
    message.name = object.name ?? undefined;
    message.url = object.url ?? undefined;
    return message;
  },
};

function createBaseMessage(): Message {
  return {
    ack: 0,
    author: undefined,
    body: "",
    broadcast: false,
    deviceType: "",
    duration: "",
    forwardingScore: 0,
    from: undefined,
    fromMe: false,
    hasMedia: false,
    hasQuotedMessage: false,
    id: undefined,
    inviteV4: undefined,
    isEphemeral: false,
    isForwarded: false,
    isGif: false,
    isStatus: false,
    links: [],
    location: undefined,
    mediaKey: undefined,
    mentionedIds: [],
    orderId: "",
    timestamp: undefined,
    to: undefined,
    token: "",
    type: 0,
    vCards: [],
  };
}

export const Message = {
  encode(message: Message, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ack !== 0) {
      writer.uint32(8).int32(message.ack);
    }
    if (message.author !== undefined) {
      Wid.encode(message.author, writer.uint32(18).fork()).ldelim();
    }
    if (message.body !== "") {
      writer.uint32(26).string(message.body);
    }
    if (message.broadcast === true) {
      writer.uint32(32).bool(message.broadcast);
    }
    if (message.deviceType !== "") {
      writer.uint32(42).string(message.deviceType);
    }
    if (message.duration !== "") {
      writer.uint32(50).string(message.duration);
    }
    if (message.forwardingScore !== 0) {
      writer.uint32(56).uint32(message.forwardingScore);
    }
    if (message.from !== undefined) {
      Wid.encode(message.from, writer.uint32(66).fork()).ldelim();
    }
    if (message.fromMe === true) {
      writer.uint32(72).bool(message.fromMe);
    }
    if (message.hasMedia === true) {
      writer.uint32(80).bool(message.hasMedia);
    }
    if (message.hasQuotedMessage === true) {
      writer.uint32(88).bool(message.hasQuotedMessage);
    }
    if (message.id !== undefined) {
      MessageId.encode(message.id, writer.uint32(98).fork()).ldelim();
    }
    if (message.inviteV4 !== undefined) {
      InviteV4.encode(message.inviteV4, writer.uint32(106).fork()).ldelim();
    }
    if (message.isEphemeral === true) {
      writer.uint32(112).bool(message.isEphemeral);
    }
    if (message.isForwarded === true) {
      writer.uint32(120).bool(message.isForwarded);
    }
    if (message.isGif === true) {
      writer.uint32(128).bool(message.isGif);
    }
    if (message.isStatus === true) {
      writer.uint32(136).bool(message.isStatus);
    }
    for (const v of message.links) {
      Message_Link.encode(v!, writer.uint32(146).fork()).ldelim();
    }
    if (message.location !== undefined) {
      Location.encode(message.location, writer.uint32(154).fork()).ldelim();
    }
    if (message.mediaKey !== undefined) {
      writer.uint32(162).string(message.mediaKey);
    }
    for (const v of message.mentionedIds) {
      Wid.encode(v!, writer.uint32(170).fork()).ldelim();
    }
    if (message.orderId !== "") {
      writer.uint32(178).string(message.orderId);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(186).fork()).ldelim();
    }
    if (message.to !== undefined) {
      Wid.encode(message.to, writer.uint32(194).fork()).ldelim();
    }
    if (message.token !== "") {
      writer.uint32(202).string(message.token);
    }
    if (message.type !== 0) {
      writer.uint32(208).int32(message.type);
    }
    for (const v of message.vCards) {
      writer.uint32(218).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Message {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.ack = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.author = Wid.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.body = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.broadcast = reader.bool();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.deviceType = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.duration = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.forwardingScore = reader.uint32();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.from = Wid.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.fromMe = reader.bool();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.hasMedia = reader.bool();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.hasQuotedMessage = reader.bool();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.id = MessageId.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.inviteV4 = InviteV4.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.isEphemeral = reader.bool();
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.isForwarded = reader.bool();
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.isGif = reader.bool();
          continue;
        case 17:
          if (tag !== 136) {
            break;
          }

          message.isStatus = reader.bool();
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.links.push(Message_Link.decode(reader, reader.uint32()));
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.location = Location.decode(reader, reader.uint32());
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.mediaKey = reader.string();
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.mentionedIds.push(Wid.decode(reader, reader.uint32()));
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.orderId = reader.string();
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.to = Wid.decode(reader, reader.uint32());
          continue;
        case 25:
          if (tag !== 202) {
            break;
          }

          message.token = reader.string();
          continue;
        case 26:
          if (tag !== 208) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 27:
          if (tag !== 218) {
            break;
          }

          message.vCards.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Message {
    return {
      ack: isSet(object.ack) ? messageAckFromJSON(object.ack) : 0,
      author: isSet(object.author) ? Wid.fromJSON(object.author) : undefined,
      body: isSet(object.body) ? globalThis.String(object.body) : "",
      broadcast: isSet(object.broadcast) ? globalThis.Boolean(object.broadcast) : false,
      deviceType: isSet(object.deviceType) ? globalThis.String(object.deviceType) : "",
      duration: isSet(object.duration) ? globalThis.String(object.duration) : "",
      forwardingScore: isSet(object.forwardingScore) ? globalThis.Number(object.forwardingScore) : 0,
      from: isSet(object.from) ? Wid.fromJSON(object.from) : undefined,
      fromMe: isSet(object.fromMe) ? globalThis.Boolean(object.fromMe) : false,
      hasMedia: isSet(object.hasMedia) ? globalThis.Boolean(object.hasMedia) : false,
      hasQuotedMessage: isSet(object.hasQuotedMessage) ? globalThis.Boolean(object.hasQuotedMessage) : false,
      id: isSet(object.id) ? MessageId.fromJSON(object.id) : undefined,
      inviteV4: isSet(object.inviteV4) ? InviteV4.fromJSON(object.inviteV4) : undefined,
      isEphemeral: isSet(object.isEphemeral) ? globalThis.Boolean(object.isEphemeral) : false,
      isForwarded: isSet(object.isForwarded) ? globalThis.Boolean(object.isForwarded) : false,
      isGif: isSet(object.isGif) ? globalThis.Boolean(object.isGif) : false,
      isStatus: isSet(object.isStatus) ? globalThis.Boolean(object.isStatus) : false,
      links: globalThis.Array.isArray(object?.links) ? object.links.map((e: any) => Message_Link.fromJSON(e)) : [],
      location: isSet(object.location) ? Location.fromJSON(object.location) : undefined,
      mediaKey: isSet(object.mediaKey) ? globalThis.String(object.mediaKey) : undefined,
      mentionedIds: globalThis.Array.isArray(object?.mentionedIds)
        ? object.mentionedIds.map((e: any) => Wid.fromJSON(e))
        : [],
      orderId: isSet(object.orderId) ? globalThis.String(object.orderId) : "",
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      to: isSet(object.to) ? Wid.fromJSON(object.to) : undefined,
      token: isSet(object.token) ? globalThis.String(object.token) : "",
      type: isSet(object.type) ? messageTypeFromJSON(object.type) : 0,
      vCards: globalThis.Array.isArray(object?.vCards) ? object.vCards.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: Message): unknown {
    const obj: any = {};
    if (message.ack !== 0) {
      obj.ack = messageAckToJSON(message.ack);
    }
    if (message.author !== undefined) {
      obj.author = Wid.toJSON(message.author);
    }
    if (message.body !== "") {
      obj.body = message.body;
    }
    if (message.broadcast === true) {
      obj.broadcast = message.broadcast;
    }
    if (message.deviceType !== "") {
      obj.deviceType = message.deviceType;
    }
    if (message.duration !== "") {
      obj.duration = message.duration;
    }
    if (message.forwardingScore !== 0) {
      obj.forwardingScore = Math.round(message.forwardingScore);
    }
    if (message.from !== undefined) {
      obj.from = Wid.toJSON(message.from);
    }
    if (message.fromMe === true) {
      obj.fromMe = message.fromMe;
    }
    if (message.hasMedia === true) {
      obj.hasMedia = message.hasMedia;
    }
    if (message.hasQuotedMessage === true) {
      obj.hasQuotedMessage = message.hasQuotedMessage;
    }
    if (message.id !== undefined) {
      obj.id = MessageId.toJSON(message.id);
    }
    if (message.inviteV4 !== undefined) {
      obj.inviteV4 = InviteV4.toJSON(message.inviteV4);
    }
    if (message.isEphemeral === true) {
      obj.isEphemeral = message.isEphemeral;
    }
    if (message.isForwarded === true) {
      obj.isForwarded = message.isForwarded;
    }
    if (message.isGif === true) {
      obj.isGif = message.isGif;
    }
    if (message.isStatus === true) {
      obj.isStatus = message.isStatus;
    }
    if (message.links?.length) {
      obj.links = message.links.map((e) => Message_Link.toJSON(e));
    }
    if (message.location !== undefined) {
      obj.location = Location.toJSON(message.location);
    }
    if (message.mediaKey !== undefined) {
      obj.mediaKey = message.mediaKey;
    }
    if (message.mentionedIds?.length) {
      obj.mentionedIds = message.mentionedIds.map((e) => Wid.toJSON(e));
    }
    if (message.orderId !== "") {
      obj.orderId = message.orderId;
    }
    if (message.timestamp !== undefined) {
      obj.timestamp = message.timestamp.toISOString();
    }
    if (message.to !== undefined) {
      obj.to = Wid.toJSON(message.to);
    }
    if (message.token !== "") {
      obj.token = message.token;
    }
    if (message.type !== 0) {
      obj.type = messageTypeToJSON(message.type);
    }
    if (message.vCards?.length) {
      obj.vCards = message.vCards;
    }
    return obj;
  },

  create(base?: DeepPartial<Message>): Message {
    return Message.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Message>): Message {
    const message = createBaseMessage();
    message.ack = object.ack ?? 0;
    message.author = (object.author !== undefined && object.author !== null)
      ? Wid.fromPartial(object.author)
      : undefined;
    message.body = object.body ?? "";
    message.broadcast = object.broadcast ?? false;
    message.deviceType = object.deviceType ?? "";
    message.duration = object.duration ?? "";
    message.forwardingScore = object.forwardingScore ?? 0;
    message.from = (object.from !== undefined && object.from !== null) ? Wid.fromPartial(object.from) : undefined;
    message.fromMe = object.fromMe ?? false;
    message.hasMedia = object.hasMedia ?? false;
    message.hasQuotedMessage = object.hasQuotedMessage ?? false;
    message.id = (object.id !== undefined && object.id !== null) ? MessageId.fromPartial(object.id) : undefined;
    message.inviteV4 = (object.inviteV4 !== undefined && object.inviteV4 !== null)
      ? InviteV4.fromPartial(object.inviteV4)
      : undefined;
    message.isEphemeral = object.isEphemeral ?? false;
    message.isForwarded = object.isForwarded ?? false;
    message.isGif = object.isGif ?? false;
    message.isStatus = object.isStatus ?? false;
    message.links = object.links?.map((e) => Message_Link.fromPartial(e)) || [];
    message.location = (object.location !== undefined && object.location !== null)
      ? Location.fromPartial(object.location)
      : undefined;
    message.mediaKey = object.mediaKey ?? undefined;
    message.mentionedIds = object.mentionedIds?.map((e) => Wid.fromPartial(e)) || [];
    message.orderId = object.orderId ?? "";
    message.timestamp = object.timestamp ?? undefined;
    message.to = (object.to !== undefined && object.to !== null) ? Wid.fromPartial(object.to) : undefined;
    message.token = object.token ?? "";
    message.type = object.type ?? 0;
    message.vCards = object.vCards?.map((e) => e) || [];
    return message;
  },
};

function createBaseMessage_Link(): Message_Link {
  return { link: "", isSuspicious: false };
}

export const Message_Link = {
  encode(message: Message_Link, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.link !== "") {
      writer.uint32(10).string(message.link);
    }
    if (message.isSuspicious === true) {
      writer.uint32(16).bool(message.isSuspicious);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Message_Link {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessage_Link();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.link = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.isSuspicious = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Message_Link {
    return {
      link: isSet(object.link) ? globalThis.String(object.link) : "",
      isSuspicious: isSet(object.isSuspicious) ? globalThis.Boolean(object.isSuspicious) : false,
    };
  },

  toJSON(message: Message_Link): unknown {
    const obj: any = {};
    if (message.link !== "") {
      obj.link = message.link;
    }
    if (message.isSuspicious === true) {
      obj.isSuspicious = message.isSuspicious;
    }
    return obj;
  },

  create(base?: DeepPartial<Message_Link>): Message_Link {
    return Message_Link.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Message_Link>): Message_Link {
    const message = createBaseMessage_Link();
    message.link = object.link ?? "";
    message.isSuspicious = object.isSuspicious ?? false;
    return message;
  },
};

function createBaseContact(): Contact {
  return {
    id: undefined,
    isBlocked: false,
    isBusiness: false,
    isEnterprise: false,
    isGroup: false,
    isMe: false,
    isMyContact: false,
    isUser: false,
    isWaContact: false,
    name: undefined,
    number: "",
    pushname: "",
    shortName: undefined,
  };
}

export const Contact = {
  encode(message: Contact, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      Wid.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.isBlocked === true) {
      writer.uint32(16).bool(message.isBlocked);
    }
    if (message.isBusiness === true) {
      writer.uint32(24).bool(message.isBusiness);
    }
    if (message.isEnterprise === true) {
      writer.uint32(32).bool(message.isEnterprise);
    }
    if (message.isGroup === true) {
      writer.uint32(40).bool(message.isGroup);
    }
    if (message.isMe === true) {
      writer.uint32(48).bool(message.isMe);
    }
    if (message.isMyContact === true) {
      writer.uint32(56).bool(message.isMyContact);
    }
    if (message.isUser === true) {
      writer.uint32(64).bool(message.isUser);
    }
    if (message.isWaContact === true) {
      writer.uint32(72).bool(message.isWaContact);
    }
    if (message.name !== undefined) {
      writer.uint32(82).string(message.name);
    }
    if (message.number !== "") {
      writer.uint32(90).string(message.number);
    }
    if (message.pushname !== "") {
      writer.uint32(98).string(message.pushname);
    }
    if (message.shortName !== undefined) {
      writer.uint32(106).string(message.shortName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Contact {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContact();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = Wid.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.isBlocked = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.isBusiness = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.isEnterprise = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.isGroup = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.isMe = reader.bool();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.isMyContact = reader.bool();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.isUser = reader.bool();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.isWaContact = reader.bool();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.name = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.number = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.pushname = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.shortName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Contact {
    return {
      id: isSet(object.id) ? Wid.fromJSON(object.id) : undefined,
      isBlocked: isSet(object.isBlocked) ? globalThis.Boolean(object.isBlocked) : false,
      isBusiness: isSet(object.isBusiness) ? globalThis.Boolean(object.isBusiness) : false,
      isEnterprise: isSet(object.isEnterprise) ? globalThis.Boolean(object.isEnterprise) : false,
      isGroup: isSet(object.isGroup) ? globalThis.Boolean(object.isGroup) : false,
      isMe: isSet(object.isMe) ? globalThis.Boolean(object.isMe) : false,
      isMyContact: isSet(object.isMyContact) ? globalThis.Boolean(object.isMyContact) : false,
      isUser: isSet(object.isUser) ? globalThis.Boolean(object.isUser) : false,
      isWaContact: isSet(object.isWaContact) ? globalThis.Boolean(object.isWaContact) : false,
      name: isSet(object.name) ? globalThis.String(object.name) : undefined,
      number: isSet(object.number) ? globalThis.String(object.number) : "",
      pushname: isSet(object.pushname) ? globalThis.String(object.pushname) : "",
      shortName: isSet(object.shortName) ? globalThis.String(object.shortName) : undefined,
    };
  },

  toJSON(message: Contact): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = Wid.toJSON(message.id);
    }
    if (message.isBlocked === true) {
      obj.isBlocked = message.isBlocked;
    }
    if (message.isBusiness === true) {
      obj.isBusiness = message.isBusiness;
    }
    if (message.isEnterprise === true) {
      obj.isEnterprise = message.isEnterprise;
    }
    if (message.isGroup === true) {
      obj.isGroup = message.isGroup;
    }
    if (message.isMe === true) {
      obj.isMe = message.isMe;
    }
    if (message.isMyContact === true) {
      obj.isMyContact = message.isMyContact;
    }
    if (message.isUser === true) {
      obj.isUser = message.isUser;
    }
    if (message.isWaContact === true) {
      obj.isWaContact = message.isWaContact;
    }
    if (message.name !== undefined) {
      obj.name = message.name;
    }
    if (message.number !== "") {
      obj.number = message.number;
    }
    if (message.pushname !== "") {
      obj.pushname = message.pushname;
    }
    if (message.shortName !== undefined) {
      obj.shortName = message.shortName;
    }
    return obj;
  },

  create(base?: DeepPartial<Contact>): Contact {
    return Contact.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Contact>): Contact {
    const message = createBaseContact();
    message.id = (object.id !== undefined && object.id !== null) ? Wid.fromPartial(object.id) : undefined;
    message.isBlocked = object.isBlocked ?? false;
    message.isBusiness = object.isBusiness ?? false;
    message.isEnterprise = object.isEnterprise ?? false;
    message.isGroup = object.isGroup ?? false;
    message.isMe = object.isMe ?? false;
    message.isMyContact = object.isMyContact ?? false;
    message.isUser = object.isUser ?? false;
    message.isWaContact = object.isWaContact ?? false;
    message.name = object.name ?? undefined;
    message.number = object.number ?? "";
    message.pushname = object.pushname ?? "";
    message.shortName = object.shortName ?? undefined;
    return message;
  },
};

function createBaseChat(): Chat {
  return {
    archived: false,
    id: undefined,
    isGroup: false,
    isMuted: false,
    isReadOnly: false,
    lastMessage: undefined,
    muteExpiration: undefined,
    name: "",
    pinned: false,
    timestamp: undefined,
    unreadCount: 0,
  };
}

export const Chat = {
  encode(message: Chat, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.archived === true) {
      writer.uint32(8).bool(message.archived);
    }
    if (message.id !== undefined) {
      Wid.encode(message.id, writer.uint32(18).fork()).ldelim();
    }
    if (message.isGroup === true) {
      writer.uint32(24).bool(message.isGroup);
    }
    if (message.isMuted === true) {
      writer.uint32(32).bool(message.isMuted);
    }
    if (message.isReadOnly === true) {
      writer.uint32(40).bool(message.isReadOnly);
    }
    if (message.lastMessage !== undefined) {
      Message.encode(message.lastMessage, writer.uint32(50).fork()).ldelim();
    }
    if (message.muteExpiration !== undefined) {
      Duration.encode(message.muteExpiration, writer.uint32(58).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(66).string(message.name);
    }
    if (message.pinned === true) {
      writer.uint32(72).bool(message.pinned);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(82).fork()).ldelim();
    }
    if (message.unreadCount !== 0) {
      writer.uint32(88).uint32(message.unreadCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Chat {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChat();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.archived = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.id = Wid.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.isGroup = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.isMuted = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.isReadOnly = reader.bool();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.lastMessage = Message.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.muteExpiration = Duration.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.name = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.pinned = reader.bool();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.unreadCount = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Chat {
    return {
      archived: isSet(object.archived) ? globalThis.Boolean(object.archived) : false,
      id: isSet(object.id) ? Wid.fromJSON(object.id) : undefined,
      isGroup: isSet(object.isGroup) ? globalThis.Boolean(object.isGroup) : false,
      isMuted: isSet(object.isMuted) ? globalThis.Boolean(object.isMuted) : false,
      isReadOnly: isSet(object.isReadOnly) ? globalThis.Boolean(object.isReadOnly) : false,
      lastMessage: isSet(object.lastMessage) ? Message.fromJSON(object.lastMessage) : undefined,
      muteExpiration: isSet(object.muteExpiration) ? Duration.fromJSON(object.muteExpiration) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      pinned: isSet(object.pinned) ? globalThis.Boolean(object.pinned) : false,
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      unreadCount: isSet(object.unreadCount) ? globalThis.Number(object.unreadCount) : 0,
    };
  },

  toJSON(message: Chat): unknown {
    const obj: any = {};
    if (message.archived === true) {
      obj.archived = message.archived;
    }
    if (message.id !== undefined) {
      obj.id = Wid.toJSON(message.id);
    }
    if (message.isGroup === true) {
      obj.isGroup = message.isGroup;
    }
    if (message.isMuted === true) {
      obj.isMuted = message.isMuted;
    }
    if (message.isReadOnly === true) {
      obj.isReadOnly = message.isReadOnly;
    }
    if (message.lastMessage !== undefined) {
      obj.lastMessage = Message.toJSON(message.lastMessage);
    }
    if (message.muteExpiration !== undefined) {
      obj.muteExpiration = Duration.toJSON(message.muteExpiration);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.pinned === true) {
      obj.pinned = message.pinned;
    }
    if (message.timestamp !== undefined) {
      obj.timestamp = message.timestamp.toISOString();
    }
    if (message.unreadCount !== 0) {
      obj.unreadCount = Math.round(message.unreadCount);
    }
    return obj;
  },

  create(base?: DeepPartial<Chat>): Chat {
    return Chat.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Chat>): Chat {
    const message = createBaseChat();
    message.archived = object.archived ?? false;
    message.id = (object.id !== undefined && object.id !== null) ? Wid.fromPartial(object.id) : undefined;
    message.isGroup = object.isGroup ?? false;
    message.isMuted = object.isMuted ?? false;
    message.isReadOnly = object.isReadOnly ?? false;
    message.lastMessage = (object.lastMessage !== undefined && object.lastMessage !== null)
      ? Message.fromPartial(object.lastMessage)
      : undefined;
    message.muteExpiration = (object.muteExpiration !== undefined && object.muteExpiration !== null)
      ? Duration.fromPartial(object.muteExpiration)
      : undefined;
    message.name = object.name ?? "";
    message.pinned = object.pinned ?? false;
    message.timestamp = object.timestamp ?? undefined;
    message.unreadCount = object.unreadCount ?? 0;
    return message;
  },
};

function createBaseLabel(): Label {
  return { hexColor: "", id: "", name: "" };
}

export const Label = {
  encode(message: Label, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hexColor !== "") {
      writer.uint32(10).string(message.hexColor);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Label {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLabel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.hexColor = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.id = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Label {
    return {
      hexColor: isSet(object.hexColor) ? globalThis.String(object.hexColor) : "",
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
    };
  },

  toJSON(message: Label): unknown {
    const obj: any = {};
    if (message.hexColor !== "") {
      obj.hexColor = message.hexColor;
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<Label>): Label {
    return Label.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Label>): Label {
    const message = createBaseLabel();
    message.hexColor = object.hexColor ?? "";
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseClientInfo(): ClientInfo {
  return { wid: undefined, platform: "", pushname: "" };
}

export const ClientInfo = {
  encode(message: ClientInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.wid !== undefined) {
      Wid.encode(message.wid, writer.uint32(10).fork()).ldelim();
    }
    if (message.platform !== "") {
      writer.uint32(18).string(message.platform);
    }
    if (message.pushname !== "") {
      writer.uint32(26).string(message.pushname);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClientInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.wid = Wid.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.platform = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.pushname = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClientInfo {
    return {
      wid: isSet(object.wid) ? Wid.fromJSON(object.wid) : undefined,
      platform: isSet(object.platform) ? globalThis.String(object.platform) : "",
      pushname: isSet(object.pushname) ? globalThis.String(object.pushname) : "",
    };
  },

  toJSON(message: ClientInfo): unknown {
    const obj: any = {};
    if (message.wid !== undefined) {
      obj.wid = Wid.toJSON(message.wid);
    }
    if (message.platform !== "") {
      obj.platform = message.platform;
    }
    if (message.pushname !== "") {
      obj.pushname = message.pushname;
    }
    return obj;
  },

  create(base?: DeepPartial<ClientInfo>): ClientInfo {
    return ClientInfo.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ClientInfo>): ClientInfo {
    const message = createBaseClientInfo();
    message.wid = (object.wid !== undefined && object.wid !== null) ? Wid.fromPartial(object.wid) : undefined;
    message.platform = object.platform ?? "";
    message.pushname = object.pushname ?? "";
    return message;
  },
};

function createBaseInviteV4(): InviteV4 {
  return {
    inviteCode: "",
    inviteCodeExp: undefined,
    groupId: undefined,
    groupName: undefined,
    fromId: undefined,
    toId: undefined,
  };
}

export const InviteV4 = {
  encode(message: InviteV4, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inviteCode !== "") {
      writer.uint32(10).string(message.inviteCode);
    }
    if (message.inviteCodeExp !== undefined) {
      Timestamp.encode(toTimestamp(message.inviteCodeExp), writer.uint32(18).fork()).ldelim();
    }
    if (message.groupId !== undefined) {
      Wid.encode(message.groupId, writer.uint32(26).fork()).ldelim();
    }
    if (message.groupName !== undefined) {
      writer.uint32(34).string(message.groupName);
    }
    if (message.fromId !== undefined) {
      Wid.encode(message.fromId, writer.uint32(42).fork()).ldelim();
    }
    if (message.toId !== undefined) {
      Wid.encode(message.toId, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InviteV4 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInviteV4();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.inviteCode = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.inviteCodeExp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.groupId = Wid.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.groupName = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.fromId = Wid.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.toId = Wid.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InviteV4 {
    return {
      inviteCode: isSet(object.inviteCode) ? globalThis.String(object.inviteCode) : "",
      inviteCodeExp: isSet(object.inviteCodeExp) ? fromJsonTimestamp(object.inviteCodeExp) : undefined,
      groupId: isSet(object.groupId) ? Wid.fromJSON(object.groupId) : undefined,
      groupName: isSet(object.groupName) ? globalThis.String(object.groupName) : undefined,
      fromId: isSet(object.fromId) ? Wid.fromJSON(object.fromId) : undefined,
      toId: isSet(object.toId) ? Wid.fromJSON(object.toId) : undefined,
    };
  },

  toJSON(message: InviteV4): unknown {
    const obj: any = {};
    if (message.inviteCode !== "") {
      obj.inviteCode = message.inviteCode;
    }
    if (message.inviteCodeExp !== undefined) {
      obj.inviteCodeExp = message.inviteCodeExp.toISOString();
    }
    if (message.groupId !== undefined) {
      obj.groupId = Wid.toJSON(message.groupId);
    }
    if (message.groupName !== undefined) {
      obj.groupName = message.groupName;
    }
    if (message.fromId !== undefined) {
      obj.fromId = Wid.toJSON(message.fromId);
    }
    if (message.toId !== undefined) {
      obj.toId = Wid.toJSON(message.toId);
    }
    return obj;
  },

  create(base?: DeepPartial<InviteV4>): InviteV4 {
    return InviteV4.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<InviteV4>): InviteV4 {
    const message = createBaseInviteV4();
    message.inviteCode = object.inviteCode ?? "";
    message.inviteCodeExp = object.inviteCodeExp ?? undefined;
    message.groupId = (object.groupId !== undefined && object.groupId !== null)
      ? Wid.fromPartial(object.groupId)
      : undefined;
    message.groupName = object.groupName ?? undefined;
    message.fromId = (object.fromId !== undefined && object.fromId !== null)
      ? Wid.fromPartial(object.fromId)
      : undefined;
    message.toId = (object.toId !== undefined && object.toId !== null) ? Wid.fromPartial(object.toId) : undefined;
    return message;
  },
};

function createBaseGetInfoResponse(): GetInfoResponse {
  return { clientInfo: undefined };
}

export const GetInfoResponse = {
  encode(message: GetInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientInfo !== undefined) {
      ClientInfo.encode(message.clientInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetInfoResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clientInfo = ClientInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetInfoResponse {
    return { clientInfo: isSet(object.clientInfo) ? ClientInfo.fromJSON(object.clientInfo) : undefined };
  },

  toJSON(message: GetInfoResponse): unknown {
    const obj: any = {};
    if (message.clientInfo !== undefined) {
      obj.clientInfo = ClientInfo.toJSON(message.clientInfo);
    }
    return obj;
  },

  create(base?: DeepPartial<GetInfoResponse>): GetInfoResponse {
    return GetInfoResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetInfoResponse>): GetInfoResponse {
    const message = createBaseGetInfoResponse();
    message.clientInfo = (object.clientInfo !== undefined && object.clientInfo !== null)
      ? ClientInfo.fromPartial(object.clientInfo)
      : undefined;
    return message;
  },
};

function createBaseCreateGroupResult(): CreateGroupResult {
  return { title: "", gid: undefined, participants: {} };
}

export const CreateGroupResult = {
  encode(message: CreateGroupResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.gid !== undefined) {
      Wid.encode(message.gid, writer.uint32(18).fork()).ldelim();
    }
    Object.entries(message.participants).forEach(([key, value]) => {
      CreateGroupResult_ParticipantsEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateGroupResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateGroupResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.gid = Wid.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          const entry3 = CreateGroupResult_ParticipantsEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.participants[entry3.key] = entry3.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateGroupResult {
    return {
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      gid: isSet(object.gid) ? Wid.fromJSON(object.gid) : undefined,
      participants: isObject(object.participants)
        ? Object.entries(object.participants).reduce<{ [key: string]: CreateGroupResult_Participant }>(
          (acc, [key, value]) => {
            acc[key] = CreateGroupResult_Participant.fromJSON(value);
            return acc;
          },
          {},
        )
        : {},
    };
  },

  toJSON(message: CreateGroupResult): unknown {
    const obj: any = {};
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.gid !== undefined) {
      obj.gid = Wid.toJSON(message.gid);
    }
    if (message.participants) {
      const entries = Object.entries(message.participants);
      if (entries.length > 0) {
        obj.participants = {};
        entries.forEach(([k, v]) => {
          obj.participants[k] = CreateGroupResult_Participant.toJSON(v);
        });
      }
    }
    return obj;
  },

  create(base?: DeepPartial<CreateGroupResult>): CreateGroupResult {
    return CreateGroupResult.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateGroupResult>): CreateGroupResult {
    const message = createBaseCreateGroupResult();
    message.title = object.title ?? "";
    message.gid = (object.gid !== undefined && object.gid !== null) ? Wid.fromPartial(object.gid) : undefined;
    message.participants = Object.entries(object.participants ?? {}).reduce<
      { [key: string]: CreateGroupResult_Participant }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = CreateGroupResult_Participant.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseCreateGroupResult_Participant(): CreateGroupResult_Participant {
  return { statusCode: 0, message: "", isGroupCreator: false, isInviteV4Sent: false };
}

export const CreateGroupResult_Participant = {
  encode(message: CreateGroupResult_Participant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.statusCode !== 0) {
      writer.uint32(8).int32(message.statusCode);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.isGroupCreator === true) {
      writer.uint32(24).bool(message.isGroupCreator);
    }
    if (message.isInviteV4Sent === true) {
      writer.uint32(32).bool(message.isInviteV4Sent);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateGroupResult_Participant {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateGroupResult_Participant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.statusCode = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.message = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.isGroupCreator = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.isInviteV4Sent = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateGroupResult_Participant {
    return {
      statusCode: isSet(object.statusCode) ? globalThis.Number(object.statusCode) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      isGroupCreator: isSet(object.isGroupCreator) ? globalThis.Boolean(object.isGroupCreator) : false,
      isInviteV4Sent: isSet(object.isInviteV4Sent) ? globalThis.Boolean(object.isInviteV4Sent) : false,
    };
  },

  toJSON(message: CreateGroupResult_Participant): unknown {
    const obj: any = {};
    if (message.statusCode !== 0) {
      obj.statusCode = Math.round(message.statusCode);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.isGroupCreator === true) {
      obj.isGroupCreator = message.isGroupCreator;
    }
    if (message.isInviteV4Sent === true) {
      obj.isInviteV4Sent = message.isInviteV4Sent;
    }
    return obj;
  },

  create(base?: DeepPartial<CreateGroupResult_Participant>): CreateGroupResult_Participant {
    return CreateGroupResult_Participant.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateGroupResult_Participant>): CreateGroupResult_Participant {
    const message = createBaseCreateGroupResult_Participant();
    message.statusCode = object.statusCode ?? 0;
    message.message = object.message ?? "";
    message.isGroupCreator = object.isGroupCreator ?? false;
    message.isInviteV4Sent = object.isInviteV4Sent ?? false;
    return message;
  },
};

function createBaseCreateGroupResult_ParticipantsEntry(): CreateGroupResult_ParticipantsEntry {
  return { key: "", value: undefined };
}

export const CreateGroupResult_ParticipantsEntry = {
  encode(message: CreateGroupResult_ParticipantsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      CreateGroupResult_Participant.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateGroupResult_ParticipantsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateGroupResult_ParticipantsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = CreateGroupResult_Participant.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateGroupResult_ParticipantsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? CreateGroupResult_Participant.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: CreateGroupResult_ParticipantsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = CreateGroupResult_Participant.toJSON(message.value);
    }
    return obj;
  },

  create(base?: DeepPartial<CreateGroupResult_ParticipantsEntry>): CreateGroupResult_ParticipantsEntry {
    return CreateGroupResult_ParticipantsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateGroupResult_ParticipantsEntry>): CreateGroupResult_ParticipantsEntry {
    const message = createBaseCreateGroupResult_ParticipantsEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? CreateGroupResult_Participant.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseMembershipRequestActionOptions(): MembershipRequestActionOptions {
  return { requesterIds: [], sleep: undefined };
}

export const MembershipRequestActionOptions = {
  encode(message: MembershipRequestActionOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.requesterIds) {
      Wid.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.sleep !== undefined) {
      Duration.encode(message.sleep, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MembershipRequestActionOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMembershipRequestActionOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.requesterIds.push(Wid.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sleep = Duration.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MembershipRequestActionOptions {
    return {
      requesterIds: globalThis.Array.isArray(object?.requesterIds)
        ? object.requesterIds.map((e: any) => Wid.fromJSON(e))
        : [],
      sleep: isSet(object.sleep) ? Duration.fromJSON(object.sleep) : undefined,
    };
  },

  toJSON(message: MembershipRequestActionOptions): unknown {
    const obj: any = {};
    if (message.requesterIds?.length) {
      obj.requesterIds = message.requesterIds.map((e) => Wid.toJSON(e));
    }
    if (message.sleep !== undefined) {
      obj.sleep = Duration.toJSON(message.sleep);
    }
    return obj;
  },

  create(base?: DeepPartial<MembershipRequestActionOptions>): MembershipRequestActionOptions {
    return MembershipRequestActionOptions.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MembershipRequestActionOptions>): MembershipRequestActionOptions {
    const message = createBaseMembershipRequestActionOptions();
    message.requesterIds = object.requesterIds?.map((e) => Wid.fromPartial(e)) || [];
    message.sleep = (object.sleep !== undefined && object.sleep !== null)
      ? Duration.fromPartial(object.sleep)
      : undefined;
    return message;
  },
};

function createBaseMembershipRequestActionResult(): MembershipRequestActionResult {
  return { requesterId: undefined, error: undefined, message: "" };
}

export const MembershipRequestActionResult = {
  encode(message: MembershipRequestActionResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.requesterId !== undefined) {
      Wid.encode(message.requesterId, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      writer.uint32(16).int32(message.error);
    }
    if (message.message !== "") {
      writer.uint32(26).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MembershipRequestActionResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMembershipRequestActionResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.requesterId = Wid.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.error = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MembershipRequestActionResult {
    return {
      requesterId: isSet(object.requesterId) ? Wid.fromJSON(object.requesterId) : undefined,
      error: isSet(object.error) ? globalThis.Number(object.error) : undefined,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
    };
  },

  toJSON(message: MembershipRequestActionResult): unknown {
    const obj: any = {};
    if (message.requesterId !== undefined) {
      obj.requesterId = Wid.toJSON(message.requesterId);
    }
    if (message.error !== undefined) {
      obj.error = Math.round(message.error);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },

  create(base?: DeepPartial<MembershipRequestActionResult>): MembershipRequestActionResult {
    return MembershipRequestActionResult.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MembershipRequestActionResult>): MembershipRequestActionResult {
    const message = createBaseMembershipRequestActionResult();
    message.requesterId = (object.requesterId !== undefined && object.requesterId !== null)
      ? Wid.fromPartial(object.requesterId)
      : undefined;
    message.error = object.error ?? undefined;
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseAcceptInviteRequest(): AcceptInviteRequest {
  return { inviteCode: "" };
}

export const AcceptInviteRequest = {
  encode(message: AcceptInviteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inviteCode !== "") {
      writer.uint32(10).string(message.inviteCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AcceptInviteRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcceptInviteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.inviteCode = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AcceptInviteRequest {
    return { inviteCode: isSet(object.inviteCode) ? globalThis.String(object.inviteCode) : "" };
  },

  toJSON(message: AcceptInviteRequest): unknown {
    const obj: any = {};
    if (message.inviteCode !== "") {
      obj.inviteCode = message.inviteCode;
    }
    return obj;
  },

  create(base?: DeepPartial<AcceptInviteRequest>): AcceptInviteRequest {
    return AcceptInviteRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AcceptInviteRequest>): AcceptInviteRequest {
    const message = createBaseAcceptInviteRequest();
    message.inviteCode = object.inviteCode ?? "";
    return message;
  },
};

function createBaseAcceptInviteResponse(): AcceptInviteResponse {
  return { chatId: undefined };
}

export const AcceptInviteResponse = {
  encode(message: AcceptInviteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatId !== undefined) {
      Wid.encode(message.chatId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AcceptInviteResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcceptInviteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.chatId = Wid.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AcceptInviteResponse {
    return { chatId: isSet(object.chatId) ? Wid.fromJSON(object.chatId) : undefined };
  },

  toJSON(message: AcceptInviteResponse): unknown {
    const obj: any = {};
    if (message.chatId !== undefined) {
      obj.chatId = Wid.toJSON(message.chatId);
    }
    return obj;
  },

  create(base?: DeepPartial<AcceptInviteResponse>): AcceptInviteResponse {
    return AcceptInviteResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AcceptInviteResponse>): AcceptInviteResponse {
    const message = createBaseAcceptInviteResponse();
    message.chatId = (object.chatId !== undefined && object.chatId !== null)
      ? Wid.fromPartial(object.chatId)
      : undefined;
    return message;
  },
};

function createBaseAcceptGroupV4InviteResponse(): AcceptGroupV4InviteResponse {
  return { status: 0 };
}

export const AcceptGroupV4InviteResponse = {
  encode(message: AcceptGroupV4InviteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AcceptGroupV4InviteResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcceptGroupV4InviteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.status = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AcceptGroupV4InviteResponse {
    return { status: isSet(object.status) ? globalThis.Number(object.status) : 0 };
  },

  toJSON(message: AcceptGroupV4InviteResponse): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    return obj;
  },

  create(base?: DeepPartial<AcceptGroupV4InviteResponse>): AcceptGroupV4InviteResponse {
    return AcceptGroupV4InviteResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AcceptGroupV4InviteResponse>): AcceptGroupV4InviteResponse {
    const message = createBaseAcceptGroupV4InviteResponse();
    message.status = object.status ?? 0;
    return message;
  },
};

function createBaseGetInviteInfoRequest(): GetInviteInfoRequest {
  return { inviteCode: "" };
}

export const GetInviteInfoRequest = {
  encode(message: GetInviteInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inviteCode !== "") {
      writer.uint32(10).string(message.inviteCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetInviteInfoRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetInviteInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.inviteCode = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetInviteInfoRequest {
    return { inviteCode: isSet(object.inviteCode) ? globalThis.String(object.inviteCode) : "" };
  },

  toJSON(message: GetInviteInfoRequest): unknown {
    const obj: any = {};
    if (message.inviteCode !== "") {
      obj.inviteCode = message.inviteCode;
    }
    return obj;
  },

  create(base?: DeepPartial<GetInviteInfoRequest>): GetInviteInfoRequest {
    return GetInviteInfoRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetInviteInfoRequest>): GetInviteInfoRequest {
    const message = createBaseGetInviteInfoRequest();
    message.inviteCode = object.inviteCode ?? "";
    return message;
  },
};

function createBaseGetInviteInfoResponse(): GetInviteInfoResponse {
  return { inviteV4: undefined };
}

export const GetInviteInfoResponse = {
  encode(message: GetInviteInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inviteV4 !== undefined) {
      InviteV4.encode(message.inviteV4, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetInviteInfoResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetInviteInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.inviteV4 = InviteV4.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetInviteInfoResponse {
    return { inviteV4: isSet(object.inviteV4) ? InviteV4.fromJSON(object.inviteV4) : undefined };
  },

  toJSON(message: GetInviteInfoResponse): unknown {
    const obj: any = {};
    if (message.inviteV4 !== undefined) {
      obj.inviteV4 = InviteV4.toJSON(message.inviteV4);
    }
    return obj;
  },

  create(base?: DeepPartial<GetInviteInfoResponse>): GetInviteInfoResponse {
    return GetInviteInfoResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetInviteInfoResponse>): GetInviteInfoResponse {
    const message = createBaseGetInviteInfoResponse();
    message.inviteV4 = (object.inviteV4 !== undefined && object.inviteV4 !== null)
      ? InviteV4.fromPartial(object.inviteV4)
      : undefined;
    return message;
  },
};

function createBaseArchiveChatRequest(): ArchiveChatRequest {
  return { chatId: undefined };
}

export const ArchiveChatRequest = {
  encode(message: ArchiveChatRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatId !== undefined) {
      Wid.encode(message.chatId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ArchiveChatRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArchiveChatRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.chatId = Wid.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ArchiveChatRequest {
    return { chatId: isSet(object.chatId) ? Wid.fromJSON(object.chatId) : undefined };
  },

  toJSON(message: ArchiveChatRequest): unknown {
    const obj: any = {};
    if (message.chatId !== undefined) {
      obj.chatId = Wid.toJSON(message.chatId);
    }
    return obj;
  },

  create(base?: DeepPartial<ArchiveChatRequest>): ArchiveChatRequest {
    return ArchiveChatRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ArchiveChatRequest>): ArchiveChatRequest {
    const message = createBaseArchiveChatRequest();
    message.chatId = (object.chatId !== undefined && object.chatId !== null)
      ? Wid.fromPartial(object.chatId)
      : undefined;
    return message;
  },
};

function createBasePinChatRequest(): PinChatRequest {
  return { chatId: undefined };
}

export const PinChatRequest = {
  encode(message: PinChatRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatId !== undefined) {
      Wid.encode(message.chatId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PinChatRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePinChatRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.chatId = Wid.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PinChatRequest {
    return { chatId: isSet(object.chatId) ? Wid.fromJSON(object.chatId) : undefined };
  },

  toJSON(message: PinChatRequest): unknown {
    const obj: any = {};
    if (message.chatId !== undefined) {
      obj.chatId = Wid.toJSON(message.chatId);
    }
    return obj;
  },

  create(base?: DeepPartial<PinChatRequest>): PinChatRequest {
    return PinChatRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PinChatRequest>): PinChatRequest {
    const message = createBasePinChatRequest();
    message.chatId = (object.chatId !== undefined && object.chatId !== null)
      ? Wid.fromPartial(object.chatId)
      : undefined;
    return message;
  },
};

function createBaseUnpinChatRequest(): UnpinChatRequest {
  return { chatId: undefined };
}

export const UnpinChatRequest = {
  encode(message: UnpinChatRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatId !== undefined) {
      Wid.encode(message.chatId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnpinChatRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnpinChatRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.chatId = Wid.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UnpinChatRequest {
    return { chatId: isSet(object.chatId) ? Wid.fromJSON(object.chatId) : undefined };
  },

  toJSON(message: UnpinChatRequest): unknown {
    const obj: any = {};
    if (message.chatId !== undefined) {
      obj.chatId = Wid.toJSON(message.chatId);
    }
    return obj;
  },

  create(base?: DeepPartial<UnpinChatRequest>): UnpinChatRequest {
    return UnpinChatRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UnpinChatRequest>): UnpinChatRequest {
    const message = createBaseUnpinChatRequest();
    message.chatId = (object.chatId !== undefined && object.chatId !== null)
      ? Wid.fromPartial(object.chatId)
      : undefined;
    return message;
  },
};

function createBaseCreateGroupRequest(): CreateGroupRequest {
  return { title: "", participantIds: [], options: undefined };
}

export const CreateGroupRequest = {
  encode(message: CreateGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    for (const v of message.participantIds) {
      Wid.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.options !== undefined) {
      CreateGroupRequest_Options.encode(message.options, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.participantIds.push(Wid.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.options = CreateGroupRequest_Options.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateGroupRequest {
    return {
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      participantIds: globalThis.Array.isArray(object?.participantIds)
        ? object.participantIds.map((e: any) => Wid.fromJSON(e))
        : [],
      options: isSet(object.options) ? CreateGroupRequest_Options.fromJSON(object.options) : undefined,
    };
  },

  toJSON(message: CreateGroupRequest): unknown {
    const obj: any = {};
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.participantIds?.length) {
      obj.participantIds = message.participantIds.map((e) => Wid.toJSON(e));
    }
    if (message.options !== undefined) {
      obj.options = CreateGroupRequest_Options.toJSON(message.options);
    }
    return obj;
  },

  create(base?: DeepPartial<CreateGroupRequest>): CreateGroupRequest {
    return CreateGroupRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateGroupRequest>): CreateGroupRequest {
    const message = createBaseCreateGroupRequest();
    message.title = object.title ?? "";
    message.participantIds = object.participantIds?.map((e) => Wid.fromPartial(e)) || [];
    message.options = (object.options !== undefined && object.options !== null)
      ? CreateGroupRequest_Options.fromPartial(object.options)
      : undefined;
    return message;
  },
};

function createBaseCreateGroupRequest_Options(): CreateGroupRequest_Options {
  return { messageTimer: undefined, parentGroupId: undefined, autoSendInviteV4: undefined, comment: undefined };
}

export const CreateGroupRequest_Options = {
  encode(message: CreateGroupRequest_Options, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.messageTimer !== undefined) {
      Duration.encode(message.messageTimer, writer.uint32(10).fork()).ldelim();
    }
    if (message.parentGroupId !== undefined) {
      Wid.encode(message.parentGroupId, writer.uint32(18).fork()).ldelim();
    }
    if (message.autoSendInviteV4 !== undefined) {
      writer.uint32(24).bool(message.autoSendInviteV4);
    }
    if (message.comment !== undefined) {
      writer.uint32(34).string(message.comment);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateGroupRequest_Options {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateGroupRequest_Options();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.messageTimer = Duration.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.parentGroupId = Wid.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.autoSendInviteV4 = reader.bool();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.comment = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateGroupRequest_Options {
    return {
      messageTimer: isSet(object.messageTimer) ? Duration.fromJSON(object.messageTimer) : undefined,
      parentGroupId: isSet(object.parentGroupId) ? Wid.fromJSON(object.parentGroupId) : undefined,
      autoSendInviteV4: isSet(object.autoSendInviteV4) ? globalThis.Boolean(object.autoSendInviteV4) : undefined,
      comment: isSet(object.comment) ? globalThis.String(object.comment) : undefined,
    };
  },

  toJSON(message: CreateGroupRequest_Options): unknown {
    const obj: any = {};
    if (message.messageTimer !== undefined) {
      obj.messageTimer = Duration.toJSON(message.messageTimer);
    }
    if (message.parentGroupId !== undefined) {
      obj.parentGroupId = Wid.toJSON(message.parentGroupId);
    }
    if (message.autoSendInviteV4 !== undefined) {
      obj.autoSendInviteV4 = message.autoSendInviteV4;
    }
    if (message.comment !== undefined) {
      obj.comment = message.comment;
    }
    return obj;
  },

  create(base?: DeepPartial<CreateGroupRequest_Options>): CreateGroupRequest_Options {
    return CreateGroupRequest_Options.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateGroupRequest_Options>): CreateGroupRequest_Options {
    const message = createBaseCreateGroupRequest_Options();
    message.messageTimer = (object.messageTimer !== undefined && object.messageTimer !== null)
      ? Duration.fromPartial(object.messageTimer)
      : undefined;
    message.parentGroupId = (object.parentGroupId !== undefined && object.parentGroupId !== null)
      ? Wid.fromPartial(object.parentGroupId)
      : undefined;
    message.autoSendInviteV4 = object.autoSendInviteV4 ?? undefined;
    message.comment = object.comment ?? undefined;
    return message;
  },
};

function createBaseCreateGroupResponse(): CreateGroupResponse {
  return { result: undefined };
}

export const CreateGroupResponse = {
  encode(message: CreateGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== undefined) {
      CreateGroupResult.encode(message.result, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateGroupResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.result = CreateGroupResult.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateGroupResponse {
    return { result: isSet(object.result) ? CreateGroupResult.fromJSON(object.result) : undefined };
  },

  toJSON(message: CreateGroupResponse): unknown {
    const obj: any = {};
    if (message.result !== undefined) {
      obj.result = CreateGroupResult.toJSON(message.result);
    }
    return obj;
  },

  create(base?: DeepPartial<CreateGroupResponse>): CreateGroupResponse {
    return CreateGroupResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateGroupResponse>): CreateGroupResponse {
    const message = createBaseCreateGroupResponse();
    message.result = (object.result !== undefined && object.result !== null)
      ? CreateGroupResult.fromPartial(object.result)
      : undefined;
    return message;
  },
};

function createBaseGetBlockedContactsResponse(): GetBlockedContactsResponse {
  return { contacts: [] };
}

export const GetBlockedContactsResponse = {
  encode(message: GetBlockedContactsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.contacts) {
      Contact.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBlockedContactsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBlockedContactsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.contacts.push(Contact.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetBlockedContactsResponse {
    return {
      contacts: globalThis.Array.isArray(object?.contacts) ? object.contacts.map((e: any) => Contact.fromJSON(e)) : [],
    };
  },

  toJSON(message: GetBlockedContactsResponse): unknown {
    const obj: any = {};
    if (message.contacts?.length) {
      obj.contacts = message.contacts.map((e) => Contact.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<GetBlockedContactsResponse>): GetBlockedContactsResponse {
    return GetBlockedContactsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetBlockedContactsResponse>): GetBlockedContactsResponse {
    const message = createBaseGetBlockedContactsResponse();
    message.contacts = object.contacts?.map((e) => Contact.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetChatByIdRequest(): GetChatByIdRequest {
  return { chatId: undefined };
}

export const GetChatByIdRequest = {
  encode(message: GetChatByIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatId !== undefined) {
      Wid.encode(message.chatId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetChatByIdRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetChatByIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.chatId = Wid.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetChatByIdRequest {
    return { chatId: isSet(object.chatId) ? Wid.fromJSON(object.chatId) : undefined };
  },

  toJSON(message: GetChatByIdRequest): unknown {
    const obj: any = {};
    if (message.chatId !== undefined) {
      obj.chatId = Wid.toJSON(message.chatId);
    }
    return obj;
  },

  create(base?: DeepPartial<GetChatByIdRequest>): GetChatByIdRequest {
    return GetChatByIdRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetChatByIdRequest>): GetChatByIdRequest {
    const message = createBaseGetChatByIdRequest();
    message.chatId = (object.chatId !== undefined && object.chatId !== null)
      ? Wid.fromPartial(object.chatId)
      : undefined;
    return message;
  },
};

function createBaseGetChatByIdResponse(): GetChatByIdResponse {
  return { chat: undefined };
}

export const GetChatByIdResponse = {
  encode(message: GetChatByIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chat !== undefined) {
      Chat.encode(message.chat, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetChatByIdResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetChatByIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.chat = Chat.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetChatByIdResponse {
    return { chat: isSet(object.chat) ? Chat.fromJSON(object.chat) : undefined };
  },

  toJSON(message: GetChatByIdResponse): unknown {
    const obj: any = {};
    if (message.chat !== undefined) {
      obj.chat = Chat.toJSON(message.chat);
    }
    return obj;
  },

  create(base?: DeepPartial<GetChatByIdResponse>): GetChatByIdResponse {
    return GetChatByIdResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetChatByIdResponse>): GetChatByIdResponse {
    const message = createBaseGetChatByIdResponse();
    message.chat = (object.chat !== undefined && object.chat !== null) ? Chat.fromPartial(object.chat) : undefined;
    return message;
  },
};

function createBaseGetChatsResponse(): GetChatsResponse {
  return { chats: [] };
}

export const GetChatsResponse = {
  encode(message: GetChatsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.chats) {
      Chat.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetChatsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetChatsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.chats.push(Chat.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetChatsResponse {
    return { chats: globalThis.Array.isArray(object?.chats) ? object.chats.map((e: any) => Chat.fromJSON(e)) : [] };
  },

  toJSON(message: GetChatsResponse): unknown {
    const obj: any = {};
    if (message.chats?.length) {
      obj.chats = message.chats.map((e) => Chat.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<GetChatsResponse>): GetChatsResponse {
    return GetChatsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetChatsResponse>): GetChatsResponse {
    const message = createBaseGetChatsResponse();
    message.chats = object.chats?.map((e) => Chat.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetContactByIdRequest(): GetContactByIdRequest {
  return { contactId: undefined };
}

export const GetContactByIdRequest = {
  encode(message: GetContactByIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contactId !== undefined) {
      Wid.encode(message.contactId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetContactByIdRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetContactByIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.contactId = Wid.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetContactByIdRequest {
    return { contactId: isSet(object.contactId) ? Wid.fromJSON(object.contactId) : undefined };
  },

  toJSON(message: GetContactByIdRequest): unknown {
    const obj: any = {};
    if (message.contactId !== undefined) {
      obj.contactId = Wid.toJSON(message.contactId);
    }
    return obj;
  },

  create(base?: DeepPartial<GetContactByIdRequest>): GetContactByIdRequest {
    return GetContactByIdRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetContactByIdRequest>): GetContactByIdRequest {
    const message = createBaseGetContactByIdRequest();
    message.contactId = (object.contactId !== undefined && object.contactId !== null)
      ? Wid.fromPartial(object.contactId)
      : undefined;
    return message;
  },
};

function createBaseGetContactByIdResponse(): GetContactByIdResponse {
  return { contact: undefined };
}

export const GetContactByIdResponse = {
  encode(message: GetContactByIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contact !== undefined) {
      Contact.encode(message.contact, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetContactByIdResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetContactByIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.contact = Contact.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetContactByIdResponse {
    return { contact: isSet(object.contact) ? Contact.fromJSON(object.contact) : undefined };
  },

  toJSON(message: GetContactByIdResponse): unknown {
    const obj: any = {};
    if (message.contact !== undefined) {
      obj.contact = Contact.toJSON(message.contact);
    }
    return obj;
  },

  create(base?: DeepPartial<GetContactByIdResponse>): GetContactByIdResponse {
    return GetContactByIdResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetContactByIdResponse>): GetContactByIdResponse {
    const message = createBaseGetContactByIdResponse();
    message.contact = (object.contact !== undefined && object.contact !== null)
      ? Contact.fromPartial(object.contact)
      : undefined;
    return message;
  },
};

function createBaseGetMessageByIdRequest(): GetMessageByIdRequest {
  return { messageId: undefined };
}

export const GetMessageByIdRequest = {
  encode(message: GetMessageByIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.messageId !== undefined) {
      MessageId.encode(message.messageId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMessageByIdRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMessageByIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.messageId = MessageId.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetMessageByIdRequest {
    return { messageId: isSet(object.messageId) ? MessageId.fromJSON(object.messageId) : undefined };
  },

  toJSON(message: GetMessageByIdRequest): unknown {
    const obj: any = {};
    if (message.messageId !== undefined) {
      obj.messageId = MessageId.toJSON(message.messageId);
    }
    return obj;
  },

  create(base?: DeepPartial<GetMessageByIdRequest>): GetMessageByIdRequest {
    return GetMessageByIdRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetMessageByIdRequest>): GetMessageByIdRequest {
    const message = createBaseGetMessageByIdRequest();
    message.messageId = (object.messageId !== undefined && object.messageId !== null)
      ? MessageId.fromPartial(object.messageId)
      : undefined;
    return message;
  },
};

function createBaseGetMessageByIdResponse(): GetMessageByIdResponse {
  return { message: undefined };
}

export const GetMessageByIdResponse = {
  encode(message: GetMessageByIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== undefined) {
      Message.encode(message.message, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMessageByIdResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMessageByIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.message = Message.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetMessageByIdResponse {
    return { message: isSet(object.message) ? Message.fromJSON(object.message) : undefined };
  },

  toJSON(message: GetMessageByIdResponse): unknown {
    const obj: any = {};
    if (message.message !== undefined) {
      obj.message = Message.toJSON(message.message);
    }
    return obj;
  },

  create(base?: DeepPartial<GetMessageByIdResponse>): GetMessageByIdResponse {
    return GetMessageByIdResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetMessageByIdResponse>): GetMessageByIdResponse {
    const message = createBaseGetMessageByIdResponse();
    message.message = (object.message !== undefined && object.message !== null)
      ? Message.fromPartial(object.message)
      : undefined;
    return message;
  },
};

function createBaseGetContactsResponse(): GetContactsResponse {
  return { contacts: [] };
}

export const GetContactsResponse = {
  encode(message: GetContactsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.contacts) {
      Contact.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetContactsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetContactsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.contacts.push(Contact.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetContactsResponse {
    return {
      contacts: globalThis.Array.isArray(object?.contacts) ? object.contacts.map((e: any) => Contact.fromJSON(e)) : [],
    };
  },

  toJSON(message: GetContactsResponse): unknown {
    const obj: any = {};
    if (message.contacts?.length) {
      obj.contacts = message.contacts.map((e) => Contact.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<GetContactsResponse>): GetContactsResponse {
    return GetContactsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetContactsResponse>): GetContactsResponse {
    const message = createBaseGetContactsResponse();
    message.contacts = object.contacts?.map((e) => Contact.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetCountryCodeRequest(): GetCountryCodeRequest {
  return { messageId: undefined };
}

export const GetCountryCodeRequest = {
  encode(message: GetCountryCodeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.messageId !== undefined) {
      MessageId.encode(message.messageId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetCountryCodeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCountryCodeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.messageId = MessageId.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetCountryCodeRequest {
    return { messageId: isSet(object.messageId) ? MessageId.fromJSON(object.messageId) : undefined };
  },

  toJSON(message: GetCountryCodeRequest): unknown {
    const obj: any = {};
    if (message.messageId !== undefined) {
      obj.messageId = MessageId.toJSON(message.messageId);
    }
    return obj;
  },

  create(base?: DeepPartial<GetCountryCodeRequest>): GetCountryCodeRequest {
    return GetCountryCodeRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetCountryCodeRequest>): GetCountryCodeRequest {
    const message = createBaseGetCountryCodeRequest();
    message.messageId = (object.messageId !== undefined && object.messageId !== null)
      ? MessageId.fromPartial(object.messageId)
      : undefined;
    return message;
  },
};

function createBaseGetCountryCodeResponse(): GetCountryCodeResponse {
  return { countryCode: "" };
}

export const GetCountryCodeResponse = {
  encode(message: GetCountryCodeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.countryCode !== "") {
      writer.uint32(10).string(message.countryCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetCountryCodeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCountryCodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.countryCode = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetCountryCodeResponse {
    return { countryCode: isSet(object.countryCode) ? globalThis.String(object.countryCode) : "" };
  },

  toJSON(message: GetCountryCodeResponse): unknown {
    const obj: any = {};
    if (message.countryCode !== "") {
      obj.countryCode = message.countryCode;
    }
    return obj;
  },

  create(base?: DeepPartial<GetCountryCodeResponse>): GetCountryCodeResponse {
    return GetCountryCodeResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetCountryCodeResponse>): GetCountryCodeResponse {
    const message = createBaseGetCountryCodeResponse();
    message.countryCode = object.countryCode ?? "";
    return message;
  },
};

function createBaseGetFormattedNumberRequest(): GetFormattedNumberRequest {
  return { messageId: undefined };
}

export const GetFormattedNumberRequest = {
  encode(message: GetFormattedNumberRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.messageId !== undefined) {
      MessageId.encode(message.messageId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetFormattedNumberRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetFormattedNumberRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.messageId = MessageId.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetFormattedNumberRequest {
    return { messageId: isSet(object.messageId) ? MessageId.fromJSON(object.messageId) : undefined };
  },

  toJSON(message: GetFormattedNumberRequest): unknown {
    const obj: any = {};
    if (message.messageId !== undefined) {
      obj.messageId = MessageId.toJSON(message.messageId);
    }
    return obj;
  },

  create(base?: DeepPartial<GetFormattedNumberRequest>): GetFormattedNumberRequest {
    return GetFormattedNumberRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetFormattedNumberRequest>): GetFormattedNumberRequest {
    const message = createBaseGetFormattedNumberRequest();
    message.messageId = (object.messageId !== undefined && object.messageId !== null)
      ? MessageId.fromPartial(object.messageId)
      : undefined;
    return message;
  },
};

function createBaseGetFormattedNumberResponse(): GetFormattedNumberResponse {
  return { formattedNumber: "" };
}

export const GetFormattedNumberResponse = {
  encode(message: GetFormattedNumberResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.formattedNumber !== "") {
      writer.uint32(10).string(message.formattedNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetFormattedNumberResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetFormattedNumberResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.formattedNumber = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetFormattedNumberResponse {
    return { formattedNumber: isSet(object.formattedNumber) ? globalThis.String(object.formattedNumber) : "" };
  },

  toJSON(message: GetFormattedNumberResponse): unknown {
    const obj: any = {};
    if (message.formattedNumber !== "") {
      obj.formattedNumber = message.formattedNumber;
    }
    return obj;
  },

  create(base?: DeepPartial<GetFormattedNumberResponse>): GetFormattedNumberResponse {
    return GetFormattedNumberResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetFormattedNumberResponse>): GetFormattedNumberResponse {
    const message = createBaseGetFormattedNumberResponse();
    message.formattedNumber = object.formattedNumber ?? "";
    return message;
  },
};

function createBaseGetLabelsResponse(): GetLabelsResponse {
  return { labels: [] };
}

export const GetLabelsResponse = {
  encode(message: GetLabelsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.labels) {
      Label.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLabelsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLabelsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.labels.push(Label.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetLabelsResponse {
    return { labels: globalThis.Array.isArray(object?.labels) ? object.labels.map((e: any) => Label.fromJSON(e)) : [] };
  },

  toJSON(message: GetLabelsResponse): unknown {
    const obj: any = {};
    if (message.labels?.length) {
      obj.labels = message.labels.map((e) => Label.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<GetLabelsResponse>): GetLabelsResponse {
    return GetLabelsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetLabelsResponse>): GetLabelsResponse {
    const message = createBaseGetLabelsResponse();
    message.labels = object.labels?.map((e) => Label.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAddOrRemoveLabelsRequest(): AddOrRemoveLabelsRequest {
  return { labelIds: [], chatIds: [] };
}

export const AddOrRemoveLabelsRequest = {
  encode(message: AddOrRemoveLabelsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.labelIds) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.chatIds) {
      Wid.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddOrRemoveLabelsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddOrRemoveLabelsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.labelIds.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.chatIds.push(Wid.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddOrRemoveLabelsRequest {
    return {
      labelIds: globalThis.Array.isArray(object?.labelIds) ? object.labelIds.map((e: any) => globalThis.String(e)) : [],
      chatIds: globalThis.Array.isArray(object?.chatIds) ? object.chatIds.map((e: any) => Wid.fromJSON(e)) : [],
    };
  },

  toJSON(message: AddOrRemoveLabelsRequest): unknown {
    const obj: any = {};
    if (message.labelIds?.length) {
      obj.labelIds = message.labelIds;
    }
    if (message.chatIds?.length) {
      obj.chatIds = message.chatIds.map((e) => Wid.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<AddOrRemoveLabelsRequest>): AddOrRemoveLabelsRequest {
    return AddOrRemoveLabelsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AddOrRemoveLabelsRequest>): AddOrRemoveLabelsRequest {
    const message = createBaseAddOrRemoveLabelsRequest();
    message.labelIds = object.labelIds?.map((e) => e) || [];
    message.chatIds = object.chatIds?.map((e) => Wid.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetLabelByIdRequest(): GetLabelByIdRequest {
  return { labelId: "" };
}

export const GetLabelByIdRequest = {
  encode(message: GetLabelByIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.labelId !== "") {
      writer.uint32(10).string(message.labelId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLabelByIdRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLabelByIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.labelId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetLabelByIdRequest {
    return { labelId: isSet(object.labelId) ? globalThis.String(object.labelId) : "" };
  },

  toJSON(message: GetLabelByIdRequest): unknown {
    const obj: any = {};
    if (message.labelId !== "") {
      obj.labelId = message.labelId;
    }
    return obj;
  },

  create(base?: DeepPartial<GetLabelByIdRequest>): GetLabelByIdRequest {
    return GetLabelByIdRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetLabelByIdRequest>): GetLabelByIdRequest {
    const message = createBaseGetLabelByIdRequest();
    message.labelId = object.labelId ?? "";
    return message;
  },
};

function createBaseGetLabelByIdResponse(): GetLabelByIdResponse {
  return { label: undefined };
}

export const GetLabelByIdResponse = {
  encode(message: GetLabelByIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.label !== undefined) {
      Label.encode(message.label, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLabelByIdResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLabelByIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.label = Label.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetLabelByIdResponse {
    return { label: isSet(object.label) ? Label.fromJSON(object.label) : undefined };
  },

  toJSON(message: GetLabelByIdResponse): unknown {
    const obj: any = {};
    if (message.label !== undefined) {
      obj.label = Label.toJSON(message.label);
    }
    return obj;
  },

  create(base?: DeepPartial<GetLabelByIdResponse>): GetLabelByIdResponse {
    return GetLabelByIdResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetLabelByIdResponse>): GetLabelByIdResponse {
    const message = createBaseGetLabelByIdResponse();
    message.label = (object.label !== undefined && object.label !== null) ? Label.fromPartial(object.label) : undefined;
    return message;
  },
};

function createBaseGetChatLabelsRequest(): GetChatLabelsRequest {
  return { chatId: undefined };
}

export const GetChatLabelsRequest = {
  encode(message: GetChatLabelsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatId !== undefined) {
      Wid.encode(message.chatId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetChatLabelsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetChatLabelsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.chatId = Wid.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetChatLabelsRequest {
    return { chatId: isSet(object.chatId) ? Wid.fromJSON(object.chatId) : undefined };
  },

  toJSON(message: GetChatLabelsRequest): unknown {
    const obj: any = {};
    if (message.chatId !== undefined) {
      obj.chatId = Wid.toJSON(message.chatId);
    }
    return obj;
  },

  create(base?: DeepPartial<GetChatLabelsRequest>): GetChatLabelsRequest {
    return GetChatLabelsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetChatLabelsRequest>): GetChatLabelsRequest {
    const message = createBaseGetChatLabelsRequest();
    message.chatId = (object.chatId !== undefined && object.chatId !== null)
      ? Wid.fromPartial(object.chatId)
      : undefined;
    return message;
  },
};

function createBaseGetChatLabelsResponse(): GetChatLabelsResponse {
  return { labels: [] };
}

export const GetChatLabelsResponse = {
  encode(message: GetChatLabelsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.labels) {
      Label.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetChatLabelsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetChatLabelsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.labels.push(Label.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetChatLabelsResponse {
    return { labels: globalThis.Array.isArray(object?.labels) ? object.labels.map((e: any) => Label.fromJSON(e)) : [] };
  },

  toJSON(message: GetChatLabelsResponse): unknown {
    const obj: any = {};
    if (message.labels?.length) {
      obj.labels = message.labels.map((e) => Label.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<GetChatLabelsResponse>): GetChatLabelsResponse {
    return GetChatLabelsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetChatLabelsResponse>): GetChatLabelsResponse {
    const message = createBaseGetChatLabelsResponse();
    message.labels = object.labels?.map((e) => Label.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetChatsByLabelIdRequest(): GetChatsByLabelIdRequest {
  return { labelId: "" };
}

export const GetChatsByLabelIdRequest = {
  encode(message: GetChatsByLabelIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.labelId !== "") {
      writer.uint32(10).string(message.labelId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetChatsByLabelIdRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetChatsByLabelIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.labelId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetChatsByLabelIdRequest {
    return { labelId: isSet(object.labelId) ? globalThis.String(object.labelId) : "" };
  },

  toJSON(message: GetChatsByLabelIdRequest): unknown {
    const obj: any = {};
    if (message.labelId !== "") {
      obj.labelId = message.labelId;
    }
    return obj;
  },

  create(base?: DeepPartial<GetChatsByLabelIdRequest>): GetChatsByLabelIdRequest {
    return GetChatsByLabelIdRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetChatsByLabelIdRequest>): GetChatsByLabelIdRequest {
    const message = createBaseGetChatsByLabelIdRequest();
    message.labelId = object.labelId ?? "";
    return message;
  },
};

function createBaseGetChatsByLabelIdResponse(): GetChatsByLabelIdResponse {
  return { chats: [] };
}

export const GetChatsByLabelIdResponse = {
  encode(message: GetChatsByLabelIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.chats) {
      Chat.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetChatsByLabelIdResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetChatsByLabelIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.chats.push(Chat.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetChatsByLabelIdResponse {
    return { chats: globalThis.Array.isArray(object?.chats) ? object.chats.map((e: any) => Chat.fromJSON(e)) : [] };
  },

  toJSON(message: GetChatsByLabelIdResponse): unknown {
    const obj: any = {};
    if (message.chats?.length) {
      obj.chats = message.chats.map((e) => Chat.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<GetChatsByLabelIdResponse>): GetChatsByLabelIdResponse {
    return GetChatsByLabelIdResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetChatsByLabelIdResponse>): GetChatsByLabelIdResponse {
    const message = createBaseGetChatsByLabelIdResponse();
    message.chats = object.chats?.map((e) => Chat.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetProfilePicUrlRequest(): GetProfilePicUrlRequest {
  return { contactId: undefined };
}

export const GetProfilePicUrlRequest = {
  encode(message: GetProfilePicUrlRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contactId !== undefined) {
      Wid.encode(message.contactId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetProfilePicUrlRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetProfilePicUrlRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.contactId = Wid.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetProfilePicUrlRequest {
    return { contactId: isSet(object.contactId) ? Wid.fromJSON(object.contactId) : undefined };
  },

  toJSON(message: GetProfilePicUrlRequest): unknown {
    const obj: any = {};
    if (message.contactId !== undefined) {
      obj.contactId = Wid.toJSON(message.contactId);
    }
    return obj;
  },

  create(base?: DeepPartial<GetProfilePicUrlRequest>): GetProfilePicUrlRequest {
    return GetProfilePicUrlRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetProfilePicUrlRequest>): GetProfilePicUrlRequest {
    const message = createBaseGetProfilePicUrlRequest();
    message.contactId = (object.contactId !== undefined && object.contactId !== null)
      ? Wid.fromPartial(object.contactId)
      : undefined;
    return message;
  },
};

function createBaseGetProfilePicUrlResponse(): GetProfilePicUrlResponse {
  return { profilePicUrl: "" };
}

export const GetProfilePicUrlResponse = {
  encode(message: GetProfilePicUrlResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.profilePicUrl !== "") {
      writer.uint32(10).string(message.profilePicUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetProfilePicUrlResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetProfilePicUrlResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.profilePicUrl = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetProfilePicUrlResponse {
    return { profilePicUrl: isSet(object.profilePicUrl) ? globalThis.String(object.profilePicUrl) : "" };
  },

  toJSON(message: GetProfilePicUrlResponse): unknown {
    const obj: any = {};
    if (message.profilePicUrl !== "") {
      obj.profilePicUrl = message.profilePicUrl;
    }
    return obj;
  },

  create(base?: DeepPartial<GetProfilePicUrlResponse>): GetProfilePicUrlResponse {
    return GetProfilePicUrlResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetProfilePicUrlResponse>): GetProfilePicUrlResponse {
    const message = createBaseGetProfilePicUrlResponse();
    message.profilePicUrl = object.profilePicUrl ?? "";
    return message;
  },
};

function createBaseGetCommonGroupsRequest(): GetCommonGroupsRequest {
  return { contactId: undefined };
}

export const GetCommonGroupsRequest = {
  encode(message: GetCommonGroupsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contactId !== undefined) {
      Wid.encode(message.contactId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetCommonGroupsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCommonGroupsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.contactId = Wid.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetCommonGroupsRequest {
    return { contactId: isSet(object.contactId) ? Wid.fromJSON(object.contactId) : undefined };
  },

  toJSON(message: GetCommonGroupsRequest): unknown {
    const obj: any = {};
    if (message.contactId !== undefined) {
      obj.contactId = Wid.toJSON(message.contactId);
    }
    return obj;
  },

  create(base?: DeepPartial<GetCommonGroupsRequest>): GetCommonGroupsRequest {
    return GetCommonGroupsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetCommonGroupsRequest>): GetCommonGroupsRequest {
    const message = createBaseGetCommonGroupsRequest();
    message.contactId = (object.contactId !== undefined && object.contactId !== null)
      ? Wid.fromPartial(object.contactId)
      : undefined;
    return message;
  },
};

function createBaseGetCommonGroupsResponse(): GetCommonGroupsResponse {
  return { chats: [] };
}

export const GetCommonGroupsResponse = {
  encode(message: GetCommonGroupsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.chats) {
      Chat.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetCommonGroupsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCommonGroupsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.chats.push(Chat.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetCommonGroupsResponse {
    return { chats: globalThis.Array.isArray(object?.chats) ? object.chats.map((e: any) => Chat.fromJSON(e)) : [] };
  },

  toJSON(message: GetCommonGroupsResponse): unknown {
    const obj: any = {};
    if (message.chats?.length) {
      obj.chats = message.chats.map((e) => Chat.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<GetCommonGroupsResponse>): GetCommonGroupsResponse {
    return GetCommonGroupsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetCommonGroupsResponse>): GetCommonGroupsResponse {
    const message = createBaseGetCommonGroupsResponse();
    message.chats = object.chats?.map((e) => Chat.fromPartial(e)) || [];
    return message;
  },
};

function createBaseIsRegisteredUserRequest(): IsRegisteredUserRequest {
  return { contactId: undefined };
}

export const IsRegisteredUserRequest = {
  encode(message: IsRegisteredUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contactId !== undefined) {
      Wid.encode(message.contactId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IsRegisteredUserRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIsRegisteredUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.contactId = Wid.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IsRegisteredUserRequest {
    return { contactId: isSet(object.contactId) ? Wid.fromJSON(object.contactId) : undefined };
  },

  toJSON(message: IsRegisteredUserRequest): unknown {
    const obj: any = {};
    if (message.contactId !== undefined) {
      obj.contactId = Wid.toJSON(message.contactId);
    }
    return obj;
  },

  create(base?: DeepPartial<IsRegisteredUserRequest>): IsRegisteredUserRequest {
    return IsRegisteredUserRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<IsRegisteredUserRequest>): IsRegisteredUserRequest {
    const message = createBaseIsRegisteredUserRequest();
    message.contactId = (object.contactId !== undefined && object.contactId !== null)
      ? Wid.fromPartial(object.contactId)
      : undefined;
    return message;
  },
};

function createBaseIsRegisteredUserResponse(): IsRegisteredUserResponse {
  return { isRegistered: false };
}

export const IsRegisteredUserResponse = {
  encode(message: IsRegisteredUserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isRegistered === true) {
      writer.uint32(8).bool(message.isRegistered);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IsRegisteredUserResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIsRegisteredUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.isRegistered = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IsRegisteredUserResponse {
    return { isRegistered: isSet(object.isRegistered) ? globalThis.Boolean(object.isRegistered) : false };
  },

  toJSON(message: IsRegisteredUserResponse): unknown {
    const obj: any = {};
    if (message.isRegistered === true) {
      obj.isRegistered = message.isRegistered;
    }
    return obj;
  },

  create(base?: DeepPartial<IsRegisteredUserResponse>): IsRegisteredUserResponse {
    return IsRegisteredUserResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<IsRegisteredUserResponse>): IsRegisteredUserResponse {
    const message = createBaseIsRegisteredUserResponse();
    message.isRegistered = object.isRegistered ?? false;
    return message;
  },
};

function createBaseMuteChatRequest(): MuteChatRequest {
  return { chatId: undefined };
}

export const MuteChatRequest = {
  encode(message: MuteChatRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatId !== undefined) {
      Wid.encode(message.chatId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MuteChatRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMuteChatRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.chatId = Wid.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MuteChatRequest {
    return { chatId: isSet(object.chatId) ? Wid.fromJSON(object.chatId) : undefined };
  },

  toJSON(message: MuteChatRequest): unknown {
    const obj: any = {};
    if (message.chatId !== undefined) {
      obj.chatId = Wid.toJSON(message.chatId);
    }
    return obj;
  },

  create(base?: DeepPartial<MuteChatRequest>): MuteChatRequest {
    return MuteChatRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MuteChatRequest>): MuteChatRequest {
    const message = createBaseMuteChatRequest();
    message.chatId = (object.chatId !== undefined && object.chatId !== null)
      ? Wid.fromPartial(object.chatId)
      : undefined;
    return message;
  },
};

function createBaseSendMessageRequest(): SendMessageRequest {
  return { chatId: undefined, content: "", options: undefined };
}

export const SendMessageRequest = {
  encode(message: SendMessageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatId !== undefined) {
      Wid.encode(message.chatId, writer.uint32(10).fork()).ldelim();
    }
    if (message.content !== "") {
      writer.uint32(18).string(message.content);
    }
    if (message.options !== undefined) {
      SendMessageRequest_Options.encode(message.options, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendMessageRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendMessageRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.chatId = Wid.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.content = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.options = SendMessageRequest_Options.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SendMessageRequest {
    return {
      chatId: isSet(object.chatId) ? Wid.fromJSON(object.chatId) : undefined,
      content: isSet(object.content) ? globalThis.String(object.content) : "",
      options: isSet(object.options) ? SendMessageRequest_Options.fromJSON(object.options) : undefined,
    };
  },

  toJSON(message: SendMessageRequest): unknown {
    const obj: any = {};
    if (message.chatId !== undefined) {
      obj.chatId = Wid.toJSON(message.chatId);
    }
    if (message.content !== "") {
      obj.content = message.content;
    }
    if (message.options !== undefined) {
      obj.options = SendMessageRequest_Options.toJSON(message.options);
    }
    return obj;
  },

  create(base?: DeepPartial<SendMessageRequest>): SendMessageRequest {
    return SendMessageRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SendMessageRequest>): SendMessageRequest {
    const message = createBaseSendMessageRequest();
    message.chatId = (object.chatId !== undefined && object.chatId !== null)
      ? Wid.fromPartial(object.chatId)
      : undefined;
    message.content = object.content ?? "";
    message.options = (object.options !== undefined && object.options !== null)
      ? SendMessageRequest_Options.fromPartial(object.options)
      : undefined;
    return message;
  },
};

function createBaseSendMessageRequest_Options(): SendMessageRequest_Options {
  return {
    linkPreview: undefined,
    sendAudioAsVoice: undefined,
    sendVideoAsGif: undefined,
    sendMediaAsSticker: undefined,
    sendMediaAsDocument: undefined,
    isViewOnce: undefined,
    parseVcards: undefined,
    caption: undefined,
    quotedMessageId: undefined,
    mentions: [],
    sendSeen: undefined,
    stickerAuthor: undefined,
    stickerName: undefined,
    stickerCategories: [],
    media: undefined,
  };
}

export const SendMessageRequest_Options = {
  encode(message: SendMessageRequest_Options, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.linkPreview !== undefined) {
      writer.uint32(8).bool(message.linkPreview);
    }
    if (message.sendAudioAsVoice !== undefined) {
      writer.uint32(16).bool(message.sendAudioAsVoice);
    }
    if (message.sendVideoAsGif !== undefined) {
      writer.uint32(24).bool(message.sendVideoAsGif);
    }
    if (message.sendMediaAsSticker !== undefined) {
      writer.uint32(32).bool(message.sendMediaAsSticker);
    }
    if (message.sendMediaAsDocument !== undefined) {
      writer.uint32(40).bool(message.sendMediaAsDocument);
    }
    if (message.isViewOnce !== undefined) {
      writer.uint32(48).bool(message.isViewOnce);
    }
    if (message.parseVcards !== undefined) {
      writer.uint32(56).bool(message.parseVcards);
    }
    if (message.caption !== undefined) {
      writer.uint32(66).string(message.caption);
    }
    if (message.quotedMessageId !== undefined) {
      MessageId.encode(message.quotedMessageId, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.mentions) {
      Contact.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.sendSeen !== undefined) {
      writer.uint32(88).bool(message.sendSeen);
    }
    if (message.stickerAuthor !== undefined) {
      writer.uint32(98).string(message.stickerAuthor);
    }
    if (message.stickerName !== undefined) {
      writer.uint32(106).string(message.stickerName);
    }
    for (const v of message.stickerCategories) {
      writer.uint32(114).string(v!);
    }
    if (message.media !== undefined) {
      MessageMedia.encode(message.media, writer.uint32(122).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendMessageRequest_Options {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendMessageRequest_Options();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.linkPreview = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.sendAudioAsVoice = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.sendVideoAsGif = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.sendMediaAsSticker = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.sendMediaAsDocument = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.isViewOnce = reader.bool();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.parseVcards = reader.bool();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.caption = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.quotedMessageId = MessageId.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.mentions.push(Contact.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.sendSeen = reader.bool();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.stickerAuthor = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.stickerName = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.stickerCategories.push(reader.string());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.media = MessageMedia.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SendMessageRequest_Options {
    return {
      linkPreview: isSet(object.linkPreview) ? globalThis.Boolean(object.linkPreview) : undefined,
      sendAudioAsVoice: isSet(object.sendAudioAsVoice) ? globalThis.Boolean(object.sendAudioAsVoice) : undefined,
      sendVideoAsGif: isSet(object.sendVideoAsGif) ? globalThis.Boolean(object.sendVideoAsGif) : undefined,
      sendMediaAsSticker: isSet(object.sendMediaAsSticker) ? globalThis.Boolean(object.sendMediaAsSticker) : undefined,
      sendMediaAsDocument: isSet(object.sendMediaAsDocument)
        ? globalThis.Boolean(object.sendMediaAsDocument)
        : undefined,
      isViewOnce: isSet(object.isViewOnce) ? globalThis.Boolean(object.isViewOnce) : undefined,
      parseVcards: isSet(object.parseVcards) ? globalThis.Boolean(object.parseVcards) : undefined,
      caption: isSet(object.caption) ? globalThis.String(object.caption) : undefined,
      quotedMessageId: isSet(object.quotedMessageId) ? MessageId.fromJSON(object.quotedMessageId) : undefined,
      mentions: globalThis.Array.isArray(object?.mentions) ? object.mentions.map((e: any) => Contact.fromJSON(e)) : [],
      sendSeen: isSet(object.sendSeen) ? globalThis.Boolean(object.sendSeen) : undefined,
      stickerAuthor: isSet(object.stickerAuthor) ? globalThis.String(object.stickerAuthor) : undefined,
      stickerName: isSet(object.stickerName) ? globalThis.String(object.stickerName) : undefined,
      stickerCategories: globalThis.Array.isArray(object?.stickerCategories)
        ? object.stickerCategories.map((e: any) => globalThis.String(e))
        : [],
      media: isSet(object.media) ? MessageMedia.fromJSON(object.media) : undefined,
    };
  },

  toJSON(message: SendMessageRequest_Options): unknown {
    const obj: any = {};
    if (message.linkPreview !== undefined) {
      obj.linkPreview = message.linkPreview;
    }
    if (message.sendAudioAsVoice !== undefined) {
      obj.sendAudioAsVoice = message.sendAudioAsVoice;
    }
    if (message.sendVideoAsGif !== undefined) {
      obj.sendVideoAsGif = message.sendVideoAsGif;
    }
    if (message.sendMediaAsSticker !== undefined) {
      obj.sendMediaAsSticker = message.sendMediaAsSticker;
    }
    if (message.sendMediaAsDocument !== undefined) {
      obj.sendMediaAsDocument = message.sendMediaAsDocument;
    }
    if (message.isViewOnce !== undefined) {
      obj.isViewOnce = message.isViewOnce;
    }
    if (message.parseVcards !== undefined) {
      obj.parseVcards = message.parseVcards;
    }
    if (message.caption !== undefined) {
      obj.caption = message.caption;
    }
    if (message.quotedMessageId !== undefined) {
      obj.quotedMessageId = MessageId.toJSON(message.quotedMessageId);
    }
    if (message.mentions?.length) {
      obj.mentions = message.mentions.map((e) => Contact.toJSON(e));
    }
    if (message.sendSeen !== undefined) {
      obj.sendSeen = message.sendSeen;
    }
    if (message.stickerAuthor !== undefined) {
      obj.stickerAuthor = message.stickerAuthor;
    }
    if (message.stickerName !== undefined) {
      obj.stickerName = message.stickerName;
    }
    if (message.stickerCategories?.length) {
      obj.stickerCategories = message.stickerCategories;
    }
    if (message.media !== undefined) {
      obj.media = MessageMedia.toJSON(message.media);
    }
    return obj;
  },

  create(base?: DeepPartial<SendMessageRequest_Options>): SendMessageRequest_Options {
    return SendMessageRequest_Options.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SendMessageRequest_Options>): SendMessageRequest_Options {
    const message = createBaseSendMessageRequest_Options();
    message.linkPreview = object.linkPreview ?? undefined;
    message.sendAudioAsVoice = object.sendAudioAsVoice ?? undefined;
    message.sendVideoAsGif = object.sendVideoAsGif ?? undefined;
    message.sendMediaAsSticker = object.sendMediaAsSticker ?? undefined;
    message.sendMediaAsDocument = object.sendMediaAsDocument ?? undefined;
    message.isViewOnce = object.isViewOnce ?? undefined;
    message.parseVcards = object.parseVcards ?? undefined;
    message.caption = object.caption ?? undefined;
    message.quotedMessageId = (object.quotedMessageId !== undefined && object.quotedMessageId !== null)
      ? MessageId.fromPartial(object.quotedMessageId)
      : undefined;
    message.mentions = object.mentions?.map((e) => Contact.fromPartial(e)) || [];
    message.sendSeen = object.sendSeen ?? undefined;
    message.stickerAuthor = object.stickerAuthor ?? undefined;
    message.stickerName = object.stickerName ?? undefined;
    message.stickerCategories = object.stickerCategories?.map((e) => e) || [];
    message.media = (object.media !== undefined && object.media !== null)
      ? MessageMedia.fromPartial(object.media)
      : undefined;
    return message;
  },
};

function createBaseSendMessageResponse(): SendMessageResponse {
  return { message: undefined };
}

export const SendMessageResponse = {
  encode(message: SendMessageResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== undefined) {
      Message.encode(message.message, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendMessageResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendMessageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.message = Message.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SendMessageResponse {
    return { message: isSet(object.message) ? Message.fromJSON(object.message) : undefined };
  },

  toJSON(message: SendMessageResponse): unknown {
    const obj: any = {};
    if (message.message !== undefined) {
      obj.message = Message.toJSON(message.message);
    }
    return obj;
  },

  create(base?: DeepPartial<SendMessageResponse>): SendMessageResponse {
    return SendMessageResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SendMessageResponse>): SendMessageResponse {
    const message = createBaseSendMessageResponse();
    message.message = (object.message !== undefined && object.message !== null)
      ? Message.fromPartial(object.message)
      : undefined;
    return message;
  },
};

function createBaseSearchMessagesRequest(): SearchMessagesRequest {
  return { query: "", options: undefined };
}

export const SearchMessagesRequest = {
  encode(message: SearchMessagesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.query !== "") {
      writer.uint32(10).string(message.query);
    }
    if (message.options !== undefined) {
      SearchMessagesRequest_Options.encode(message.options, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SearchMessagesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSearchMessagesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.query = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.options = SearchMessagesRequest_Options.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SearchMessagesRequest {
    return {
      query: isSet(object.query) ? globalThis.String(object.query) : "",
      options: isSet(object.options) ? SearchMessagesRequest_Options.fromJSON(object.options) : undefined,
    };
  },

  toJSON(message: SearchMessagesRequest): unknown {
    const obj: any = {};
    if (message.query !== "") {
      obj.query = message.query;
    }
    if (message.options !== undefined) {
      obj.options = SearchMessagesRequest_Options.toJSON(message.options);
    }
    return obj;
  },

  create(base?: DeepPartial<SearchMessagesRequest>): SearchMessagesRequest {
    return SearchMessagesRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SearchMessagesRequest>): SearchMessagesRequest {
    const message = createBaseSearchMessagesRequest();
    message.query = object.query ?? "";
    message.options = (object.options !== undefined && object.options !== null)
      ? SearchMessagesRequest_Options.fromPartial(object.options)
      : undefined;
    return message;
  },
};

function createBaseSearchMessagesRequest_Options(): SearchMessagesRequest_Options {
  return { page: undefined, limit: undefined, chatId: undefined };
}

export const SearchMessagesRequest_Options = {
  encode(message: SearchMessagesRequest_Options, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.page !== undefined) {
      writer.uint32(8).uint32(message.page);
    }
    if (message.limit !== undefined) {
      writer.uint32(16).uint32(message.limit);
    }
    if (message.chatId !== undefined) {
      Wid.encode(message.chatId, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SearchMessagesRequest_Options {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSearchMessagesRequest_Options();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.page = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.limit = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.chatId = Wid.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SearchMessagesRequest_Options {
    return {
      page: isSet(object.page) ? globalThis.Number(object.page) : undefined,
      limit: isSet(object.limit) ? globalThis.Number(object.limit) : undefined,
      chatId: isSet(object.chatId) ? Wid.fromJSON(object.chatId) : undefined,
    };
  },

  toJSON(message: SearchMessagesRequest_Options): unknown {
    const obj: any = {};
    if (message.page !== undefined) {
      obj.page = Math.round(message.page);
    }
    if (message.limit !== undefined) {
      obj.limit = Math.round(message.limit);
    }
    if (message.chatId !== undefined) {
      obj.chatId = Wid.toJSON(message.chatId);
    }
    return obj;
  },

  create(base?: DeepPartial<SearchMessagesRequest_Options>): SearchMessagesRequest_Options {
    return SearchMessagesRequest_Options.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SearchMessagesRequest_Options>): SearchMessagesRequest_Options {
    const message = createBaseSearchMessagesRequest_Options();
    message.page = object.page ?? undefined;
    message.limit = object.limit ?? undefined;
    message.chatId = (object.chatId !== undefined && object.chatId !== null)
      ? Wid.fromPartial(object.chatId)
      : undefined;
    return message;
  },
};

function createBaseSearchMessagesResponse(): SearchMessagesResponse {
  return { messages: [] };
}

export const SearchMessagesResponse = {
  encode(message: SearchMessagesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.messages) {
      Message.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SearchMessagesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSearchMessagesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.messages.push(Message.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SearchMessagesResponse {
    return {
      messages: globalThis.Array.isArray(object?.messages) ? object.messages.map((e: any) => Message.fromJSON(e)) : [],
    };
  },

  toJSON(message: SearchMessagesResponse): unknown {
    const obj: any = {};
    if (message.messages?.length) {
      obj.messages = message.messages.map((e) => Message.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<SearchMessagesResponse>): SearchMessagesResponse {
    return SearchMessagesResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SearchMessagesResponse>): SearchMessagesResponse {
    const message = createBaseSearchMessagesResponse();
    message.messages = object.messages?.map((e) => Message.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSendSeenRequest(): SendSeenRequest {
  return { chatId: undefined };
}

export const SendSeenRequest = {
  encode(message: SendSeenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatId !== undefined) {
      Wid.encode(message.chatId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendSeenRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendSeenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.chatId = Wid.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SendSeenRequest {
    return { chatId: isSet(object.chatId) ? Wid.fromJSON(object.chatId) : undefined };
  },

  toJSON(message: SendSeenRequest): unknown {
    const obj: any = {};
    if (message.chatId !== undefined) {
      obj.chatId = Wid.toJSON(message.chatId);
    }
    return obj;
  },

  create(base?: DeepPartial<SendSeenRequest>): SendSeenRequest {
    return SendSeenRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SendSeenRequest>): SendSeenRequest {
    const message = createBaseSendSeenRequest();
    message.chatId = (object.chatId !== undefined && object.chatId !== null)
      ? Wid.fromPartial(object.chatId)
      : undefined;
    return message;
  },
};

function createBaseMarkChatUnreadRequest(): MarkChatUnreadRequest {
  return { chatId: undefined };
}

export const MarkChatUnreadRequest = {
  encode(message: MarkChatUnreadRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatId !== undefined) {
      Wid.encode(message.chatId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarkChatUnreadRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarkChatUnreadRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.chatId = Wid.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MarkChatUnreadRequest {
    return { chatId: isSet(object.chatId) ? Wid.fromJSON(object.chatId) : undefined };
  },

  toJSON(message: MarkChatUnreadRequest): unknown {
    const obj: any = {};
    if (message.chatId !== undefined) {
      obj.chatId = Wid.toJSON(message.chatId);
    }
    return obj;
  },

  create(base?: DeepPartial<MarkChatUnreadRequest>): MarkChatUnreadRequest {
    return MarkChatUnreadRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MarkChatUnreadRequest>): MarkChatUnreadRequest {
    const message = createBaseMarkChatUnreadRequest();
    message.chatId = (object.chatId !== undefined && object.chatId !== null)
      ? Wid.fromPartial(object.chatId)
      : undefined;
    return message;
  },
};

function createBaseSetStatusRequest(): SetStatusRequest {
  return { status: "" };
}

export const SetStatusRequest = {
  encode(message: SetStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetStatusRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.status = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetStatusRequest {
    return { status: isSet(object.status) ? globalThis.String(object.status) : "" };
  },

  toJSON(message: SetStatusRequest): unknown {
    const obj: any = {};
    if (message.status !== "") {
      obj.status = message.status;
    }
    return obj;
  },

  create(base?: DeepPartial<SetStatusRequest>): SetStatusRequest {
    return SetStatusRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SetStatusRequest>): SetStatusRequest {
    const message = createBaseSetStatusRequest();
    message.status = object.status ?? "";
    return message;
  },
};

function createBaseSetDisplayNameRequest(): SetDisplayNameRequest {
  return { displayName: "" };
}

export const SetDisplayNameRequest = {
  encode(message: SetDisplayNameRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.displayName !== "") {
      writer.uint32(10).string(message.displayName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetDisplayNameRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetDisplayNameRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.displayName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetDisplayNameRequest {
    return { displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : "" };
  },

  toJSON(message: SetDisplayNameRequest): unknown {
    const obj: any = {};
    if (message.displayName !== "") {
      obj.displayName = message.displayName;
    }
    return obj;
  },

  create(base?: DeepPartial<SetDisplayNameRequest>): SetDisplayNameRequest {
    return SetDisplayNameRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SetDisplayNameRequest>): SetDisplayNameRequest {
    const message = createBaseSetDisplayNameRequest();
    message.displayName = object.displayName ?? "";
    return message;
  },
};

function createBaseUnarchiveChatRequest(): UnarchiveChatRequest {
  return { chatId: undefined };
}

export const UnarchiveChatRequest = {
  encode(message: UnarchiveChatRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatId !== undefined) {
      Wid.encode(message.chatId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnarchiveChatRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnarchiveChatRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.chatId = Wid.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UnarchiveChatRequest {
    return { chatId: isSet(object.chatId) ? Wid.fromJSON(object.chatId) : undefined };
  },

  toJSON(message: UnarchiveChatRequest): unknown {
    const obj: any = {};
    if (message.chatId !== undefined) {
      obj.chatId = Wid.toJSON(message.chatId);
    }
    return obj;
  },

  create(base?: DeepPartial<UnarchiveChatRequest>): UnarchiveChatRequest {
    return UnarchiveChatRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UnarchiveChatRequest>): UnarchiveChatRequest {
    const message = createBaseUnarchiveChatRequest();
    message.chatId = (object.chatId !== undefined && object.chatId !== null)
      ? Wid.fromPartial(object.chatId)
      : undefined;
    return message;
  },
};

function createBaseUnmuteChatRequest(): UnmuteChatRequest {
  return { chatId: undefined };
}

export const UnmuteChatRequest = {
  encode(message: UnmuteChatRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatId !== undefined) {
      Wid.encode(message.chatId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnmuteChatRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnmuteChatRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.chatId = Wid.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UnmuteChatRequest {
    return { chatId: isSet(object.chatId) ? Wid.fromJSON(object.chatId) : undefined };
  },

  toJSON(message: UnmuteChatRequest): unknown {
    const obj: any = {};
    if (message.chatId !== undefined) {
      obj.chatId = Wid.toJSON(message.chatId);
    }
    return obj;
  },

  create(base?: DeepPartial<UnmuteChatRequest>): UnmuteChatRequest {
    return UnmuteChatRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UnmuteChatRequest>): UnmuteChatRequest {
    const message = createBaseUnmuteChatRequest();
    message.chatId = (object.chatId !== undefined && object.chatId !== null)
      ? Wid.fromPartial(object.chatId)
      : undefined;
    return message;
  },
};

function createBaseSetProfilePictureRequest(): SetProfilePictureRequest {
  return { media: undefined };
}

export const SetProfilePictureRequest = {
  encode(message: SetProfilePictureRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.media !== undefined) {
      MessageMedia.encode(message.media, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetProfilePictureRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetProfilePictureRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.media = MessageMedia.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetProfilePictureRequest {
    return { media: isSet(object.media) ? MessageMedia.fromJSON(object.media) : undefined };
  },

  toJSON(message: SetProfilePictureRequest): unknown {
    const obj: any = {};
    if (message.media !== undefined) {
      obj.media = MessageMedia.toJSON(message.media);
    }
    return obj;
  },

  create(base?: DeepPartial<SetProfilePictureRequest>): SetProfilePictureRequest {
    return SetProfilePictureRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SetProfilePictureRequest>): SetProfilePictureRequest {
    const message = createBaseSetProfilePictureRequest();
    message.media = (object.media !== undefined && object.media !== null)
      ? MessageMedia.fromPartial(object.media)
      : undefined;
    return message;
  },
};

function createBaseGetGroupMembershipRequestsRequest(): GetGroupMembershipRequestsRequest {
  return { chatId: undefined };
}

export const GetGroupMembershipRequestsRequest = {
  encode(message: GetGroupMembershipRequestsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatId !== undefined) {
      Wid.encode(message.chatId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetGroupMembershipRequestsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetGroupMembershipRequestsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.chatId = Wid.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetGroupMembershipRequestsRequest {
    return { chatId: isSet(object.chatId) ? Wid.fromJSON(object.chatId) : undefined };
  },

  toJSON(message: GetGroupMembershipRequestsRequest): unknown {
    const obj: any = {};
    if (message.chatId !== undefined) {
      obj.chatId = Wid.toJSON(message.chatId);
    }
    return obj;
  },

  create(base?: DeepPartial<GetGroupMembershipRequestsRequest>): GetGroupMembershipRequestsRequest {
    return GetGroupMembershipRequestsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetGroupMembershipRequestsRequest>): GetGroupMembershipRequestsRequest {
    const message = createBaseGetGroupMembershipRequestsRequest();
    message.chatId = (object.chatId !== undefined && object.chatId !== null)
      ? Wid.fromPartial(object.chatId)
      : undefined;
    return message;
  },
};

function createBaseGetGroupMembershipRequestsResponse(): GetGroupMembershipRequestsResponse {
  return { requests: [] };
}

export const GetGroupMembershipRequestsResponse = {
  encode(message: GetGroupMembershipRequestsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.requests) {
      GetGroupMembershipRequestsResponse_GroupMembershipRequest.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetGroupMembershipRequestsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetGroupMembershipRequestsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.requests.push(
            GetGroupMembershipRequestsResponse_GroupMembershipRequest.decode(reader, reader.uint32()),
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetGroupMembershipRequestsResponse {
    return {
      requests: globalThis.Array.isArray(object?.requests)
        ? object.requests.map((e: any) => GetGroupMembershipRequestsResponse_GroupMembershipRequest.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetGroupMembershipRequestsResponse): unknown {
    const obj: any = {};
    if (message.requests?.length) {
      obj.requests = message.requests.map((e) => GetGroupMembershipRequestsResponse_GroupMembershipRequest.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<GetGroupMembershipRequestsResponse>): GetGroupMembershipRequestsResponse {
    return GetGroupMembershipRequestsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetGroupMembershipRequestsResponse>): GetGroupMembershipRequestsResponse {
    const message = createBaseGetGroupMembershipRequestsResponse();
    message.requests =
      object.requests?.map((e) => GetGroupMembershipRequestsResponse_GroupMembershipRequest.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetGroupMembershipRequestsResponse_GroupMembershipRequest(): GetGroupMembershipRequestsResponse_GroupMembershipRequest {
  return { id: undefined, addedBy: undefined, parentGroupId: undefined, requestMethod: "", t: undefined };
}

export const GetGroupMembershipRequestsResponse_GroupMembershipRequest = {
  encode(
    message: GetGroupMembershipRequestsResponse_GroupMembershipRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== undefined) {
      Wid.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.addedBy !== undefined) {
      Wid.encode(message.addedBy, writer.uint32(18).fork()).ldelim();
    }
    if (message.parentGroupId !== undefined) {
      Wid.encode(message.parentGroupId, writer.uint32(26).fork()).ldelim();
    }
    if (message.requestMethod !== "") {
      writer.uint32(34).string(message.requestMethod);
    }
    if (message.t !== undefined) {
      Timestamp.encode(toTimestamp(message.t), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetGroupMembershipRequestsResponse_GroupMembershipRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetGroupMembershipRequestsResponse_GroupMembershipRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = Wid.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.addedBy = Wid.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.parentGroupId = Wid.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.requestMethod = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.t = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetGroupMembershipRequestsResponse_GroupMembershipRequest {
    return {
      id: isSet(object.id) ? Wid.fromJSON(object.id) : undefined,
      addedBy: isSet(object.addedBy) ? Wid.fromJSON(object.addedBy) : undefined,
      parentGroupId: isSet(object.parentGroupId) ? Wid.fromJSON(object.parentGroupId) : undefined,
      requestMethod: isSet(object.requestMethod) ? globalThis.String(object.requestMethod) : "",
      t: isSet(object.t) ? fromJsonTimestamp(object.t) : undefined,
    };
  },

  toJSON(message: GetGroupMembershipRequestsResponse_GroupMembershipRequest): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = Wid.toJSON(message.id);
    }
    if (message.addedBy !== undefined) {
      obj.addedBy = Wid.toJSON(message.addedBy);
    }
    if (message.parentGroupId !== undefined) {
      obj.parentGroupId = Wid.toJSON(message.parentGroupId);
    }
    if (message.requestMethod !== "") {
      obj.requestMethod = message.requestMethod;
    }
    if (message.t !== undefined) {
      obj.t = message.t.toISOString();
    }
    return obj;
  },

  create(
    base?: DeepPartial<GetGroupMembershipRequestsResponse_GroupMembershipRequest>,
  ): GetGroupMembershipRequestsResponse_GroupMembershipRequest {
    return GetGroupMembershipRequestsResponse_GroupMembershipRequest.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<GetGroupMembershipRequestsResponse_GroupMembershipRequest>,
  ): GetGroupMembershipRequestsResponse_GroupMembershipRequest {
    const message = createBaseGetGroupMembershipRequestsResponse_GroupMembershipRequest();
    message.id = (object.id !== undefined && object.id !== null) ? Wid.fromPartial(object.id) : undefined;
    message.addedBy = (object.addedBy !== undefined && object.addedBy !== null)
      ? Wid.fromPartial(object.addedBy)
      : undefined;
    message.parentGroupId = (object.parentGroupId !== undefined && object.parentGroupId !== null)
      ? Wid.fromPartial(object.parentGroupId)
      : undefined;
    message.requestMethod = object.requestMethod ?? "";
    message.t = object.t ?? undefined;
    return message;
  },
};

function createBaseApproveGroupMembershipRequestsRequest(): ApproveGroupMembershipRequestsRequest {
  return { chatId: undefined, options: undefined };
}

export const ApproveGroupMembershipRequestsRequest = {
  encode(message: ApproveGroupMembershipRequestsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatId !== undefined) {
      Wid.encode(message.chatId, writer.uint32(10).fork()).ldelim();
    }
    if (message.options !== undefined) {
      MembershipRequestActionOptions.encode(message.options, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ApproveGroupMembershipRequestsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApproveGroupMembershipRequestsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.chatId = Wid.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.options = MembershipRequestActionOptions.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ApproveGroupMembershipRequestsRequest {
    return {
      chatId: isSet(object.chatId) ? Wid.fromJSON(object.chatId) : undefined,
      options: isSet(object.options) ? MembershipRequestActionOptions.fromJSON(object.options) : undefined,
    };
  },

  toJSON(message: ApproveGroupMembershipRequestsRequest): unknown {
    const obj: any = {};
    if (message.chatId !== undefined) {
      obj.chatId = Wid.toJSON(message.chatId);
    }
    if (message.options !== undefined) {
      obj.options = MembershipRequestActionOptions.toJSON(message.options);
    }
    return obj;
  },

  create(base?: DeepPartial<ApproveGroupMembershipRequestsRequest>): ApproveGroupMembershipRequestsRequest {
    return ApproveGroupMembershipRequestsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ApproveGroupMembershipRequestsRequest>): ApproveGroupMembershipRequestsRequest {
    const message = createBaseApproveGroupMembershipRequestsRequest();
    message.chatId = (object.chatId !== undefined && object.chatId !== null)
      ? Wid.fromPartial(object.chatId)
      : undefined;
    message.options = (object.options !== undefined && object.options !== null)
      ? MembershipRequestActionOptions.fromPartial(object.options)
      : undefined;
    return message;
  },
};

function createBaseApproveGroupMembershipRequestsResponse(): ApproveGroupMembershipRequestsResponse {
  return { results: [] };
}

export const ApproveGroupMembershipRequestsResponse = {
  encode(message: ApproveGroupMembershipRequestsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.results) {
      MembershipRequestActionResult.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ApproveGroupMembershipRequestsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApproveGroupMembershipRequestsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.results.push(MembershipRequestActionResult.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ApproveGroupMembershipRequestsResponse {
    return {
      results: globalThis.Array.isArray(object?.results)
        ? object.results.map((e: any) => MembershipRequestActionResult.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ApproveGroupMembershipRequestsResponse): unknown {
    const obj: any = {};
    if (message.results?.length) {
      obj.results = message.results.map((e) => MembershipRequestActionResult.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<ApproveGroupMembershipRequestsResponse>): ApproveGroupMembershipRequestsResponse {
    return ApproveGroupMembershipRequestsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ApproveGroupMembershipRequestsResponse>): ApproveGroupMembershipRequestsResponse {
    const message = createBaseApproveGroupMembershipRequestsResponse();
    message.results = object.results?.map((e) => MembershipRequestActionResult.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRejectGroupMembershipRequestsRequest(): RejectGroupMembershipRequestsRequest {
  return { chatId: undefined, options: undefined };
}

export const RejectGroupMembershipRequestsRequest = {
  encode(message: RejectGroupMembershipRequestsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatId !== undefined) {
      Wid.encode(message.chatId, writer.uint32(10).fork()).ldelim();
    }
    if (message.options !== undefined) {
      MembershipRequestActionOptions.encode(message.options, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RejectGroupMembershipRequestsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRejectGroupMembershipRequestsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.chatId = Wid.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.options = MembershipRequestActionOptions.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RejectGroupMembershipRequestsRequest {
    return {
      chatId: isSet(object.chatId) ? Wid.fromJSON(object.chatId) : undefined,
      options: isSet(object.options) ? MembershipRequestActionOptions.fromJSON(object.options) : undefined,
    };
  },

  toJSON(message: RejectGroupMembershipRequestsRequest): unknown {
    const obj: any = {};
    if (message.chatId !== undefined) {
      obj.chatId = Wid.toJSON(message.chatId);
    }
    if (message.options !== undefined) {
      obj.options = MembershipRequestActionOptions.toJSON(message.options);
    }
    return obj;
  },

  create(base?: DeepPartial<RejectGroupMembershipRequestsRequest>): RejectGroupMembershipRequestsRequest {
    return RejectGroupMembershipRequestsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RejectGroupMembershipRequestsRequest>): RejectGroupMembershipRequestsRequest {
    const message = createBaseRejectGroupMembershipRequestsRequest();
    message.chatId = (object.chatId !== undefined && object.chatId !== null)
      ? Wid.fromPartial(object.chatId)
      : undefined;
    message.options = (object.options !== undefined && object.options !== null)
      ? MembershipRequestActionOptions.fromPartial(object.options)
      : undefined;
    return message;
  },
};

function createBaseRejectGroupMembershipRequestsResponse(): RejectGroupMembershipRequestsResponse {
  return { results: [] };
}

export const RejectGroupMembershipRequestsResponse = {
  encode(message: RejectGroupMembershipRequestsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.results) {
      MembershipRequestActionResult.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RejectGroupMembershipRequestsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRejectGroupMembershipRequestsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.results.push(MembershipRequestActionResult.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RejectGroupMembershipRequestsResponse {
    return {
      results: globalThis.Array.isArray(object?.results)
        ? object.results.map((e: any) => MembershipRequestActionResult.fromJSON(e))
        : [],
    };
  },

  toJSON(message: RejectGroupMembershipRequestsResponse): unknown {
    const obj: any = {};
    if (message.results?.length) {
      obj.results = message.results.map((e) => MembershipRequestActionResult.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<RejectGroupMembershipRequestsResponse>): RejectGroupMembershipRequestsResponse {
    return RejectGroupMembershipRequestsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RejectGroupMembershipRequestsResponse>): RejectGroupMembershipRequestsResponse {
    const message = createBaseRejectGroupMembershipRequestsResponse();
    message.results = object.results?.map((e) => MembershipRequestActionResult.fromPartial(e)) || [];
    return message;
  },
};

export type WhatsappDefinition = typeof WhatsappDefinition;
export const WhatsappDefinition = {
  name: "Whatsapp",
  fullName: "wwebjs.Whatsapp",
  methods: {
    getInfo: {
      name: "GetInfo",
      requestType: Empty,
      requestStream: false,
      responseType: GetInfoResponse,
      responseStream: false,
      options: {},
    },
    acceptInvite: {
      name: "AcceptInvite",
      requestType: AcceptInviteRequest,
      requestStream: false,
      responseType: AcceptInviteResponse,
      responseStream: false,
      options: {},
    },
    acceptGroupV4Invite: {
      name: "AcceptGroupV4Invite",
      requestType: Empty,
      requestStream: false,
      responseType: AcceptGroupV4InviteResponse,
      responseStream: false,
      options: {},
    },
    getInviteInfo: {
      name: "GetInviteInfo",
      requestType: GetInviteInfoRequest,
      requestStream: false,
      responseType: GetInviteInfoResponse,
      responseStream: false,
      options: {},
    },
    archiveChat: {
      name: "ArchiveChat",
      requestType: ArchiveChatRequest,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {},
    },
    pinChat: {
      name: "PinChat",
      requestType: PinChatRequest,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {},
    },
    unpinChat: {
      name: "UnpinChat",
      requestType: UnpinChatRequest,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {},
    },
    createGroup: {
      name: "CreateGroup",
      requestType: CreateGroupRequest,
      requestStream: false,
      responseType: CreateGroupResponse,
      responseStream: false,
      options: {},
    },
    getBlockedContacts: {
      name: "GetBlockedContacts",
      requestType: Empty,
      requestStream: false,
      responseType: GetBlockedContactsResponse,
      responseStream: false,
      options: {},
    },
    getChatById: {
      name: "GetChatById",
      requestType: GetChatByIdRequest,
      requestStream: false,
      responseType: GetChatByIdResponse,
      responseStream: false,
      options: {},
    },
    getChats: {
      name: "GetChats",
      requestType: Empty,
      requestStream: false,
      responseType: GetChatsResponse,
      responseStream: false,
      options: {},
    },
    getContactById: {
      name: "GetContactById",
      requestType: GetContactByIdRequest,
      requestStream: false,
      responseType: GetContactByIdResponse,
      responseStream: false,
      options: {},
    },
    getMessageById: {
      name: "GetMessageById",
      requestType: GetMessageByIdRequest,
      requestStream: false,
      responseType: GetMessageByIdResponse,
      responseStream: false,
      options: {},
    },
    getContacts: {
      name: "GetContacts",
      requestType: Empty,
      requestStream: false,
      responseType: GetContactsResponse,
      responseStream: false,
      options: {},
    },
    getCountryCode: {
      name: "GetCountryCode",
      requestType: GetCountryCodeRequest,
      requestStream: false,
      responseType: GetCountryCodeResponse,
      responseStream: false,
      options: {},
    },
    getFormattedNumber: {
      name: "GetFormattedNumber",
      requestType: GetFormattedNumberRequest,
      requestStream: false,
      responseType: GetFormattedNumberResponse,
      responseStream: false,
      options: {},
    },
    getLabels: {
      name: "GetLabels",
      requestType: Empty,
      requestStream: false,
      responseType: GetLabelsResponse,
      responseStream: false,
      options: {},
    },
    addOrRemoveLabels: {
      name: "AddOrRemoveLabels",
      requestType: AddOrRemoveLabelsRequest,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {},
    },
    getLabelById: {
      name: "GetLabelById",
      requestType: GetLabelByIdRequest,
      requestStream: false,
      responseType: GetLabelByIdResponse,
      responseStream: false,
      options: {},
    },
    getChatLabels: {
      name: "GetChatLabels",
      requestType: GetChatLabelsRequest,
      requestStream: false,
      responseType: GetChatLabelsResponse,
      responseStream: false,
      options: {},
    },
    getChatsByLabelId: {
      name: "GetChatsByLabelId",
      requestType: GetChatsByLabelIdRequest,
      requestStream: false,
      responseType: GetChatsByLabelIdResponse,
      responseStream: false,
      options: {},
    },
    getProfilePicUrl: {
      name: "GetProfilePicUrl",
      requestType: GetProfilePicUrlRequest,
      requestStream: false,
      responseType: GetProfilePicUrlResponse,
      responseStream: false,
      options: {},
    },
    getCommonGroups: {
      name: "GetCommonGroups",
      requestType: GetCommonGroupsRequest,
      requestStream: false,
      responseType: GetCommonGroupsResponse,
      responseStream: false,
      options: {},
    },
    isRegisteredUser: {
      name: "IsRegisteredUser",
      requestType: IsRegisteredUserRequest,
      requestStream: false,
      responseType: IsRegisteredUserResponse,
      responseStream: false,
      options: {},
    },
    muteChat: {
      name: "MuteChat",
      requestType: MuteChatRequest,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {},
    },
    sendMessage: {
      name: "SendMessage",
      requestType: SendMessageRequest,
      requestStream: false,
      responseType: SendMessageResponse,
      responseStream: false,
      options: {},
    },
    searchMessages: {
      name: "SearchMessages",
      requestType: SearchMessagesRequest,
      requestStream: false,
      responseType: SearchMessagesResponse,
      responseStream: false,
      options: {},
    },
    sendPresenceAvailable: {
      name: "SendPresenceAvailable",
      requestType: Empty,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {},
    },
    sendPresenceUnavailable: {
      name: "SendPresenceUnavailable",
      requestType: Empty,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {},
    },
    sendSeen: {
      name: "SendSeen",
      requestType: SendSeenRequest,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {},
    },
    markChatUnread: {
      name: "MarkChatUnread",
      requestType: MarkChatUnreadRequest,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {},
    },
    setStatus: {
      name: "SetStatus",
      requestType: SetStatusRequest,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {},
    },
    setDisplayName: {
      name: "SetDisplayName",
      requestType: SetDisplayNameRequest,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {},
    },
    unarchiveChat: {
      name: "UnarchiveChat",
      requestType: UnarchiveChatRequest,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {},
    },
    unmuteChat: {
      name: "UnmuteChat",
      requestType: UnmuteChatRequest,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {},
    },
    setProfilePicture: {
      name: "SetProfilePicture",
      requestType: SetProfilePictureRequest,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {},
    },
    deleteProfilePicture: {
      name: "DeleteProfilePicture",
      requestType: Empty,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {},
    },
    getGroupMembershipRequests: {
      name: "GetGroupMembershipRequests",
      requestType: GetGroupMembershipRequestsRequest,
      requestStream: false,
      responseType: GetGroupMembershipRequestsResponse,
      responseStream: false,
      options: {},
    },
    approveGroupMembershipRequests: {
      name: "ApproveGroupMembershipRequests",
      requestType: ApproveGroupMembershipRequestsRequest,
      requestStream: false,
      responseType: ApproveGroupMembershipRequestsResponse,
      responseStream: false,
      options: {},
    },
    rejectGroupMembershipRequests: {
      name: "RejectGroupMembershipRequests",
      requestType: RejectGroupMembershipRequestsRequest,
      requestStream: false,
      responseType: RejectGroupMembershipRequestsResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface WhatsappServiceImplementation<CallContextExt = {}> {
  getInfo(request: Empty, context: CallContext & CallContextExt): Promise<DeepPartial<GetInfoResponse>>;
  acceptInvite(
    request: AcceptInviteRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<AcceptInviteResponse>>;
  acceptGroupV4Invite(
    request: Empty,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<AcceptGroupV4InviteResponse>>;
  getInviteInfo(
    request: GetInviteInfoRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetInviteInfoResponse>>;
  archiveChat(request: ArchiveChatRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
  pinChat(request: PinChatRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
  unpinChat(request: UnpinChatRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
  createGroup(
    request: CreateGroupRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<CreateGroupResponse>>;
  getBlockedContacts(
    request: Empty,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetBlockedContactsResponse>>;
  getChatById(
    request: GetChatByIdRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetChatByIdResponse>>;
  getChats(request: Empty, context: CallContext & CallContextExt): Promise<DeepPartial<GetChatsResponse>>;
  getContactById(
    request: GetContactByIdRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetContactByIdResponse>>;
  getMessageById(
    request: GetMessageByIdRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetMessageByIdResponse>>;
  getContacts(request: Empty, context: CallContext & CallContextExt): Promise<DeepPartial<GetContactsResponse>>;
  getCountryCode(
    request: GetCountryCodeRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetCountryCodeResponse>>;
  getFormattedNumber(
    request: GetFormattedNumberRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetFormattedNumberResponse>>;
  getLabels(request: Empty, context: CallContext & CallContextExt): Promise<DeepPartial<GetLabelsResponse>>;
  addOrRemoveLabels(
    request: AddOrRemoveLabelsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<Empty>>;
  getLabelById(
    request: GetLabelByIdRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetLabelByIdResponse>>;
  getChatLabels(
    request: GetChatLabelsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetChatLabelsResponse>>;
  getChatsByLabelId(
    request: GetChatsByLabelIdRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetChatsByLabelIdResponse>>;
  getProfilePicUrl(
    request: GetProfilePicUrlRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetProfilePicUrlResponse>>;
  getCommonGroups(
    request: GetCommonGroupsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetCommonGroupsResponse>>;
  isRegisteredUser(
    request: IsRegisteredUserRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<IsRegisteredUserResponse>>;
  muteChat(request: MuteChatRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
  sendMessage(
    request: SendMessageRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<SendMessageResponse>>;
  searchMessages(
    request: SearchMessagesRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<SearchMessagesResponse>>;
  sendPresenceAvailable(request: Empty, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
  sendPresenceUnavailable(request: Empty, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
  sendSeen(request: SendSeenRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
  markChatUnread(request: MarkChatUnreadRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
  setStatus(request: SetStatusRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
  setDisplayName(request: SetDisplayNameRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
  unarchiveChat(request: UnarchiveChatRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
  unmuteChat(request: UnmuteChatRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
  setProfilePicture(
    request: SetProfilePictureRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<Empty>>;
  deleteProfilePicture(request: Empty, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
  getGroupMembershipRequests(
    request: GetGroupMembershipRequestsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetGroupMembershipRequestsResponse>>;
  approveGroupMembershipRequests(
    request: ApproveGroupMembershipRequestsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ApproveGroupMembershipRequestsResponse>>;
  rejectGroupMembershipRequests(
    request: RejectGroupMembershipRequestsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<RejectGroupMembershipRequestsResponse>>;
}

export interface WhatsappClient<CallOptionsExt = {}> {
  getInfo(request: DeepPartial<Empty>, options?: CallOptions & CallOptionsExt): Promise<GetInfoResponse>;
  acceptInvite(
    request: DeepPartial<AcceptInviteRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<AcceptInviteResponse>;
  acceptGroupV4Invite(
    request: DeepPartial<Empty>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<AcceptGroupV4InviteResponse>;
  getInviteInfo(
    request: DeepPartial<GetInviteInfoRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetInviteInfoResponse>;
  archiveChat(request: DeepPartial<ArchiveChatRequest>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
  pinChat(request: DeepPartial<PinChatRequest>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
  unpinChat(request: DeepPartial<UnpinChatRequest>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
  createGroup(
    request: DeepPartial<CreateGroupRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<CreateGroupResponse>;
  getBlockedContacts(
    request: DeepPartial<Empty>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetBlockedContactsResponse>;
  getChatById(
    request: DeepPartial<GetChatByIdRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetChatByIdResponse>;
  getChats(request: DeepPartial<Empty>, options?: CallOptions & CallOptionsExt): Promise<GetChatsResponse>;
  getContactById(
    request: DeepPartial<GetContactByIdRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetContactByIdResponse>;
  getMessageById(
    request: DeepPartial<GetMessageByIdRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetMessageByIdResponse>;
  getContacts(request: DeepPartial<Empty>, options?: CallOptions & CallOptionsExt): Promise<GetContactsResponse>;
  getCountryCode(
    request: DeepPartial<GetCountryCodeRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetCountryCodeResponse>;
  getFormattedNumber(
    request: DeepPartial<GetFormattedNumberRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetFormattedNumberResponse>;
  getLabels(request: DeepPartial<Empty>, options?: CallOptions & CallOptionsExt): Promise<GetLabelsResponse>;
  addOrRemoveLabels(
    request: DeepPartial<AddOrRemoveLabelsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<Empty>;
  getLabelById(
    request: DeepPartial<GetLabelByIdRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetLabelByIdResponse>;
  getChatLabels(
    request: DeepPartial<GetChatLabelsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetChatLabelsResponse>;
  getChatsByLabelId(
    request: DeepPartial<GetChatsByLabelIdRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetChatsByLabelIdResponse>;
  getProfilePicUrl(
    request: DeepPartial<GetProfilePicUrlRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetProfilePicUrlResponse>;
  getCommonGroups(
    request: DeepPartial<GetCommonGroupsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetCommonGroupsResponse>;
  isRegisteredUser(
    request: DeepPartial<IsRegisteredUserRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<IsRegisteredUserResponse>;
  muteChat(request: DeepPartial<MuteChatRequest>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
  sendMessage(
    request: DeepPartial<SendMessageRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<SendMessageResponse>;
  searchMessages(
    request: DeepPartial<SearchMessagesRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<SearchMessagesResponse>;
  sendPresenceAvailable(request: DeepPartial<Empty>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
  sendPresenceUnavailable(request: DeepPartial<Empty>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
  sendSeen(request: DeepPartial<SendSeenRequest>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
  markChatUnread(request: DeepPartial<MarkChatUnreadRequest>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
  setStatus(request: DeepPartial<SetStatusRequest>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
  setDisplayName(request: DeepPartial<SetDisplayNameRequest>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
  unarchiveChat(request: DeepPartial<UnarchiveChatRequest>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
  unmuteChat(request: DeepPartial<UnmuteChatRequest>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
  setProfilePicture(
    request: DeepPartial<SetProfilePictureRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<Empty>;
  deleteProfilePicture(request: DeepPartial<Empty>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
  getGroupMembershipRequests(
    request: DeepPartial<GetGroupMembershipRequestsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetGroupMembershipRequestsResponse>;
  approveGroupMembershipRequests(
    request: DeepPartial<ApproveGroupMembershipRequestsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ApproveGroupMembershipRequestsResponse>;
  rejectGroupMembershipRequests(
    request: DeepPartial<RejectGroupMembershipRequestsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<RejectGroupMembershipRequestsResponse>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function toTimestamp(date: Date): Timestamp {
  const seconds = Math.trunc(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
