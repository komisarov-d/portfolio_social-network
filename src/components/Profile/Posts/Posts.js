import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {removePost} from "../../../redux/ProfileStore/profileActions";

const Posts = ({index,id, title}) => {
    const [likes, setLikes] = useState(0)
    const dispatch = useDispatch()

    return (
        <div>
            <strong>{index + 1}</strong>&nbsp;{title}

            <button onClick={() => setLikes(likes + 1)}>
                {likes}
                <span role="img" aria-label="like">&#10084;</span>
            </button>
            <button onClick={() => dispatch(removePost(id))}>
                <span role="img" aria-label="remove">&#10060;</span>
            </button>
        </div>
    )
}
export default Posts