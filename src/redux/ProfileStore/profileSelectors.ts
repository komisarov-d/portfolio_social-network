import {AppStateType} from "../rootReducer";

export const getPostsSelector = (state: AppStateType) => {
    return state.profilePage.posts
}
export const getProfileSelector = (state: AppStateType) => {
    return state.profilePage.profile
}
export const getStatusSelector = (state: AppStateType) => {
    return state.profilePage.status
}