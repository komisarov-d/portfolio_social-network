import {getAuthUserData} from "../AuthStore/authReducer";
import {InferActionsType} from "../rootReducer";

const initialState = {
    initialized: false
}

export const appReducer = (state = initialState, action:ActionsTypes):InitialStateType => {
    switch (action.type) {
        case 'APP/INITIALIZATION' :
            return {...state, initialized: true}
        default:
            return state
    }
}
export const actions = {
     initializingSuccess: () => ({type: 'APP/INITIALIZATION'} as const)
}
export const initializeApp = () => (dispatch:any) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(actions.initializingSuccess())
        });
}
export type InitialStateType = typeof initialState
type ActionsTypes = InferActionsType<typeof actions>