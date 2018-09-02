import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const PostItem = (props)=>(
    <Link className="post-link" to={`edit/${props.post.id}`}>
        <div className="post">
            <h2 className="post-title">{props.post.title}</h2>
            <div className="post-date">
                <p >{moment(props.post.createdAt).format('MMMM Do YYYY, h:mm a')}</p>
            </div>
        </div>
    </Link>
)

export default PostItem