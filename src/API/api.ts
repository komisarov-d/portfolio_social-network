// import axios from "axios";
// import {UserType} from "../Types/Types";
//
//
// export const instance = axios.create({
//     withCredentials: true,
//     baseURL: 'https://social-network.samuraijs.com/api/1.0/',
//     headers: {
//         'API-KEY': '1e91d2c9-02cb-42ec-9f13-e2205e00b2f8'
//     }
// })
// export enum ResultCodesEnum {
//     Success = 0,
//     Error = 1
// }
//
// export enum ResultCodeForCaptchaEnum {
//     CaptchaIsRequired = 10
// }
//
//
// export type GetItemsType = {
//     items: Array<UserType>
//     totalCount: number
//     error: string | null
//
// }
//
// export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
//     resultCode: RC
//     messages: Array<string>
//     data: D
// }
import axios from "axios";
import {UserType} from "../Types/Types";


export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:     {
        "API-KEY": "1e91d2c9-02cb-42ec-9f13-e2205e00b2f8"
    }
});

export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}

export enum ResultCodeForCaptchaEnum {
    CaptchaIsRequired = 10
}

export type GetItemsType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}
export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}