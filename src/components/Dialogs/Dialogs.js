import React from "react";
import s from './Dialogs.module.css'
import DialogForm from "./DialogsContent/DialogsForm";
import {useSelector} from "react-redux";
import DialogsList from "./DialogsContent/DialogsList";
import DialogsMessage from "./DialogsContent/DialogsMessages";
const Dialogs = () => {
const dialogs = useSelector(state => state.dialogs.dialogs)
const users = useSelector(state => state.dialogs.users)

    return(
        <div className={s.dialogWrapper}>
            <div className={s.dialogList}>
                {users.map(user => {return <DialogsList key={user.userId} {...user}/>})}

            </div>

            <div className={s.dialogs}>
                {dialogs.map(dialog => {return <DialogsMessage key={dialog.id} message={dialog.message}/>})}
                <DialogForm/>
            </div>
        </div>
    )
}
export default Dialogs