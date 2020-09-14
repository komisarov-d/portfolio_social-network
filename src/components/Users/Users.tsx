import React, {useEffect} from "react";
import s from './Users.module.css'
import Paginator from "../common/Paginators/Paginator";
import User from "./User";
import UsersSearchForm from "./UsersSearchForm";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage, getFollowingInProgress, getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsersFilter,
    getUsersSelector
} from "../../redux/UsersStore/usersSelectors";
import {FilterType, follow, requestUsers, unfollow} from "../../redux/UsersStore/usersReducer";
import {useHistory} from "react-router-dom";
import * as queryString from "querystring";
import {Loader} from "../common/Loader/Loader";

type queryParamsType = {
    term?: string, page?: string, friend?: string
}
export const Users: React.FC = () => {

    const totalUsersCount = useSelector(getTotalUsersCount)
    const users = useSelector(getUsersSelector)
    const pageSize = useSelector(getPageSize)
    const currentPage = useSelector(getCurrentPage)
    const followingInProgress = useSelector(getFollowingInProgress)
    const filter = useSelector(getUsersFilter)
    const isFetching = useSelector(getIsFetching)
    const dispatch = useDispatch()
    const history = useHistory()


    useEffect(() => {
        const parsed = queryString.parse(history.location.search.substr(1)) as queryParamsType

        let actualPage = currentPage
        let actualFilter = filter

        if (!!parsed.page) actualPage = Number(parsed.page)
        if (!!parsed.term) actualFilter = {...actualFilter, term: parsed.term as string}

        switch (parsed.friend) {
            case 'null':
                actualFilter = {...actualFilter, friend: null}
                break
            case 'true':
                actualFilter = {...actualFilter, friend: true}
                break
            case 'false':
                actualFilter = {...actualFilter, friend: false}
                break
        }
        dispatch(requestUsers(actualPage, pageSize, actualFilter))
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        const query: queryParamsType = {}
        if (!!filter.term) query.term = filter.term
        if (filter.friend !== null) query.friend = String(filter.friend)
        if (currentPage !== 1) query.page = String(currentPage)
        history.push({
            pathname: '/users',
            search: queryString.stringify(query)
        })
        // eslint-disable-next-line
    }, [filter, currentPage])

    const onPageChanged = (pageNumber: number) => {
        dispatch(requestUsers(pageNumber, pageSize, filter))
    }

    const onFilterChanged = (filter: FilterType) => {
        dispatch(requestUsers(1, pageSize, filter))
    }
    const followRequest = (userId: number) => {
        dispatch(follow(userId))
    }

    const unfollowRequest = (userId: number) => {
        dispatch(unfollow(userId))
    }
    const usersElements = users.map((user) => <User key={user.id} user={user}
                                                    followingInProgress={followingInProgress}
                                                    follow={followRequest}
                                                    unfollow={unfollowRequest}/>)

    return (
        <div>
            {isFetching && <Loader/>}
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



