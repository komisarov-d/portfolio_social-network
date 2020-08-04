import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {profileReducer} from "./ProfileStore/profileReducer";
import {dialogsReducer} from "./DialogStore/dialogsReducer";
import {authReducer} from "./AuthStore/authReducer";
import {usersReducer} from "./UsersStore/usersReducer"
import {appReducer} from "./AppStore/appReducer";
import {reducer as formReducer} from "redux-form";
import thunk from "redux-thunk";

export const rootReducer = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    auth: authReducer,
    users: usersReducer,
    app: appReducer,
    form: formReducer
})
export const store = createStore(rootReducer, compose(
    applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))