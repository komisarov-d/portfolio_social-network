import React, {useEffect} from "react";
import s from './Users.module.css'
import Paginator from "../common/Paginators/Paginator";
import User from "./User";
import UsersSearchForm from "./UsersSearchForm";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage, getFollowingInProgress,
    getPageSize,
    getTotalUsersCount, getUsersFilter,
    getUsersSelector
} from "../../redux/UsersStore/usersSelectors";
import {FilterType, follow, requestUsers, unfollow} from "../../redux/UsersStore/usersReducer";


export const Users: React.FC = (props) => {

    const totalUsersCount = useSelector(getTotalUsersCount)
    const users = useSelector(getUsersSelector)
    const pageSize = useSelector(getPageSize)
    const currentPage = useSelector(getCurrentPage)
    const followingInProgress = useSelector(getFollowingInProgress)
    const filter = useSelector(getUsersFilter)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(requestUsers(currentPage,pageSize,filter))
    }, [dispatch, currentPage, filter, pageSize])
    const onPageChanged = (pageNumber: number) => {
        dispatch(requestUsers(pageNumber, pageSize, filter))
    }
    const onFilterChanged = (filter: FilterType) => {
        dispatch(requestUsers(1, pageSize, filter))
    }
    const followRequest = (userId:number) => {
        dispatch(follow(userId))
    }
    const unfollowRequest = (userId:number) => {
        dispatch(unfollow(userId))
    }
    const usersElements = users.map((user) => <User key={user.id} user={user}
                                                    followingInProgress={followingInProgress}
                                                    follow={followRequest}
                                                    unfollow={unfollowRequest}/>)

    return (
        <div>
            <div>
                <h3>Search Panel</h3>
                <UsersSearchForm onFilterChanged={onFilterChanged}/>
            </div>
            <div>
                <Paginator onPageChanged={onPageChanged} currentPage={currentPage} totalItemsCount={totalUsersCount}
                           pageSize={pageSize}/>
            </div>
            <div className={s.usersPage}>
                {usersElements}
            </div>
        </div>
    )
}



