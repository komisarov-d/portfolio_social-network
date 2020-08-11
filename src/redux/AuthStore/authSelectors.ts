import {AppStateType} from "../rootReducer";

export const getCaptchaUrlSelector = (state:AppStateType) => {
    return state.auth.captchaUrl
}
export const getLoginSelector = (state:AppStateType) => {
    return state.auth.login
}
export const getIsAuthSelector = (state:AppStateType) => {
    return state.auth.isAuth
}
export const getUserIdSelector = (state:AppStateType) => {
    return state.auth.userId
}
export const getUserEmailSelector = (state:AppStateType) => {
    return state.auth.email
}


