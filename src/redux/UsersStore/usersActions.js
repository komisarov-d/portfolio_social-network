import {FOLLOW, SET_USERS, UNFOLLOW} from "./usersTypes";

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
