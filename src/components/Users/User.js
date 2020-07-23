import React from "react";
import s from './Users.module.css'
import {useDispatch} from "react-redux";
import {follow,  unfollow} from "../../redux/UsersStore/usersActions";


const User = ({name, username, followed, id}) => {
const dispatch = useDispatch()

    return (
       <div className={s.user}>
           <h4>{name}</h4>
           <p>{username}</p>
           {followed ?
               <button onClick={() => dispatch(unfollow(id))}>Unfollow</button>
               :
               <button onClick={() => dispatch(follow(id))}>Follow</button>}
       </div>
    )
}
export default User