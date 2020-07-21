import React from "react";
import s from './Users.module.css'

const User = ({name, status}) => {

    return (
       <div className={s.user}>
           <h4>{name}</h4>
           <p>{status}</p>
       </div>
    )
}
export default User