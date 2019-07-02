import { connect } from "react-redux";

import { deletingUserToken } from "../../redux/types/token";

const mapDispatch = dispatch => ({
  changeUser: () => dispatch({ type: deletingUserToken })
});

const connector = connect(
  null,
  mapDispatch
);

export default connector;
