import {useFormik} from "formik";
import React from "react";
import {useDispatch} from "react-redux";
import {createPost} from "../../../redux/ProfileStore/profileActions";

const PostForm = () => {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            postTitle: '',
        },
        onSubmit: values => {
            const postText = {
                id:Date.now().toString(),
                title:formik.values.postTitle
            }
            dispatch(createPost(postText))

            formik.resetForm()
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="postTitle">Post Text</label>
            <input
                id="postTitle"
                name="postTitle"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.postTitle}
            />
            <button type="submit">Submit</button>
        </form>
    );
}
export default PostForm