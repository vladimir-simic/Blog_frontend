import axios from "axios";

const addPost = ( { title, text }) => async dispatch => {
  const formData = new FormData();
  formData.append("title", title);
  console.log([title]);

  const contentId = await axios
    .post("/posts", formData 
    // {
    //   headers: {
    //     authorization: `Bearer ${token}`,
    //     "Content-Type": "multipart/form-data"
    //   }
    // }
    )
    .then(response => {
      if (response && response.status === 200) {
        return response.data.payload.contentId;
      }
    });

  axios
    .post(
      `/posts`,
      {
        contentId,
        caption: text
      }
      // {
      //   headers: {
      //     authorization: `Bearer ${token}`
      //   }
      // }
    )
    .then(response => {
      if (response && response.status === 200) {
        dispatch({
          type: "CREATE_POST_SUCCESS",
          payload: response.data.payload
        });
      }
    });
};

export { addPost };