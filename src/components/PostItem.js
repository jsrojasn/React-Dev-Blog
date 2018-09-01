import React from "react";
import { Link } from "react-router-dom";

const PostItem = (props)=>(
    <Link to={`edit/${props.post.id}`}>
        <h2>{props.post.title}</h2>
        <p>{props.post.body}</p>
    </Link>
)

export default PostItem