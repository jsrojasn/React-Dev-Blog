import React from "react";
import { connect } from "react-redux";
import PostItem from "./PostItem";
import selectPosts from "../selectors/posts";

const PostsList = (props)=>(
    <div>
        {props.posts.map((post)=><PostItem key={post.id} post={post}/>)}
    </div>
)

const mapStatetoProps = (state)=>({
    posts: selectPosts(state.posts, state.filters) 
})
export default connect(mapStatetoProps)(PostsList)