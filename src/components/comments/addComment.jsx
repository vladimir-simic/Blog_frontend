import React from "react";
import "./addComment.css";

const AddComment = props => {
  const { onSubmit, onChange } = props;
  return (
    <form onSubmit={onSubmit} className="add_comment_form">
      <div>
        <label htmlFor=''>Leave comment</label>
        <textarea name='text' onChange={onChange} className='add_comment_area' />
      </div>
      <button type='submit' className='btn'>
        Add Comment
      </button>
    </form>
  );
};

export default AddComment;