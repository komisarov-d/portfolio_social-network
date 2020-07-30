import React from "react";

const Posts = (props) => {

    return(
        <div>
            {props.posts.map((post, index) => {
                return  <div key={post.id}>
                    <strong>{index +1}</strong>&nbsp;{post.title}

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
}
export default Posts