import {SHOW_LOADER, SHOW_ALERT, HIDE_LOADER, HIDE_ALERT} from "./appTypes";

export const showLoader = () => {
    return {
        type: SHOW_LOADER
    }
}
export const hideLoader = () => {
    return {
        type: HIDE_LOADER
    }
}
export const hideAlert = () => {
    return {
        type: HIDE_ALERT
    }
}
export const showAlert = alertMessage => {
    return dispatch => {
        dispatch({
            type: SHOW_ALERT,
            payload: alertMessage
        })
        setTimeout(() => {
            dispatch(hideLoader())
        }, 4000)
    }

}
