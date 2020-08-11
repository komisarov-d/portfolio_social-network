import * as React from "react";
import ReduxPostForm from "./PostForm";
import Post from "./Post";
import s from '../Profile.module.css'
import {useSelector} from "react-redux";
import {getPostsSelector} from "../../../redux/ProfileStore/profileSelectors";


const Posts:React.FC = (props) => {

    const posts = useSelector(getPostsSelector)
    let postsElements = posts.reverse().map(p => <Post initial={null} key={p.id} postTitle={p.title}/>)

    return (
        <div>
            <div>
                <ReduxPostForm/>
            </div>
            <h3>My Posts</h3>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}



const PostsMemorized = React.memo(Posts)
export default PostsMemorized