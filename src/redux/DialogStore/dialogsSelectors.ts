import {AppStateType} from "../rootReducer";

export const getMessagesSelector = (state:AppStateType) => {
    return state.dialogPage.messages
}
export const getDialogsSelector = (state:AppStateType) => {
    return state.dialogPage.dialogs
}