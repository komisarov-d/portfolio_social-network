import React, {useEffect} from "react";
import Posts from "./Posts";
import {useDispatch, useSelector} from "react-redux";
import {fetchPost} from "../../../redux/ProfileStore/profileActions";

const PostList = () => {
    const posts = useSelector(state => state.profile.posts)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPost())
    },[dispatch])
    return (
        <div>
            {posts.map((post, index) => {
                return <Posts key={post.id} index={index} {...post}/>
            })}
        </div>
    )


}
export default PostList