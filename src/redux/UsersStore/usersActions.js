import {
    FOLLOW,
    FOLLOWING_IN_PROGRESS,
    SET_CURRENT_PAGE,
    SET_TOTAL_COUNT,
    SET_USERS,
    TOGGLE_IS_FETCHING,
    UNFOLLOW
} from "./usersTypes";
import {usersAPI} from "../../API/api";


export const setUsers = (users) => {
    return {
        type: SET_USERS,
        payload: users
    }

}
export const setCurrentPage = (page) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: page
    }

}
export const setTotalUsersCount = (totalCount) => {
    return {
        type: SET_TOTAL_COUNT,
        payload: totalCount
    }

}
export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        payload: isFetching
    }

}
export const toggleFollowingProgress = (isFetching, userId) => {
    return {
        type: FOLLOWING_IN_PROGRESS,
        isFetching, userId
    }
}

export const requestUsers = (page, pageSize) => {
    return dispatch => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(page))
        usersAPI.getUsers(page, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount / 50))
        })
    }
}
export const follow = (userId) => {
    return dispatch => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.follow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch({
                    type: FOLLOW,
                    payload: userId
                })
            }
            dispatch(toggleFollowingProgress(false, userId))
        })

    }
}
export const unfollow = (userId) => {
    return dispatch => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.unfollow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch({
                    type: UNFOLLOW,
                    payload: userId
                })
            }
            dispatch(toggleFollowingProgress(false, userId))
        })

    }
}
