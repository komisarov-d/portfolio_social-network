import {actions, InitialStateTypes, usersReducer} from "./usersReducer";
let state: InitialStateTypes
beforeEach(() => {
    state = {
        usersPage: [
            {userId: 0, name: 'Dima 0', followed: false, status: 'status 0', photos: {small: null, large: null}}
            , {userId: 1, name: 'Dima 1', followed: false, status: 'status 1', photos: {small: null, large: null}}
            , {userId: 2, name: 'Dima 2', followed: true, status: 'status 2', photos: {small: null, large: null}}
            , {userId: 3, name: 'Dima 3', followed: true, status: 'status 3', photos: {small: null, large: null}}
        ],
        totalUsersCount: 0,
        pageSize: 12,
        currentPage: 1,
        isFetching: true,
        followingInProgress: []
    }
})
test('follow success', () => {
       const newState =  usersReducer(state, actions.followSuccess(1))
    expect(newState.usersPage[0].followed).toBeFalsy()
    expect(newState.usersPage[1].followed).toBeTruthy()
})
test('unfollow success', () => {
       const newState =  usersReducer(state, actions.unfollowSuccess(3))
    expect(newState.usersPage[3].followed).toBeFalsy()
    expect(newState.usersPage[2].followed).toBeTruthy()
})