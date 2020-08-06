import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";

const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo updateUserProfileData={props.updateUserProfileData} isOwner={props.isOwner} savePhoto={props.savePhoto} status={props.status} updateStatus={props.updateStatus} profile={props.profile}/>
            <Posts createPost={props.createPost}  posts={props.posts} removePost={props.removePost} likePost={props.likePost}/>
        </div>
    )
}

export default Profile
