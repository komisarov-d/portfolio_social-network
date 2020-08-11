import {actions, follow, unfollow} from "./usersReducer";
import {usersAPI} from "../../API/users-api";
import {APIResponseType, ResultCodesEnum} from "../../API/api";

jest.mock("../../API/users-api")
const userAPIMock = usersAPI as jest.Mocked<typeof usersAPI>


const dispatchMock = jest.fn()
const getStateMock = jest.fn()
beforeEach(() => {
   dispatchMock.mockClear()
   getStateMock.mockClear()
    userAPIMock.followRequest.mockClear()
    userAPIMock.unfollow.mockClear()
})
const result:APIResponseType = {
    data:{},
    messages:[],
    resultCode: ResultCodesEnum.Success
}
userAPIMock.followRequest.mockReturnValue(Promise.resolve(result))

test('follow thunk success', async () => {
   const thunk = follow(1)



    await thunk(dispatchMock, getStateMock, {})
    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFollowingProgress(true, 1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.followSuccess(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleFollowingProgress(false, 1))
})

userAPIMock.unfollow.mockReturnValue(Promise.resolve(result))
test('unfollow thunk success', async () => {
   const thunk = unfollow(1)



    await thunk(dispatchMock, getStateMock, {})
    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFollowingProgress(true, 1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.unfollowSuccess(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleFollowingProgress(false, 1))
})
