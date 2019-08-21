import { connect } from "react-redux";
import Posts from "./posts";
import { getPostsList } from "./posts.actions";

const stateToProps = state => {
  return {
    user: state.user,
    posts: state.getPostsList
  };
};

export default connect(
  stateToProps,
  { getPostsList }
)(Posts);