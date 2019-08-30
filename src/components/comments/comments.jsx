import React, { Component } from "react";
import AddComment from "./addComment";

class Comments extends Component {
  state = {
    title: "",
    message: "",
    author: "",
    author_email: "",
    post_id: ""
  };

  componentDidMount() {
    this.props.getCommentsByCommentId(this.props.contentId);
  }

  onChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = event => {
    event.preventDefault();
    if (this.state.message.length < 10) {
      console.log("Min length 10 char");
      return;
    }

  
    const {title, message, author, author_email, post_id} = this.state;
    this.props.addComment({title, message, author, author_email, post_id});
  
  };
  

  render() {
    const { comments } = this.props;
    return (
      <div>
        <ul>
          {comments.map((comment, _id) => {
            const dateObj = new Date(comment.created_at);
            const date = `${dateObj.getDay()}/${dateObj.getMonth()}/${dateObj.getFullYear()} ${dateObj.getHours()}:${dateObj.getMinutes()}`;
            return (
              <li key={_id}> 
                <h3>
                  {comment.title} {comment.author} {date} : {comment.message}
                  
                </h3>
              </li>
            );
          })}
        </ul>
        <AddComment onChange={this.onChange} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default Comments;