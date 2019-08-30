const addComment = (state = {}, action) => {
    if (action.type === "CREATE_COMMENT_SUCCESS") {
      return action.payload;
    }
    return state;
  };
  
  export default addComment;