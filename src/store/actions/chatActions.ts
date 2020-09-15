import axiosInstance from "../../axiosInstance";
import {Dispatch} from 'redux';
import {ChatTypes} from "../actionTypes/chatsActionTypes";
import {LoginTypes} from "../actionTypes/userActionTypes";

export const receiveMessage = (chatId: string, message) => {
    return {
        type: ChatTypes.RECEIVE_MESSAGE,
        message: message,
        chatId: chatId
    }
}

export const setConnectedUsers = (chatId: string, users) => {
    return {
        type: ChatTypes.SET_CONNECTED_USERS,
        chatId: chatId,
        connectedUsers: users
    }
}

export const sendMessage = (chatId: string, text: string, imageUrl: string | null) => {
    return (dispatch: Dispatch) => {
        dispatch({type: ChatTypes.SEND_USER_MESSAGES_START})
        axiosInstance.put('/message/send', {
            chatId: chatId,
            message: text
        }).then(({data, status}) => {
            if (status !== 201) {
                dispatch({type: ChatTypes.SEND_USER_MESSAGES_FAIL})
                return
            }
            dispatch({
                type: ChatTypes.SEND_USER_MESSAGES_SUCCESS,
                chatId: chatId,
                message: data.message
            })
        }).catch(() => {
            dispatch({type: ChatTypes.SEND_USER_MESSAGES_FAIL})
        })
    }
}


export const fetchMessages = (chatId: string) => {
    return (dispatch: Dispatch) => {
        dispatch({type: ChatTypes.SEND_USER_MESSAGES_START})
        axiosInstance.get(`/message/${chatId}`).then(({data, status}) => {
            if (status !== 201) {
                dispatch({type: ChatTypes.FETCH_USER_MESSAGES_FAIL})
                return
            }
            dispatch({
                type: ChatTypes.FETCH_USER_MESSAGES_SUCCESS,
                chatId: chatId,
                messages: data.messages
            })
        }).catch(() => {
            dispatch({type: ChatTypes.FETCH_USER_MESSAGES_FAIL})
        })
    }
}

export const fetchUserChats = () => {
    return (dispatch: Dispatch) => {
        dispatch({type: ChatTypes.FETCH_USER_CHATS_START})
        axiosInstance.get('/chat/userChats').then(({data, status}) => {
            if (status !== 200) {
                dispatch({type: ChatTypes.FETCH_USER_MESSAGES_FAIL})
                return
            }
            dispatch({
                type: ChatTypes.FETCH_USER_CHATS_SUCCESS,
                userChats: data.userChats,
                chatId: data.chatId
            })
        }).catch(() => {
            dispatch({type: ChatTypes.FETCH_USER_CHATS_FAIL})
        })
    }
}

export const fetchChat = (chatId: string) => {
    return (dispatch: Dispatch) => {
        dispatch({type: ChatTypes.FETCH_CHAT_START})
        axiosInstance.get(`/chat/${chatId}`).then(({data, status}) => {
            if (status !== 200) {
                dispatch({type: ChatTypes.FETCH_CHAT_FAIL})
                return
            }

            dispatch({
                type: ChatTypes.FETCH_CHAT_SUCCESS,
                chat: {
                    chatName: data.title,
                    messages: data.messages
                },
                chatId: chatId
            })
        }).catch(() => {
            dispatch({type: ChatTypes.FETCH_CHAT_FAIL})
        })
    }
}

export const changeChat = (chatId: string) => {
    return {
        type: ChatTypes.CHANGE_CURRENT_CHAT,
        chatId: chatId
    }
}

export const addChat = (title: string) => {
    return (dispatch: Dispatch) => {
        dispatch({type: ChatTypes.ADD_CHAT_START})
        axiosInstance.post('/chat/create', {
            title: title
        }).then(({data, status}) => {
            if (status !== 200) {
                dispatch({type: ChatTypes.ADD_CHAT_FAIL})
                return
            }

            dispatch({
                type: ChatTypes.ADD_CHAT_SUCCESS,
                chat: {
                    chatName: data.title,
                    messages: data.messages
                },
                chatId: data.chatId
            })
        }).catch(() => {
            dispatch({type: ChatTypes.ADD_CHAT_FAIL})
        })
    }
}
