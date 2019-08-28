import axios from "axios";

const getCommentsByContentId = (contentId) => dispatch => {
  axios
    .get(`/posts/${contentId}/comments/` 
    // {
    //   headers: {
    //     authorization: `Bearer ${token}`
    //   }
    // }
    )
    .then(response => {
      if (response && response.status === 200) {
        const { payload } = response.data;
        dispatch({
          type: "GET_COMMENTS",
          payload: payload.comments
        });
      }
    });
};

const addComment = (contentId, text) => dispatch => {
  axios
    .post(`/posts/${contentId}/comments/`, text
    // {
    //   headers: {
    //     authorization: `Bearer ${token}`
    //   }
    // }
    )
    .then(response => {
      if (response && response.status === 201) {
        dispatch({
          type: "ADD_COMMENT"
        });
      }
    });
};

export { getCommentsByContentId, addComment };