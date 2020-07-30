import {LOGIN, LOGOUT, SET_USER_DATA} from "./authTypes";

const initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data, isAuth: true}
        case LOGIN :
            return {...state, isAuth: true}
        case LOGOUT :
            return {...state, isAuth: false}

        default:
            return state
    }
}