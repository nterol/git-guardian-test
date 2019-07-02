import { connect } from "react-redux";
import { apiCallRequest } from "../../redux/types/user";

const mapState = ({
  token: { token },
  user: { fetching, error, user, repo, contrib }
}) => ({
  token,
  fetching,
  error,
  user,
  repo,
  contrib
});

const mapDispatch = dispatch => ({
  queryUserData: () => {
    dispatch({ type: apiCallRequest });
  }
});

const connector = connect(
  mapState,
  mapDispatch
);

export default connector;
