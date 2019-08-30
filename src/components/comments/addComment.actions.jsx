import axios from "axios";

const addComment = ( { title, message, author, author_email, post_id }) => async dispatch => {

  const contentId = await axios
    .post(`/comments/`)
    .then(response => {
      if (response && response.status === 200) {
        return response.data.payload.contentId;
      }
    });

  axios
    .post(
      `/posts/${contentId}/comments/`,
      {
        contentId,
        title,
        message,
        author,
        author_email,
        post_id
      }
    )
    .then(response => {
      if (response && response.status === 200) {
        dispatch({
          type: "CREATE_COMMENT_SUCCESS",
          payload: response.data.payload
        });
      }
    });
};

export default addComment;