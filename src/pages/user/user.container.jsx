import { connect } from "react-redux";
import { getSelfInfo } from "./user.actions";
import User from "./user";

const stateToProps = state => ({
  user: state.user
});

export default connect(
  stateToProps,
  { getSelfInfo }
)(User);