import React from "react";
import PostForm from "./PostForm";
import { startCreatePost } from "../actions/posts";
import { connect } from "react-redux";

const CreatePage = (props) => (
    <div>
        <PostForm onSubmit={(post)=>{
            props.dispatch(startCreatePost(post))
            props.history.push("/dashboard")
        }}/>
    </div> 
)
export default connect()(CreatePage)



