import { connect } from "react-redux";
import Photography from "./photography";

const stateToProps = state => ({
  user: state.user
});

export default connect(
  stateToProps,
  {  }
)(Photography);