import React from "react";
import s from './Users.module.css'
import Paginator from "../common/Paginators/Paginator";
import User from "./User";


const Users = ({totalUsersCount, pageSize, onPageChanged, currentPage, users, ...props}) => {
    return (
        <div>
            <Paginator onPageChanged={onPageChanged} currentPage={currentPage} totalItemsCount={totalUsersCount}
                       pageSize/>
            <div className={s.users}>
                {users.map(user => {
                    return <User user={user} key={user.id} followingInProgress={props.followingInProgress} follow={props.follow}
                                 unfollow={props.unfollow}/>
                })}
            </div>
        </div>
    )
}
export default Users
