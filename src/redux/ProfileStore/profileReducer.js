import {ADD_POST, FETCH_POST, REMOVE_POST} from "./profileTypes";

const initialState = {
    posts: [
        {id: 1, title: ' ghjk'},
        {id: 2, title: ' juyt'},
        {id: 3, title: ' dfgh'}
    ],
    fetchedPosts: []
}
export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST :
            return {...state, posts: state.posts.concat(action.payload)}
        case REMOVE_POST:
            return {...state, posts: state.posts.filter(post => post.id !== action.payload)}
        case FETCH_POST:
            return {...state, fetchedPosts: action.payload}

        default:
            return state
    }
}