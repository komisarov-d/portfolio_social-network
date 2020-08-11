import {instance, APIResponseType, ResultCodeForCaptchaEnum, ResultCodesEnum} from "./api";

export type MeResponseDataType = {
    id: number
    email: string
    login: string
}
export type LoginResponseDataType = {
    userId: number
}
export const authAPI = {
    me() {
        return instance.get<APIResponseType<MeResponseDataType>>(`auth/me`).then(response => response.data)
    },
    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance.post<APIResponseType<LoginResponseDataType, ResultCodesEnum | ResultCodeForCaptchaEnum>>(`auth/login`, {
            email,
            password,
            rememberMe,
            captcha
        }).then(response => response.data)
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}
