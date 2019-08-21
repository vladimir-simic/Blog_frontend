import { connect } from "react-redux";
import About from "./about";

const stateToProps = state => ({
  user: state.about
});

export default connect(
  stateToProps,
  { }
)(About);