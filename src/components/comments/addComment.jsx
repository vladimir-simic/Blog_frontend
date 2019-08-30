import React from "react";
import "./addComment.css";

const AddComment = props => {
  const { onSubmit, onChange } = props;
  return (
    <form onSubmit={onSubmit} className="add_comment_form">
      <div>
        <div className="addComment-title">
            <input
              name='title'
              id='title'
              type='title'
              placeholder='Title'
              onChange={onChange}
            />
          </div>
        <textarea name='message'
                  id='message'
                  type='message'
                  placeholder='Your message' 
                  onChange={onChange} className='add_comment_area' />
        <div className="addComment-author">
            <input
              name='author'
              id='author'
              type='author'
              placeholder='Your name'
              onChange={onChange}
            />
          </div>
          <div className="addComment-email">
            <input
              name='author_email'
              id='author_email'
              type='author_email'
              placeholder='Your email'
              onChange={onChange}
            />
          </div>
      </div>
      <button type='submit' className='btn'>
        Add Comment
      </button>
    </form>
  );
};

export default AddComment;