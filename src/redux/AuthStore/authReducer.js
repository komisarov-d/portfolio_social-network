import {LOGIN, LOGOUT} from "./authTypes";

const initialState = {
        auth: false
}
export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case LOGIN :
            return {...state, auth: true}
        case LOGOUT :
            return {...state, auth: false}

        default:
            return state
    }
}