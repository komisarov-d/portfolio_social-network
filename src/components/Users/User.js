import {NavLink} from "react-router-dom";
import s from "./Users.module.css";
import User_avatar from "../../assets/images/User_avatar.png";
import React from "react";

const User = ({user,followingInProgress, follow, unfollow}) => {
    return(
       <div>
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
                        <button disabled={followingInProgress.some(id => id === user.id)}
                                onClick={() => {unfollow(user.id)}}>Unfollow</button>
                        :
                        <button disabled={followingInProgress.some(id => id === user.id)}
                                onClick={() => {follow(user.id)}}>Follow</button>}</div>
                <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
                </span>

                </span>
                </div>
            )

}
export default User