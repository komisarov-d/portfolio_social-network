import s from "../Profile.module.css";
import React from "react";

const Contact = ({contactTitle, contactValue}) => {
    return(
        <div className={s.contact}>
            <b>{contactTitle}</b>: {contactValue}
        </div>
    )
}
export default Contact