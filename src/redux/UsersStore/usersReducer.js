import {
    FOLLOW,
    FOLLOWING_IN_PROGRESS,
    SET_CURRENT_PAGE,
    SET_TOTAL_COUNT,
    SET_USERS,
    TOGGLE_IS_FETCHING,
    UNFOLLOW
} from "./usersTypes";

const initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}
export const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.payload) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW :
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.payload) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {...state, users: action.payload}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.payload}
        case SET_TOTAL_COUNT:
            return {...state, totalUsersCount: action.payload}
            case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.payload}
        case FOLLOWING_IN_PROGRESS:
        return {...state, followingInProgress: action.isFetching ?
                [...state.followingInProgress, action.userId]
                :
                state.followingInProgress.filter(id => id !== action.userId)
        }
        default:
            return state
    }
}
