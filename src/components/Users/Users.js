import React from "react";
import s from './Users.module.css'
import User_avatar from '../../assets/images/User_avatar.png'
import {NavLink} from "react-router-dom";


const Users = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div>
                {pages.map(page => {
                    return <span key={page} className={props.currentPage === page ? s.selectedPage : null}
                                 onClick={() => {
                                     props.onPageChanged(page)
                                 }}>{page}</span>
                })}
            </div>
            <div className={s.users}>
                {props.users.map(user => <div key={user.id}>
            <span>
                <div>
                    <NavLink to={`/profile/${user.id}`}>
                        <img className={s.avatar}
                             src={user.photos.small !== null ? user.photos.small : User_avatar}
                             alt="avatar"/>
                    </NavLink>
                </div>
                <div>
                    {user.followed ?
                        <button disabled={props.followingInProgress.some(id => id === user.id)}
                                onClick={() => {props.unfollow(user.id)}}>Unfollow</button>
                        :
                        <button disabled={props.followingInProgress.some(id => id === user.id)}
                                onClick={() => {props.follow(user.id)}}>Follow</button>}
                </div>

                <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
                </span>

                </span>
                </div>)

                }
            </div>
        </div>
    )
}
export default Users
