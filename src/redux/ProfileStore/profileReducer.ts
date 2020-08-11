import {FormAction, stopSubmit} from "redux-form";
import {PostType, ProfileType, PhotosType} from "../../Types/Types";
import {profileAPI} from "../../API/profile-api";
import {BaseThunkType, InferActionsType} from "../rootReducer";

const initialState = {
    posts: [
        {id: 1, title: 'first'},
        {id: 2, title: 'second'},
        {id: 3, title: 'hello'},
        {id: 4, title: 'bye'}
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: ''
}
export const profileReducer = (state = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case 'POST/ADD_POST':
            let newPost = {
                id:Date.now(),
                title:action.newPostText
            }
            return {...state, posts: [...state.posts, newPost]}
        case 'USER/SET_USER_PROFILE':
            return {...state, profile: action.profile}
        case 'USER/SET_STATUS':
            return {...state, status: action.payload}
        case 'USER/UPDATE_PHOTO':
            return {...state, profile: {...state.profile, photos: action.payload} as ProfileType}

        default:
            return state
    }
}
export const actions = {
    createPost: (newPostText: string) => ({type: 'POST/ADD_POST',  newPostText} as const),
    setUserProfile: (profile: ProfileType) => ({type: 'USER/SET_USER_PROFILE', profile: profile} as const),
    setStatus: (status: string) => ({type: 'USER/SET_STATUS', payload: status} as const),
    updatePhoto: (profilePhoto: PhotosType) => ({type: 'USER/UPDATE_PHOTO', payload: profilePhoto} as const)
}
export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
    let data = await profileAPI.getProfile(userId)
    dispatch(actions.setUserProfile(data))
}
export const getStatus = (userId: number): ThunkType => async (dispatch) => {
    let data = await profileAPI.getStatus(userId)
    dispatch(actions.setStatus(data))
}
export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    let data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(actions.setStatus(status))
    }
}
export const savePhoto = (profilePhoto: File): ThunkType => async (dispatch) => {
    let data = await profileAPI.updateAvatar(profilePhoto)
    if (data.resultCode === 0) {
        dispatch(actions.updatePhoto(data.data.photos))
    }
}
export const updateUserProfileData = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.userId
    let data = await profileAPI.updateProfile(profile)
    if (data.resultCode === 0) {
        if (userId !== null) {
            dispatch(getUserProfile(userId))
        } else {
            throw new Error(`UserId can't be null`)
        }

    } else {
        dispatch(stopSubmit("edit-profile", {_error: data.messages[0]}))
        return Promise.reject(data.messages[0])
    }
}
type ThunkType = BaseThunkType<ActionsTypes | FormAction>
export type InitialStateType = typeof initialState
type ActionsTypes = InferActionsType<typeof actions>