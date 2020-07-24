import React, {useState} from "react";
import {useFormik} from "formik";

const ProfileStatus = () => {
    const [editMode, changeMode] = useState(false)
    const formik = useFormik({
        initialValues: {
            status: '',
        },
        onSubmit: values => {
            // values.status = status
            changeMode(false)

        },
    });

    if (!editMode) {
        return formik.values.status.length ?
            <div onDoubleClick={() => changeMode(true)}>{formik.values.status}</div>
            :
            <div onDoubleClick={() => changeMode(true)}>Status are empty</div>
    }

    if (editMode) {
        return (
            <form onSubmit={formik.handleSubmit}>

                <input
                    id="status"
                    name="status"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.status}

                />
            </form>
        );
    }
}
export default ProfileStatus