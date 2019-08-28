import React, { Component } from "react";
import Logo from "../../components/logo/logo";
import "./addPost.css";

class AddPost extends Component {
  state = {
    title: "",
    media: ""
  };

  fileInput = React.createRef();

  onChange = event => {
    const { name, value } = event.target;
    // console.log([name, value]);
    this.setState({ [name]: value });
    // console.log(this.state)
  };

  onSubmit = event => {
    event.preventDefault();
    const media = this.fileInput.current.files[0];
    
    if (!media) {
      console.log("Media is required");
      return;
    }
    const { title } = this.state;
    
    // console.log(this.state)
    this.props.addPost({ title, media });
  };

  render() {
    return (
      <div>
        <Logo />
        <form onSubmit={this.onSubmit} className="add_post_form">
          <div className="addPost-title">
            <label htmlFor='title'>Title</label>
            <input
              name='title'
              id='title'
              type='text'
              onChange={this.onChange}
            />
          </div>
          <div className="media">
            <input
              name='media'
              type='file'
              ref={this.fileInput}
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