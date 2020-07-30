import {ADD_POST, SET_STATUS, LIKE_POST, REMOVE_POST, SET_USER_PROFILE} from "./profileTypes";

const initialState = {
    posts: [
        {id:1, title: 'first', likes: 2},
        {id:2, title: 'second',likes: 42},
        {id:3, title: 'hello',likes: 5},
        {id:4, title: 'bye',likes: 8}
    ],
    profile: null,
    status: ''
}
export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST :
            return {...state, posts: state.posts.concat({id:Date.now(), title:action.payload, likes:0})}
        case REMOVE_POST:
            return {...state, posts: state.posts.filter(post => post.id !== action.payload)}
            case LIKE_POST:
            return {...state, posts: state.posts.map(post => {
                    if (post.id === action.payload) {
                        return {...post, likes: post.likes + 1}
                    }
                    return post
                })}
            case SET_USER_PROFILE:
            return {...state, profile: action.payload}
            case SET_STATUS:
            return {...state, status: action.payload}

        default:
            return state
    }
}