import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/Validators";

const maxLength50 = maxLengthCreator(50)
const DialogForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>

            <Field component={Textarea}
                   validate={[required, maxLength50]}
                   name="message"
            />
            <button>Send message</button>
        </form>
    );
};

const MessagesReduxForm = reduxForm({
    form: 'message'
})(DialogForm)


const Dialogs = (props) => {
    const onSubmit = (formData) => {
        props.sendMessage(formData)

    }


    return (
        <div className={s.dialogWrapper}>
            <div className={s.dialogList}>
                {props.users.map(user => {
                    return <div key={user.userId} className={s.dialogList}>
                        <NavLink to={'/dialogs/' + user.userId}>{user.name}</NavLink></div>
                })}
            </div>
            <div className={s.dialogs}>
                {props.dialogs.map(dialog => {
                    return <h3 key={dialog.id}>{dialog.message} &nbsp;</h3>
                })}
                <MessagesReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )

}
export default Dialogs