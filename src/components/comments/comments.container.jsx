import { connect } from "react-redux";
import Comments from "./comments";
import { getCommentsByCommentId, addComment } from "./comments.actions";

const stateToProps = state => {
  return {
    comments: state.comments
  };
};

export default connect(
  stateToProps,
  { getCommentsByCommentId, addComment }
)(Comments);