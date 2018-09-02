import React from "react";
import { connect } from "react-redux";
import PostForm from "./PostForm";
import { startEditPost, startRemovePost } from "../actions/posts";
import { Link } from "react-router-dom";

const EditPage = (props)=>(
    <div className="content-container">
        <Link className="edit-link" to={`/read/${props.post.id}`}>Post shareable for read at: <span>https://mydev-blog.herokuapp/read/{props.post.id}</span> </Link>
        <PostForm 
            post={props.post}
            onSubmit={(post)=>{
                props.dispatch(startEditPost(props.post.id, post))
                props.history.push("/dashboard")
            }}
        />
        <button className="button remove-button" onClick={
            ()=>{
                props.dispatch(startRemovePost(props.post.id))
                props.history.push("/dashboard")
            }
        }>Remove</button>
    </div>
)

const mapStatetoProps = (state,props)=>({
    post:state.posts.find((post)=>post.id===props.match.params.id)
})

export default connect(mapStatetoProps)(EditPage)

