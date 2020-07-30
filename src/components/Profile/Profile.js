import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {Field,reduxForm} from "redux-form";
import Posts from "./Posts";


const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field
                component='textarea'
                name='postTitle'/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    );
}

let ReduxPostForm = reduxForm({
    form: 'ProfileAddNewPostForm'
})(PostForm)

const Profile = (props) => {
    let onSubmit = (values) => {
        props.createPost(values.postTitle)
    }
    return (
        <div className={s.content}>
            <ProfileInfo status={props.status} updateStatus={props.updateStatus} profile={props.profile}/>

            <h3>My Posts</h3>
            <ReduxPostForm onSubmit={onSubmit}/>
            <Posts posts={props.posts} removePost={props.removePost} likePost={props.likePost}/>
        </div>
    )
}
export default Profile
