import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/Validators";
import {createField, Textarea} from "../common/FormsControls/FormsControls";

const maxLength100 = maxLengthCreator(100)

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {createField('Post message', 'postTitle', [required, maxLength100], Textarea)}
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
            <ProfileInfo updateUserProfileData={props.updateUserProfileData} isOwner={props.isOwner} savePhoto={props.savePhoto} status={props.status} updateStatus={props.updateStatus} profile={props.profile}/>
            <ReduxPostForm onSubmit={onSubmit}/>
            <Posts posts={props.posts} removePost={props.removePost} likePost={props.likePost}/>
        </div>
    )
}
const Posts = React.memo(props => {
    return (
        <div>
            <h3>My Posts</h3>
            {props.posts.map((post, index) => {
                return <div key={post.id}>
                    <strong>{index + 1}</strong>&nbsp;{post.title}

                    <button onClick={() => props.likePost(post.id)}>
                        {post.likes}
                        <span role="img" aria-label="like">&#10084;</span>
                    </button>
                    <button onClick={() => props.removePost(post.id)}>
                        <span role="img" aria-label="remove">&#10060;</span>
                    </button>
                </div>
            })}
        </div>
    )
})
export default Profile
