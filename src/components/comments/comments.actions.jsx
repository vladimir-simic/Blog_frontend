import axios from "axios";

const getCommentsByCommentId = (contentId) => dispatch => {
  axios
    .get(`/posts/${contentId}/comments/`)
    .then(response => {
      if (response && response.status === 200) {
        const { payload } = response.data;
        dispatch({
          type: "GET_COMMENTS",
          payload: payload.contentId
        });
      }
    });
};

const addComment = (contentId, message) => dispatch => {
  axios
    .post(`/comments/posts/${contentId}/comments/`, message)
    .then(response => {
      if (response && response.status === 201) {
        dispatch({
          type: "ADD_COMMENT"
        });
      }
    });
};

export { getCommentsByCommentId, addComment };