import {ADD_POST,  REMOVE_POST, REQUEST_POST} from "./profileTypes";

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
    // function getUserPermissions() {
    //     return axios.get('/user/12345/permissions');
    // }
    // return async dispatch => {
    //
    //         const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
    //         const json = await response.json()
    //
    //     setTimeout(() => {
    //         dispatch({
    //             type: REQUEST_POST,
    //             payload: json
    //         })
    //     },500)
    //
    //
    // }
}
