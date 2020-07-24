import {ADD_POST, FETCH_POST, REMOVE_POST, SET_USER_PROFILE} from "./profileTypes";

const initialState = {
    posts: [],
    profile: null
}
export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST :
            return {...state, posts: state.posts.concat(action.payload)}
        case REMOVE_POST:
            return {...state, posts: state.posts.filter(post => post.id !== action.payload)}
        case FETCH_POST:
            return {...state, posts: state.posts.concat(action.payload)}
            case SET_USER_PROFILE:
            return {...state, profile: action.payload}

        default:
            return state
    }
}