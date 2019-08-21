import { connect } from "react-redux";
import AddPost from "./addPost";
import { addPost } from "./addPost.actions";

const stateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  stateToProps,
  { addPost }
)(AddPost);