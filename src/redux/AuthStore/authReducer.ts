import {ResultCodeForCaptchaEnum, ResultCodesEnum} from "../../API/api";
import {FormAction, stopSubmit} from "redux-form";
import {authAPI} from "../../API/auth-api";
import {securityAPI} from "../../API/security-api";
import {BaseThunkType, InferActionsType} from "../rootReducer";

export const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'INIT/SET_USER_DATA':
        case 'AUTH/GET_CAPTCHA_URL':
            return {...state, ...action.payload}
        default:
            return state
    }
}
export const actions = {
    setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
        type: 'INIT/SET_USER_DATA', payload: {userId, email, login, isAuth}
    } as const),
    getCaptchaUrlSuccess: (captchaUrl: string) => ({
        type: 'AUTH/GET_CAPTCHA_URL', payload: {captchaUrl}
    } as const)
}

export const getAuthUserData = (): ThunkType => async (dispatch) => {
    let meData = await authAPI.me()
    if (meData.resultCode === ResultCodesEnum.Success) {
        let {id, email, login} = meData.data
        dispatch(actions.setAuthUserData(id, email, login, true))
    }
}
export const authorization = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch) => {
    const data = await authAPI.login(email, password, rememberMe, captcha)
    if (data.resultCode === ResultCodesEnum.Success) {
       await dispatch(getAuthUserData())
    } else {
        if (data.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
           await dispatch(getCaptchaUrl())
        }
        const message = data.messages.length > 0 ? data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: message}))
    }
}
export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const data = await securityAPI.getCaptchaUrl()
    const captchaUrl = data.url
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl))
}
export const logout = (): ThunkType => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(actions.setAuthUserData(null, null, null, false))
    }
}
const initialState = {
    userId: null as (number | null),
    login: null as string | null,
    email: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
}
export type InitialStateType = typeof initialState
type ActionsTypes = InferActionsType<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes | FormAction>
