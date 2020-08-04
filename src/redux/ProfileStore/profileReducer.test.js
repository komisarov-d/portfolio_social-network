import {profileReducer, removePost} from "./profileReducer";


test('post id:4 should be removed', () => {
    let state = {
        posts: [
            {id: 1, title: 'first', likes: 2},
            {id: 2, title: 'second', likes: 42},
            {id: 3, title: 'hello', likes: 5},
            {id: 4, title: 'bye', likes: 8}
        ]
    }
    let action = removePost(4)
  let newState = profileReducer(state,action)
   expect(newState.posts.length).toBe(3)
});
