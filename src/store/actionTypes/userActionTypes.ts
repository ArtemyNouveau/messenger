export enum LoginTypes {
    LOGIN = "LOGIN",
    LOGIN_FAIL = "LOGIN_FAIL",
    LOGOUT = "LOGOUT",
    SET_AUTH = "SET_AUTH",

    CHANGE_USER_NAME_SUCCESS = "CHANGE_USER_NAME_SUCCESS",
    CHANGE_USER_NAME_FAIL = "CHANGE_USER_NAME_FAIL",

    CHANGE_STATUS_SUCCESS = "CHANGE_STATUS_SUCCESS",
    CHANGE_STATUS_FAIL = "CHANGE_STATUS_FAIL",
}

interface ChangeUserNameSuccess {
    type: LoginTypes.CHANGE_USER_NAME_SUCCESS,
    name: string
}

interface ChangeUserNameFail {
    type: LoginTypes.CHANGE_USER_NAME_FAIL
}

interface ChangeUserStatusSuccess {
    type: LoginTypes.CHANGE_STATUS_SUCCESS,
    status: string
}

interface ChangeUserStatusFail {
    type: LoginTypes.CHANGE_STATUS_FAIL
}

interface LoginType {
    type: LoginTypes.LOGIN,
    id: string,
    chatIds: ReadonlyArray<any>,
    status: string,
    userName: string,
    token: string
}

interface LoginFail {
    type: LoginTypes.LOGIN_FAIL
}

interface LogoutType {
    type: LoginTypes.LOGOUT,
}

interface SetAuth {
    type: LoginTypes.SET_AUTH,
}

export type LoginActionTypes = LoginType | LogoutType | LoginFail | SetAuth | ChangeUserNameSuccess | ChangeUserNameFail | ChangeUserStatusFail | ChangeUserStatusSuccess
