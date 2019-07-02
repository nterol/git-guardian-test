import { connect } from "react-redux";

import { storingUserToken } from "../../redux/types/token";
import { resetError } from "../../redux/types/user";

const mapState = ({ token: { token }, user: { fetching, error } }) => ({
  token,
  fetching,
  error
});

const mapDispatch = dispatch => ({
  storeToken: token => dispatch({ type: storingUserToken, payload: token }),
  resetError: () => dispatch({ type: resetError })
});

const Connect = connect(
  mapState,
  mapDispatch
);

export default Connect;
