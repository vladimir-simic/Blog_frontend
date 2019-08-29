import React, { Component } from "react";
import Logo from "../../components/logo/logo";
import "./addPost.css";

class AddPost extends Component {
  state = {
    title: "",
    content: ""
    // media: ""
  };

  // fileInput = React.createRef();

  onChange = event => {
    const { name, value } = event.target;
    // console.log([name, value]);
    this.setState({ [name]: value });
    // console.log(this.state)
  };

  onSubmit = event => {
    event.preventDefault();
    // const media = this.fileInput.current.files[0];
    
    // if (!media) {
    //   console.log("Media is required");
    //   return;
    // }
    const { title, content, author } = this.state;
    
    console.log(this.state)
    this.props.addPost({ title, content, author });
  };

  render() {
    return (
      <div>
        <Logo />
        <form onSubmit={this.onSubmit} className="add_post_form">
          <div className="addPost-title">
            {/* <label htmlFor='title'>Title</label> */}
            <input
              name='title'
              id='title'
              type='title'
              placeholder='Title'
              onChange={this.onChange}
            />
          </div>
          <div className="addPost-content">
            {/* <label htmlFor='content'>Content</label> */}
            <textarea
              name='content'
              id='content'
              type='content'
              placeholder='Content'
              onChange={this.onChange}
            />
          </div>
          <div className="addPost-author">
            {/* <label htmlFor='content'>Author</label> */}
            <input
              name='author'
              id='author'
              type='author'
              placeholder='Author'
              onChange={this.onChange}
            />
          </div>
          {/* <div className="media">
            <input
              name='media'
              type='file'
              ref={this.fileInput}
            />
          </div> */}
          <button type='submit' className='btn'>
            Add
          </button>
        </form>
      </div>
      
    );
  }
}

export default AddPost;