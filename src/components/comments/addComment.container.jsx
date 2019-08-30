import { connect } from "react-redux";
import AddComment from "./addComment";
import { addComent } from "./addComment.actions";

const stateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  stateToProps,
  { addComent }
)(AddComment);