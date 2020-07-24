import {ADD_POST, REMOVE_POST, REQUEST_POST, SET_USER_PROFILE} from "./profileTypes";

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
export const fetchPost = () => {

    return {
        type: REQUEST_POST
    }
}
export const setUserProfile = (profile) => {

    return {
        type: SET_USER_PROFILE,
        payload: profile
    }
}
