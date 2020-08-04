import {usersAPI} from "../../API/api";
import {updateObjectInArray} from "../../utils/objHelpers";

export const UNFOLLOW = 'USERS/UNFOLLOW'
export const FOLLOW = 'USERS/FOLLOW'
export const SET_USERS = 'USERS/SET_USERS'
export const SET_CURRENT_PAGE = 'USERS/SET_CURRENT_PAGE'
export const SET_TOTAL_COUNT = 'USERS/SET_TOTAL_COUNT'
export const TOGGLE_IS_FETCHING = 'USERS/TOGGLE_IS_FETCHING'
export const FOLLOWING_IN_PROGRESS = 'USERS/FOLLOWING_IN_PROGRESS'

const initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 12,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}
export const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId,"id", {followed: true})
            }
        case UNFOLLOW :
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId,"id", {followed: false})
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
            return {
                ...state, followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userId]
                    :
                    state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}


export const setUsers = (users) => ({ type: SET_USERS, payload: users})
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, payload: page})
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_COUNT,payload: totalCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, payload: isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({type: FOLLOWING_IN_PROGRESS,isFetching, userId})
export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})

export const requestUsers = (page, pageSize) => async dispatch => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))
    let data = await usersAPI.getUsers(page, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount / 50))
}
const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId))
    let response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))

}
export const follow = (userId) => {
    return async (dispatch) => {
       await followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
    }
}
export const unfollow = (userId) => {
    return async (dispatch) => {
       await followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
    }
}
