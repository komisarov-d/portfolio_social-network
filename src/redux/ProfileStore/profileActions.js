import {ADD_POST, REMOVE_POST, SET_USER_PROFILE} from "./profileTypes";
import {usersAPI} from "../../API/api";

export const createPost = post => {
    return {
        type: ADD_POST,
        payload: post
    }
}
export const removePost = id => {
    return {
        type: REMOVE_POST,
        payload: id
    }

}

export const setUserProfile = (profile) => {
    return dispatch => {
        dispatch({
            type: SET_USER_PROFILE,
            payload: profile
        })
    }
}
export const getUserProfile = (userId) => {
    return dispatch => {
        usersAPI.getProfile(userId).then(response => {
                dispatch(setUserProfile(response.data))
            }
        )
    }
}

