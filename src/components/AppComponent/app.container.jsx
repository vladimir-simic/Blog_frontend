import { connect } from "react-redux";
import logout from "./app.actions";
import App from "./App";

const stateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  stateToProps,
  { logout }
)(App);