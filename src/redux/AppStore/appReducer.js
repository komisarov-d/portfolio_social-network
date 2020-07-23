import {SHOW_ALERT, HIDE_ALERT, HIDE_LOADER, SHOW_LOADER} from "./appTypes";

const initialState = {
    loading: false,
    alert: null
}
export const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case SHOW_LOADER :
            return {...state, loading: true}
        case HIDE_LOADER :
            return {...state, loading: false}
        case HIDE_ALERT :
            return {...state, alert: null}
        case SHOW_ALERT :
            return {...state, alert: action.payload}

        default:
            return state
    }
}