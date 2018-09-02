import React from "react";
import { connect } from "react-redux";
import moment from "moment";

class PostForm extends React.Component {
    constructor(props){
        super(props)        
        this.state={
            title:props.post? props.post.title:"",
            body:props.post? props.post.body:"",
            error:"",
            createdAt: props.post ? moment(props.post.createdAt) : moment(),  
        }
    }
    onChangeTitle = (e)=>{
        const title = e.target.value
        this.setState(()=>({title}))
    }
    onChangeBody = (e)=>{
        const body = e.target.value
        this.setState(()=>({body}))
    }
    onSubmit = (e)=>{
        e.preventDefault()
        if (!this.state.title || !this.state.body) {
            this.setState(()=>({error:"Please provide a title and body for your Post."}))
        } else {
            this.setState(()=>({error:""}))
            this.props.onSubmit({
                title: this.state.title,
                body: this.state.body,
                createdAt: this.state.createdAt.valueOf()
            })
        }
    }
    render(){
        return (
            <form className="content-container form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <input 
                    type="text"
                    placeholder="Post Title"
                    value={this.state.title}
                    onChange={this.onChangeTitle}
                />
                <textarea 
                    placeholder="Post Body" 
                    value={this.state.body}
                    onChange={this.onChangeBody}   
                >
                </textarea>
                <button className="button button-save">Save Post</button>
            
            </form>
        )
    }
}



export default PostForm