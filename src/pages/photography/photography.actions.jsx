import axios from "axios";
import { error } from "react-notification-system-redux";

const getPhotosList = () => dispatch => {
  axios
    .get("/api/v1/media")
    .then(response => console.log(response))
    .catch(err => {
      dispatch(
        error({
          title: "Auth failed, check email or password",
          message: err.response.error,
          position: "tc"
        })
      );
    });
};

export { getPhotosList };