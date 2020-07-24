import React from "react";
import s from './Users.module.css'
import {useDispatch} from "react-redux";
import {follow, unfollow} from "../../redux/UsersStore/usersActions";
import User_avatar from '../../assets/images/User_avatar.png'
import {NavLink} from "react-router-dom";

const User = ({name, photos, status, followed, id}) => {
    const dispatch = useDispatch()

    return (
        <div className={s.user}>
            <span>
                <div>
                    <NavLink to={`/profile/${id}`}>
                        <img className={s.avatar}
                             src={photos.small !== null ? photos.small : User_avatar}
                             alt="avatar"/>
                    </NavLink>

                </div>
                <div>
                    {followed ?
                        <button onClick={() => dispatch(unfollow(id))}>Unfollow</button>
                        :
                        <button onClick={() => dispatch(follow(id))}>Follow</button>}
                </div>
            </span>
            <span>
            <span>
                <div>{name}</div>
                <div>{status}</div>
            </span>
                <span>
                    <div>location</div>
                    <div>city</div>
                </span>
        </span>
        </div>
    )
}
export default User
