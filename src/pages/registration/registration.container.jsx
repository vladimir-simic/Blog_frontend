import { connect } from "react-redux";
import Registration from "./registration";
import { registerUser } from "./registration.actions";

const stateToProps = state => ({
  user: state.user,
  isRegistered: state.isRegistered
});

export default connect(
  stateToProps,
  { registerUser }
)(Registration);