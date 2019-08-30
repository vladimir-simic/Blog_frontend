import React, { Component } from "react";
import Logo from "../../components/logo/logo";
import "./addPost.css";

class AddPost extends Component {
  state = {
    title: "",
    content: ""
  };

  onChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = event => {
    event.preventDefault();
    const { title, content, author } = this.state;
    this.props.addPost({ title, content, author });
  };

  render() {
    return (
      <div>
        <Logo />
        <form onSubmit={this.onSubmit} className="add_post_form">
          <div className="addPost-title">
            <input
              name='title'
              id='title'
              type='title'
              placeholder='Title'
              onChange={this.onChange}
            />
          </div>
          <div className="addPost-content">
            <textarea
              name='content'
              id='content'
              type='content'
              placeholder='Content'
              onChange={this.onChange}
            />
          </div>
          <div className="addPost-author">
            <input
              name='author'
              id='author'
              type='author'
              placeholder='Author'
              onChange={this.onChange}
            />
          </div>
          <button type='submit' className='btn'>
            Add
          </button>
        </form>
      </div>
      
    );
  }
}

export default AddPost;