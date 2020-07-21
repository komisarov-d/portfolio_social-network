import {useFormik} from "formik";
import React from "react";
import {useDispatch} from "react-redux";
import {sendMessage} from "../../../redux/DialogStore/dialogsActions";

const DialogForm = () => {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            messageTitle: '',
        },
        onSubmit: values => {
            const newMessage = {
                id:Date.now(),
                message:values.messageTitle
            }

            dispatch(sendMessage(newMessage))
            formik.resetForm()
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="messageTitle">New message</label>
            <input
                id="messageTitle"
                name="messageTitle"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.messageTitle}
            />
            <button type="submit">Submit</button>
        </form>
    );
};
export default DialogForm