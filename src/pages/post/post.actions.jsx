import axios from "axios";

const getPostList = (postId) => dispatch => {
  axios
    .get(`/posts/${postId}`)
    .then(response => {
      if (response && response.status === 200) {
        const payload = response.data[0];
        dispatch({
          type: "GET_MEDIA",
          payload
        });
      }
    });
};

export { getPostList };