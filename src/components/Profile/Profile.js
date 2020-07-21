import React from "react";
import s from './Profile.module.css'
import PostForm from "./PostForm/PostForm";
import PostList from "./Posts/PostList";
import FetchedPosts from "./Posts/FetchedPosts";
import ProfileInfo from "./ProfileInfo";
const Profile = () => {

    return(
        <div className={s.content}>
            <img className={s.bgImg} alt='bg-img' src='https://www.imgacademy.cn/themes/custom/imgacademy/images/helpbox-contact.jpg'/>
            <ProfileInfo/>
            <h3>My Posts</h3>
            <PostForm/>
            <FetchedPosts/>
            <PostList/>

        </div>
    )
}
export default Profile