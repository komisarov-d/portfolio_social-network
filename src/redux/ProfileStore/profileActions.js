import {ADD_POST, LIKE_POST, REMOVE_POST, SET_STATUS, SET_USER_PROFILE} from "./profileTypes";
import {profileAPI} from "../../API/api";

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
export const likePost = id => {
    return {
        type: LIKE_POST,
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
        profileAPI.getProfile(userId).then(response => {
                dispatch(setUserProfile(response.data))
            }
        )
    }
}

export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        payload: status
    }
}
export const getStatus = (userId) => {
    return dispatch => {
        profileAPI.getStatus(userId).then(response => {
                dispatch(setStatus(response.data))
            }
        )
    }
}
export const updateStatus = (status) => {
    return dispatch => {
        profileAPI.updateStatus(status).then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            }
        )
    }
}

