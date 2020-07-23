import {FOLLOW, SET_USERS, UNFOLLOW} from "./usersTypes";

const initialState = {
    users: []
}
export const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW :
            return  {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.payload){
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW :
            return  {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.payload){
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.payload]}
        default:
            return state
    }
}