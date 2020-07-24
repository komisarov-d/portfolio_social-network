import {FOLLOW, SET_CURRENT_PAGE, SET_TOTAL_COUNT, SET_USERS, TOGGLE_IS_FETCHING, UNFOLLOW} from "./usersTypes";

export const follow = id => {
    return {
        type: FOLLOW,
        payload: id
    }
}
export const unfollow = id => {
    return {
        type: UNFOLLOW,
        payload: id
    }
}
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
        isFetching
    }

}

