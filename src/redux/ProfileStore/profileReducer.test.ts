import {profileReducer, actions} from "./profileReducer";
import {PostType, ProfileType} from "../../Types/Types";

let state = {
    posts: [
        {id: 1, title: 'first'},
        {id: 2, title: 'second'},
        {id: 3, title: 'hello'},
        {id: 4, title: 'bye'}
    ] as Array<PostType>,
    profilePage: null as ProfileType | null,
    status: '' as string
}

test('post id:4 should be removed', () => {

    let action = actions.createPost('asd')
  let newState = profileReducer(state,action)
   expect(newState.posts.length).toBe(5)
});
