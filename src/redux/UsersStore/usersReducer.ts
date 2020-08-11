import {updateObjectInArray} from "../../utils/objHelpers";
import {UserType} from "../../Types/Types";
import {InferActionsType, BaseThunkType} from "../rootReducer";
import {Dispatch} from "redux";
import {usersAPI} from "../../API/users-api";
import {APIResponseType} from "../../API/api";

const initialState = {
    users: [] as Array<UserType>,
    totalUsersCount: 0,
    pageSize: 12,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>,
    filter: {
        term: '',
        friend: null as null | boolean
    }
}


export const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'USERS/FOLLOW' :
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            }
        case 'USERS/UNFOLLOW' :
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            }
        case 'USERS/SET_USERS':
            return {...state, users: action.usersPage}
        case 'USERS/SET_CURRENT_PAGE':
            return {...state, currentPage: action.currentPage}
        case 'USERS/SET_FILTER':
            return {...state, filter: action.payload}
        case 'USERS/SET_TOTAL_COUNT':
            return {...state, totalUsersCount: action.count}
        case 'USERS/TOGGLE_IS_FETCHING':
            return {...state, isFetching: action.isFetching}
        case 'USERS/TOGGLE_IS_FOLLOWING_PROGRESS':
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


export const actions = {
    followSuccess: (userId: number) => ({type: 'USERS/FOLLOW', userId} as const),
    unfollowSuccess: (userId: number) => ({type: 'USERS/UNFOLLOW', userId} as const),
    setUsers: (users: Array<UserType>) => ({type: 'USERS/SET_USERS', usersPage: users} as const),
    setCurrentPage: (currentPage: number) => ({type: 'USERS/SET_CURRENT_PAGE', currentPage} as const),
    setFilter: (filter: FilterType) => ({type: 'USERS/SET_FILTER', payload: filter} as const),
    setTotalUsersCount: (totalUsersCount: number) => ({type: 'USERS/SET_TOTAL_COUNT', count: totalUsersCount} as const),
    toggleIsFetching: (isFetching: boolean) => ({type: 'USERS/TOGGLE_IS_FETCHING', isFetching} as const),
    toggleFollowingProgress: (isFetching: boolean, userId: number) => ({
        type: 'USERS/TOGGLE_IS_FOLLOWING_PROGRESS',
        isFetching,
        userId
    } as const)
}


export const requestUsers = (currentPage: number, pageSize: number, filter: FilterType): ThunkType => async (dispatch, getState) => {
    dispatch(actions.toggleIsFetching(true))
    dispatch(actions.setCurrentPage(currentPage))
    dispatch(actions.setFilter(filter))
    let data = await usersAPI.getUsers(currentPage, pageSize, filter.term, filter.friend)
    dispatch(actions.toggleIsFetching(false))
    dispatch(actions.setUsers(data.items))
    dispatch(actions.setTotalUsersCount(data.totalCount))
}


const _followUnfollowFlow = async (dispatch: Dispatch<ActionsTypes>,
                                   userId: number,
                                   apiMethod: (userId: number) => Promise<APIResponseType>,
                                   actionCreator: (userId: number) => ActionsTypes) => {
    dispatch(actions.toggleFollowingProgress(true, userId))
    let response = await apiMethod(userId)
    if (response.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(actions.toggleFollowingProgress(false, userId))

}
export const follow = (userId: number): ThunkType => {
    return async (dispatch) => {
        await _followUnfollowFlow(dispatch, userId, usersAPI.followRequest.bind(usersAPI), actions.followSuccess)
    }
}
export const unfollow = (userId: number): ThunkType => {
    return async (dispatch) => {
        await _followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), actions.unfollowSuccess)
    }
}
type ActionsTypes = InferActionsType<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>
export type InitialStateType = typeof initialState
export type FilterType = typeof initialState.filter