import {ADD_POST,  REMOVE_POST, SET_USER_PROFILE} from "./profileTypes";

const initialState = {
    posts: [
        {id:1, title: 'first'},
        {id:2, title: 'second'},
        {id:3, title: 'hello'},
        {id:4, title: 'bye'}
    ],
    profile: null
}
export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST :
            return {...state, posts: state.posts.concat(action.payload)}
        case REMOVE_POST:
            return {...state, posts: state.posts.filter(post => post.id !== action.payload)}

            case SET_USER_PROFILE:
            return {...state, profile: action.payload}

        default:
            return state
    }
}