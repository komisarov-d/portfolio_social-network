import {Action, applyMiddleware, combineReducers, compose, createStore} from "redux";
import {profileReducer} from "./ProfileStore/profileReducer";
import {dialogsReducer} from "./DialogStore/dialogsReducer";
import {authReducer} from "./AuthStore/authReducer";
import {usersReducer} from "./UsersStore/usersReducer"
import {appReducer} from "./AppStore/appReducer";
import {reducer as formReducer} from "redux-form";
import thunkMiddleware, {ThunkAction} from "redux-thunk";

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    auth: authReducer,
    usersPage: usersReducer,
    app: appReducer,
    form: formReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>
export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>
export type InferActionsType<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never

// @ts-ignore
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))