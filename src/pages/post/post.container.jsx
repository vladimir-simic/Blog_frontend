import { connect } from "react-redux";
import Post from "./post";
import { getPostList } from "./post.actions";

const stateToProps = state => {
  return {
    user: state.user,
    post: state.getPostList
  };
};

export default connect(
  stateToProps,
  { getPostList }
)(Post);