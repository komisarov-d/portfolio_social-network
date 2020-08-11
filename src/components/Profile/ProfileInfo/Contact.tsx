import s from "../Profile.module.css";
import React from "react";

type PropsType = {
    contactTitle:string
    contactValue:string
}

const Contact:React.FC<PropsType> = ({contactTitle, contactValue}) => {
    return(
        <div className={s.contact}>
            <b>{contactTitle}</b>: {contactValue}
        </div>
    )
}
export default Contact