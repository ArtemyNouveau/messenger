import {LoginTypes, LoginActionTypes} from "../actionTypes/userActionTypes";

export interface User {
    id: number,
    chatIds: ReadonlyArray<number>,
    status: string,
    userName: string,
}

interface State {
    isAuth: boolean,
    token: string,
    user: User
}

const initialState: State = {
    isAuth: false,
    token: "",
    user: {
        id: 0,
        chatIds: [],
        status: "",
        userName: "",
    },
}

export default (state = initialState, action: LoginActionTypes) => {
    switch (action.type){
        case LoginTypes.LOGIN:
            return {
                ...state,
                isAuth: true,
                token: action.token,
                user: {
                    ...state.user,
                    id: action.id,
                    chatIds: action.chatIds,
                    status: action.status,
                    userName: action.userName,
                }
            }
        case LoginTypes.SET_AUTH:
            return {
                ...state,
                isAuth: true
            }
        case LoginTypes.LOGIN_FAIL:
        case LoginTypes.LOGOUT:
            return initialState
        case LoginTypes.CHANGE_STATUS_SUCCESS:
            return {
                ...state,
                user: {
                    ...state.user,
                    status: action.status
                }
            }
        case LoginTypes.CHANGE_USER_NAME_SUCCESS:
            return {
                ...state,
                user: {
                    ...state.user,
                    userName: action.name
                }
            }
        default:
            return state
    }
}
