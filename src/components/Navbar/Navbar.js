import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {

    return (
        <nav className={s.navbar}>
            <NavLink to='/profile' activeClassName={s.active} className={s.item}>Profile</NavLink>
            <hr/>
            <NavLink to='/dialogs' className={s.item} activeClassName={s.active}>Dialog</NavLink>
            <hr/>
            <NavLink to='/users' className={s.item} activeClassName={s.active}>Users</NavLink>
            <hr/>
            <NavLink to='/music' className={s.item} activeClassName={s.active}>Music</NavLink>
            <hr/>
            <NavLink to='/settings' className={s.item} activeClassName={s.active}>Settings</NavLink>
            <hr/>

        </nav>
    )
}
export default Navbar