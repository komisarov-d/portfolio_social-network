import React from "react";
import s from './Users.module.css'
import {useSelector} from "react-redux";
import User from "./User";

const Users = () => {
const users = useSelector(state => state.auth.users)
    return (
       <div className={s.users}>
           {users.map(user => {return <User key={user.id} {...user}/>})}
       </div>
    )
}
export default Users