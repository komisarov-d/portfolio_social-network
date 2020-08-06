import * as React from "react";
import ReduxPostForm from "./PostForm";

const Posts = React.memo(({posts, likePost, removePost,createPost}) => {
    const onSubmit = (values) => {
        createPost(values.postTitle)
    }
    return (
        <div>
            <div>
                <ReduxPostForm onSubmit={onSubmit}/>
            </div>
            <h3>My Posts</h3>
            {posts.map((post, index) => {
                return <div key={post.id}>
                    <strong>{index + 1}</strong>&nbsp;{post.title}

                    <button onClick={() => likePost(post.id)}>
                        {post.likes}
                        <span role="img" aria-label="like">&#10084;</span>
                    </button>
                    <button onClick={() => removePost(post.id)}>
                        <span role="img" aria-label="remove">&#10060;</span>
                    </button>
                </div>
            })}
        </div>
    )
})
export default Posts