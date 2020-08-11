import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsMemorized from "./Posts/Posts";

type PropsType = {
    isOwner:boolean
}

const Profile: React.FC<PropsType> = (props) => {

    return (
        <div className={s.content}>
            <ProfileInfo isOwner={props.isOwner} />
            <PostsMemorized />
        </div>
    )
}

export default Profile
