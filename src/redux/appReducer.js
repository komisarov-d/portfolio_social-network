import {combineReducers} from "redux";
import {profileReducer} from "./ProfileStore/profileReducer";
import {dialogsReducer} from "./DialogStore/dialogsReducer";
import {authReducer} from "./AuthStore/authReducer";

export const appReducer = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    auth: authReducer
})