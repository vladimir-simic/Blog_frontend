import axios from "axios";

// const getPostsList = ({ token }) => dispatch => {
  const getPostsList = () => dispatch => {
  axios
    // .get("/api/v1/media/", {
    //   headers: {
    //     authorization: `Bearer ${token}`
    //   }
    // })
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