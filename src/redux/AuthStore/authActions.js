import {LOGIN, LOGOUT, SET_USER_DATA} from "./authTypes";
import {authAPI} from "../../API/api";


export const authorization = () => {
    return {
        type: LOGIN
    }
}
export const logout = () => {
    return {
        type: LOGOUT
    }
}
export const setAuthUserData = (userId, email, login) => {
    return {
        type: SET_USER_DATA,
        data: userId, email, login
    }
}
export const getAuthUserData = () => {
    return dispatch => {
        authAPI.me().then(response => {
            if (response.data.resultCode === 0) {
                let {id ,email, login} = response.data.data
                dispatch(setAuthUserData(id ,email, login))
            }
        })

    }
}
