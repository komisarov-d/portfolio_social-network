import React from "react";
import s from './Header.module.css'
import LoginForm from "./Login";

const Header = () => {


    return (
        <header className={s.header}>
            <div> <img
                className={s.logo}
                src="https://i.ya-webdesign.com/images/w3c-svg-scalable-vector-8.png"
                alt="logo"/>Header </div>
           <div className={s.login}>
               <LoginForm/>
           </div>
        </header>
    )
}
export default Header