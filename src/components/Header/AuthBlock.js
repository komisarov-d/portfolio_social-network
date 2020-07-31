import React from "react";
import {NavLink} from "react-router-dom";


const AuthBlock = (props) => {

    if (props.isAuth) {
        return (<div>
                <button onClick={ props.logout}>Logout</button>
                <div>{props.login}</div>
            </div>
        )
    } else if (!props.isAuth) {
        return (
            <NavLink to={'/login'}>Login</NavLink>
        )
    }

}
export default AuthBlock