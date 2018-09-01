import React from "react";
import { connect } from "react-redux";
import moment from "moment";

const ReadPage = (props) => (
    <div>
        <h1>{props.post.title}</h1>
        <p>{props.post.body}</p>
        <p>{moment(props.post.createdAt).format('MMMM Do YYYY, h:mm a')}</p>
    </div>
)

const mapStatetoProps = (state,props)=> ({
    post: state.posts.find((post)=>(post.id===props.match.params.id))
})
export default connect(mapStatetoProps)(ReadPage)