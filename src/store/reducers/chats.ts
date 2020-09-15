import {ChatsActionTypes, ChatTypes} from "../actionTypes/chatsActionTypes";
import {User} from "./user";

export interface Message {
    text: string,
    creator: string,
    date: Date,
    img: string | null,
    _id: string
}

export interface Chat {
    chatName: string,
    messages: ReadonlyArray<Message>,
    connectedUsers: ReadonlyArray<User>
}

export interface Chats {
    allIds: ReadonlyArray<string>
    byId: {
        [id: number]: Chat
    }
}

export interface UserChat {
    chatId: string,
    chatName: string,
    icon: string | null
}

export interface UserChats {
    allIds: ReadonlyArray<number>
    byId: {
        [id: number]: UserChat
    }
}

interface State {
    currentChat: number,
    chats: Chats,
    userChats: UserChats,
}

const initialState: State = {
    currentChat: 0,
    chats: {
        allIds: [],
        byId: {},
    },
    userChats: {
        allIds: [],
        byId: {}
    },
}
export default (state = initialState, action: ChatsActionTypes) => {
    switch (action.type) {
        case ChatTypes.SET_CONNECTED_USERS:
            return {
                ...state,
                chats: {
                    ...state.chats,
                    byId: {
                        ...state.chats.byId,
                        [action.chatId]: {
                            ...state.chats.byId[action.chatId],
                            connectedUsers: action.connectedUsers
                        }
                    }
                },
            }
        case ChatTypes.FETCH_CHAT_SUCCESS:
            return {
                ...state,
                chats: {
                    ...state.chats,
                    allIds: [...state.chats.allIds, action.chatId],
                    byId: {
                        ...state.chats.byId,
                        [action.chatId]: {
                            ...state.chats.byId[action.chatId],
                            ...action.chat
                        }
                    }
                },
            }
        case ChatTypes.ADD_CHAT_SUCCESS:
            return {
                ...state,
                chats: {
                    ...state.chats,
                    allIds: [...state.chats.allIds, action.chatId],
                    byId: {
                        ...state.chats.byId,
                        [action.chatId]: {
                            ...state.chats.byId[action.chatId],
                            ...action.chat
                        }
                    }
                },
                userChats: {
                    ...state.chats,
                    allIds: [...state.userChats.allIds, action.chatId],
                    byId: {
                        ...state.userChats.byId,
                        [action.chatId]: {
                            chatName: action.chat.chatName,
                            icon: null
                        }
                    }
                }
            }
        case ChatTypes.FETCH_USER_CHATS_SUCCESS:
            return {
                ...state,
                userChats: action.userChats
            }
        case ChatTypes.CHANGE_CURRENT_CHAT:
            return {
                ...state,
                currentChat: action.chatId
            }
        case ChatTypes.FETCH_USER_MESSAGES_SUCCESS:
            console.log(state.chats)
            return {
                ...state,
                chats: {
                    ...state.chats,
                    byId: {
                        ...state.chats.byId,
                        [action.chatId]: {
                            ...state.chats.byId[action.chatId],
                            messages: action.messages
                        }
                    }
                }
            }
        case ChatTypes.RECEIVE_MESSAGE:
            return {
                ...state,
                chats: {
                    ...state.chats,
                    byId: {
                        ...state.chats.byId,
                        [action.chatId]: {
                            messages: [...state.chats.byId[action.chatId].messages, action.message].filter((message, index, self) => (
                                    index === self.findIndex((messageToCompare) => (
                                        messageToCompare._id === message._id
                                    ))
                                )
                            ),
                        }
                    }
                }
            }
        default:
            return state
    }
}
