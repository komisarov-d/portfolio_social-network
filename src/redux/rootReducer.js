import {combineReducers} from "redux";
import {profileReducer} from "./ProfileStore/profileReducer";
import {dialogsReducer} from "./DialogStore/dialogsReducer";
import {authReducer} from "./AuthStore/authReducer";
import {usersReducer} from "./UsersStore/usersReducer"
import {appReducer} from "./AppStore/appReducer";

export const rootReducer = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    auth: authReducer,
    users: usersReducer,
    app: appReducer
})