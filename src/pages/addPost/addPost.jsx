import React, { Component } from "react";

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
      <form onSubmit={this.onSubmit}>
        <div className='form-group'>
          <label htmlFor=''>Title</label>
          <input
            name='text'
            type='text'
            className='form-control'
            onChange={this.onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor=''>Photo</label>
          <input
            name='media'
            type='file'
            className='form-control'
            ref={this.fileInput}
          />
        </div>
        <button type='submit' className='btn btn-secondary float-right'>
          Add
        </button>
      </form>
    );
  }
}

export default AddPost;