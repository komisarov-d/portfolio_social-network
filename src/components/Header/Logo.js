import s from "./Header.module.css";
import React from "react";

const Logo = () => {

    return(
        <div>
            <img
                className={s.logo}
                src="https://i.ya-webdesign.com/images/w3c-svg-scalable-vector-8.png"
                alt="logo"/>
        </div>

    )
}
export default Logo