import {Message, Chat, UserChats} from "../reducers/chats";

export enum ChatTypes {
    FETCH_CHAT_START = "FETCH_CHAT_START",
    FETCH_CHAT_SUCCESS = "FETCH_CHAT_SUCCESS",
    FETCH_CHAT_FAIL = "FETCH_CHAT_FAIL",

    ADD_CHAT_START = "ADD_CHAT_START",
    ADD_CHAT_SUCCESS = "ADD_CHAT_SUCCESS",
    ADD_CHAT_FAIL = "ADD_CHAT_FAIL",

    FETCH_USER_CHATS_START = "FETCH_USER_CHATS_START",
    FETCH_USER_CHATS_SUCCESS = "FETCH_USER_CHATS_SUCCESS",
    FETCH_USER_CHATS_FAIL = "FETCH_USER_CHATS_FAIL",

    FETCH_USER_MESSAGES_START = "FETCH_USER_MESSAGES_START",
    FETCH_USER_MESSAGES_SUCCESS = "FETCH_USER_MESSAGES_SUCCESS",
    FETCH_USER_MESSAGES_FAIL = "FETCH_USER_MESSAGES_FAIL",

    SEND_USER_MESSAGES_START = "SEND_USER_MESSAGES_START",
    SEND_USER_MESSAGES_SUCCESS = "SEND_USER_MESSAGES_SUCCESS",
    SEND_USER_MESSAGES_FAIL = "SEND_USER_MESSAGES_FAIL",

    RECEIVE_MESSAGE = "RECEIVE_MESSAGE",

    SET_CONNECTED_USERS = "SET_CONNECTED_USERS",

    CHANGE_CURRENT_CHAT = "CHANGE_CURRENT_CHAT",
}

interface BaseChatAction {
    type: ChatTypes,
}

interface SetActiveUsers extends BaseChatAction {
    type: ChatTypes.SET_CONNECTED_USERS,
    chatId: number,
    connectedUsers: number
}

interface ReceiveMessage extends BaseChatAction {
    type: ChatTypes.RECEIVE_MESSAGE,
    message: Message,
    chatId: number
}

interface FetchUserChatsSuccess extends BaseChatAction {
    type: ChatTypes.FETCH_USER_CHATS_SUCCESS,
    userChats: UserChats
}

interface FetchChatsSuccess extends BaseChatAction {
    type: ChatTypes.FETCH_CHAT_SUCCESS,
    chat: Chat,
    chatId: number
}

interface AddChatSuccess extends BaseChatAction {
    type: ChatTypes.ADD_CHAT_SUCCESS,
    chat: Chat
    chatId: number
}

interface ChangeChat extends BaseChatAction {
    type: ChatTypes.CHANGE_CURRENT_CHAT,
    chatId: number
}

interface FetchUserMessagesSuccess extends BaseChatAction {
    type: ChatTypes.FETCH_USER_MESSAGES_SUCCESS,
    messages: ReadonlyArray<Message>,
    chatId: number
}

interface SendUserMessageSuccess extends BaseChatAction {
    type: ChatTypes.SEND_USER_MESSAGES_SUCCESS,
    message: Message,
    chatId: number
}

export type ChatsActionTypes = AddChatSuccess | ChangeChat | FetchUserChatsSuccess | FetchUserMessagesSuccess | SendUserMessageSuccess | FetchChatsSuccess | ReceiveMessage | SetActiveUsers
