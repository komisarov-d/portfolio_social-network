import {profileAPI} from "../../API/api";
import {stopSubmit} from "redux-form";

export const ADD_POST = 'POST/ADD_POST'
export const REMOVE_POST = 'POST/REMOVE_POST'
export const SET_USER_PROFILE = 'USER/SET_USER_PROFILE'
export const LIKE_POST = 'POST/LIKE_POST'
export const SET_STATUS = 'USER/SET_STATUS'
export const UPDATE_PHOTO = 'USER/UPDATE_PHOTO'
export const UPDATE_PROFILE_DATA = 'USER/UPDATE_PROFILE_DATA'


const initialState = {
    posts: [
        {id: 1, title: 'first', likes: 2},
        {id: 2, title: 'second', likes: 42},
        {id: 3, title: 'hello', likes: 5},
        {id: 4, title: 'bye', likes: 8}
    ],
    profile: null,
    status: ''
}
export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST :
            return {...state, posts: state.posts.concat({id: Date.now(), title: action.payload, likes: 0})}
        case REMOVE_POST:
            return {...state, posts: state.posts.filter(post => post.id !== action.payload)}
        case LIKE_POST:
            return {
                ...state, posts: state.posts.map(post => {
                    if (post.id === action.payload) {
                        return {...post, likes: post.likes + 1}
                    }
                    return post
                })
            }
        case SET_USER_PROFILE:
            return {...state, profile: action.payload}
        case SET_STATUS:
            return {...state, status: action.payload}
        case UPDATE_PHOTO:
            return {...state, profile: {...state.profile, photos:action.payload}}
            case UPDATE_PROFILE_DATA:
            return {...state, profile: action.payload}

        default:
            return state
    }
}

export const createPost = post => {return {type: ADD_POST, payload: post}}
export const removePost = id => {return {type: REMOVE_POST, payload: id}}
export const likePost = id => {return {type: LIKE_POST, payload: id}}
export const setUserProfile = (profile) => {return {type: SET_USER_PROFILE, payload: profile}}
export const updatePhoto = (profilePhoto) => {return {type: UPDATE_PHOTO, payload: profilePhoto}}


export const getUserProfile = (userId) => async dispatch => {
    let response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}


export const setStatus = (status) => {return {type: SET_STATUS, payload: status}}
export const getStatus = (userId) => async dispatch => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateStatus = (status) => async dispatch => {
    try{
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
    } catch (e) {

    }
}
export const savePhoto = (profilePhoto) => async dispatch => {
    let response = await profileAPI.updateAvatar(profilePhoto)
    if (response.data.resultCode === 0) {
        dispatch(updatePhoto(response.data.data.photos))
    }
}
export const updateUserProfileData = (profile) => async (dispatch, getState) => {
   const userId = getState().auth.userId
    let response = await profileAPI.updateProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    } else {
        dispatch(stopSubmit("edit-profile",{_error: response.data.messages[0]}))
      return Promise.reject(response.data.messages[0])
    }
}
