import * as React from "react";
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {actions} from "../../../redux/ProfileStore/profileReducer";
import {Input} from "antd";


const PostForm:React.FC = (props) => {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            newPostText: '' ,
        },
        onSubmit: values => {
dispatch(actions.createPost(values.newPostText))
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="newPostText">New Post</label>
            <Input
                style={{width:'300px'}}
                id="newPostText"
                name="newPostText"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.newPostText}
            />
            <button >Create Post</button>
        </form>
    )

}


export default PostForm