// import {createField, Textarea} from "../common/FormsControls/FormsControls";
// import {maxLengthCreator, required} from "../../utils/validators/Validators";
import React from "react";
// import {InjectedFormProps, reduxForm} from "redux-form";
import {useFormik} from 'formik';
import {Input} from "antd";


type PropsType = {
    addNewMessage: (newMessage: string ) => void
}
export const DialogForm: React.FC<PropsType> = (props) => {

    const formik = useFormik({
        initialValues: {
            newMessage: '' ,
        },
        onSubmit: values => {
            props.addNewMessage(values.newMessage)
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="newMessage">New Message</label>
                        <Input
                id="newMessage"
                name="newMessage"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.newMessage}
            />
            <button>Send</button>
        </form>
    );
};

