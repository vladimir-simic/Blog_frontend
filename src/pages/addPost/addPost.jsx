import React, { Component } from "react";
import Logo from "../../components/logo/logo";
import "./addPost.css";

class AddPost extends Component {
  state = {
    text: "",
    media: ""
  };

  fileInput = React.createRef();

  onChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = event => {
    event.preventDefault();
    const media = this.fileInput.current.files[0];
    if (!media) {
      console.log("Media is required");
      return;
    }
    const { text } = this.state;
    this.props.addPost(this.props.user, { text, media });
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
              type='text'
              onChange={this.onChange}
            />
          </div>
          <div className="media">
            <input
              name='mediaz'
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