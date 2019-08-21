import { connect } from "react-redux";
import Comments from "./comments";
import { getCommentsByContentId, addComment } from "./comments.actions";

const stateToProps = state => {
  return {
    user: state.user,
    comments: state.comments
  };
};

export default connect(
  stateToProps,
  { getCommentsByContentId, addComment }
)(Comments);