import axios from "axios";

  const getPostsList = () => dispatch => {
  axios
    .get("/posts")
    .then(response => {
      if (response && response.status === 200) {
        const payload = response.data;
        dispatch({
          type: "GET_MEDIA_LIST",
          payload
        });
      }
    });
};

export { getPostsList };