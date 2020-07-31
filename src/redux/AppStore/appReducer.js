import {getAuthUserData} from "../AuthStore/authReducer";

const SET_INITIALIZED = 'APP/INITIALIZATION'

const initialState = {
    initialized: false
}
export const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_INITIALIZED :
            return {...state, initialized: true}

        default:
            return state
    }
}
export const initializingSuccess = () => {
    return {
        type: SET_INITIALIZED
    }
}
export const initializeApp = () => (dispatch) => {
   let promise = dispatch(getAuthUserData())

promise.then(() => {
    dispatch(initializingSuccess())
})


}