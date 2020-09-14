import {AppStateType} from "../rootReducer";

export const getInitSelector = (state:AppStateType) => {
    return state.app.initialized
}


