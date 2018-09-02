import React from "react";
import { connect } from "react-redux";
import moment from "moment";

const ReadPage = (props) => (
    <div>
        <h1 className="read-header">Read this Blog Post</h1>
        <div className="content-container read-post">
            <h2 className="read-title">{props.post.title.toUpperCase()}</h2>
            <p className="read-body">{props.post.body}</p>
            <div className="read-date">
                <p>{moment(props.post.createdAt).format('MMMM Do YYYY, h:mm a')}</p>
            </div>
        </div>
    </div>
)

const mapStatetoProps = (state,props)=> ({
    post: state.posts.find((post)=>(post.id===props.match.params.id))
})
export default connect(mapStatetoProps)(ReadPage)