import React from "react";
import {useDispatch, useSelector} from "react-redux";

import Posts from "./Posts";
import {fetchPost} from "../../../redux/ProfileStore/profileActions";

const FetchedPosts = () => {
    const fetchedPosts = useSelector(state => state.profile.fetchedPosts)
    const dispatch = useDispatch()
    if (!fetchedPosts.length) {
        return <button onClick={() => dispatch(fetchPost())}>Upload Posts</button>
    }
    return (
        <div>

            {fetchedPosts.map((post, index) => {
                return <Posts {...post} index={index} id={post.id}/>
            })}
        </div>
    )

}
export default FetchedPosts