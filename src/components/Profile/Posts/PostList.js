import React from "react";
import Posts from "./Posts";
import { useSelector} from "react-redux";

const PostList = () => {
    const posts = useSelector(state => state.profile.posts)

    return (
        <div>
            {posts.map((post, index) => {
                return <Posts key={post.id} index={index} {...post}/>
            })}
        </div>
    )


}
export default PostList