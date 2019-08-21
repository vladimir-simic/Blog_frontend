import { connect } from "react-redux";
import Login from "./login";
import { loginUser } from "./login.actions";

const stateToProps = state => ({
  user: state.user
});

export default connect(
  stateToProps,
  { loginUser }
)(Login);