import { connect } from "react-redux";
import { getPhotosList } from "./photography.actions";
import Photography from "./photography";

const stateToProps = state => ({
  user: state.user
});

export default connect(
  stateToProps,
  { getPhotosList }
)(Photography);