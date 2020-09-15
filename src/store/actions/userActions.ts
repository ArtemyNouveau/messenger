import { Dispatch } from 'redux';

import axiosInstance from "../../axiosInstance";
import {LoginTypes} from "../actionTypes/userActionTypes";
import {ChatTypes} from "../actionTypes/chatsActionTypes";

export const login = (email:string, password:string) => {
    return (dispatch:Dispatch) => {
        axiosInstance.post('/auth/login', {
            email: email,
            password: password
        }).then(({data, status}) => {
            if (status !== 200){
                dispatch({type: LoginTypes.LOGIN_FAIL})
                return
            }
            dispatch({
                type: LoginTypes.LOGIN,
                id: data.id,
                chatIds: data.chatIds,
                status: data.status,
                userName: data.userName,
            })
            localStorage.setItem('authToken', data.token)
        }).catch(() => {
            dispatch({type: LoginTypes.LOGIN_FAIL})
        })
    }
}

export const fetchUser = () => {
    return (dispatch:Dispatch) => {
        axiosInstance.get('/auth/fetchUser').then(({data, status}) => {
            if (status !== 200){
                dispatch({type: LoginTypes.LOGIN_FAIL})
                return
            }
            dispatch({
                type: LoginTypes.LOGIN,
                id: data.id,
                chatIds: data.chatIds,
                status: data.status,
                userName: data.userName,
            })
            localStorage.setItem('authToken', data.token)
        }).catch(() => {
            dispatch({type: LoginTypes.LOGIN_FAIL})
        })
    }
}

export const signUp = (email: string, name: string, password: string) => {
    return (dispatch:Dispatch) => {
        axiosInstance.put('/auth/signup', {
            email: email,
            password: password,
            name: name
        }).then(() => {
            login(email, password)
        }).catch(() => {
            dispatch({type: LoginTypes.LOGIN_FAIL})
        })
    }
}

export const changeUserName = (name: string) => {
    return (dispatch: Dispatch) => {
        axiosInstance.post('/auth/updateUserName', {
            name: name,
        }).then(({data, status}) => {
            if (status !== 200) {
                dispatch({type: LoginTypes.CHANGE_USER_NAME_FAIL})
                return
            }
            dispatch({
                type: LoginTypes.CHANGE_USER_NAME_SUCCESS,
                name: data.name
            })
        }).catch(() => {
            dispatch({type: LoginTypes.CHANGE_USER_NAME_FAIL})
        })
    }
}

export const changeUserStatus = (status: string) => {
    return (dispatch: Dispatch) => {
        axiosInstance.post('/auth/updateUserStatus', {
            status: status,
        }).then(({data, status}) => {
            if (status !== 200) {
                dispatch({type: LoginTypes.CHANGE_STATUS_FAIL,})
                return
            }
            dispatch({
                type: LoginTypes.CHANGE_STATUS_SUCCESS,
                status: data.status
            })
        }).catch(() => {
            dispatch({type: LoginTypes.CHANGE_STATUS_FAIL})
        })
    }
}

export const logout = () => {
    return {type: LoginTypes.LOGOUT}
}
