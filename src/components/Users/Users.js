import React, {useEffect} from "react";
import s from './Users.module.css'
import {useDispatch, useSelector} from "react-redux";
import User from "./User";
import {setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching} from "../../redux/UsersStore/usersActions";
import * as axios from "axios";
import {Loader} from "../common/Loader/Loader";

const Users = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.users)
    const totalUsersCount = useSelector(state => state.users.totalUsersCount)
    const pageSize = useSelector(state => state.users.pageSize)
    const currentPage = useSelector(state => state.users.currentPage)
    const isFetching = useSelector(state => state.users.isFetching)


    useEffect(() => {
        dispatch(toggleIsFetching(true))
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`).then(response => {
            dispatch(setUsers(response.data.items))
            dispatch(setTotalUsersCount(response.data.totalCount / 50))
            dispatch(toggleIsFetching(false))
        })
    }, [dispatch, currentPage, pageSize])

    const onPageChanged = (page) => {
        dispatch(setCurrentPage(page))
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${pageSize}`).then(response => {
            dispatch(setUsers(response.data.items))

        })
    }

    let pageCount = Math.ceil(totalUsersCount / pageSize)
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    return (
        <div>

            <div>

                {pages.map(page => {
                    return <span className={currentPage === page ? s.selectedPage : null}
                                 onClick={() => {
                                     onPageChanged(page)
                                 }}>{page}</span>
                })}
            </div>
            <div className={s.users}>
                {isFetching && <Loader/>}
                {users.map(user => {
                    return <User key={user.id} {...user}/>
                })}
            </div>
        </div>
    )
}
export default Users
