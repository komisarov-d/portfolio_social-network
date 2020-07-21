import React from "react";
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogsList = ({name, userId}) => {
    return(
        <div className={s.dialogList}>
            <NavLink to={'/dialogs/' + userId}>{name}</NavLink>
        </div>
    )
}
export default DialogsList