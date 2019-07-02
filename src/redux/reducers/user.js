import {
  apiCallRequest,
  apiCallSuccess,
  apiCallFailure,
  resetError
} from "../types/user";
import { deletingUserToken } from "../types/token";

const userState = {
  fetching: false,
  error: false,
  bio: null,
  repo: null,
  contrib: null
};

function userReducer(state = userState, { type, payload }) {
  switch (type) {
    case apiCallRequest: {
      return { ...state, error: false, fetching: true };
    }
    case apiCallSuccess: {
      const {
        name,
        avatarUrl,
        company,
        bio,
        repositories,
        repositoriesContributedTo
      } = payload.viewer;

      const user = {
        name,
        avatarUrl,
        company,
        bio,
        repoCount:
          repositories.totalCount + repositoriesContributedTo.totalCount
      };

      const repo = repositories.nodes;
      const contrib = repositoriesContributedTo.nodes;

      return {
        fetching: false,
        user,
        repo,
        contrib,
        error: false
      };
    }
    case apiCallFailure:
      return {
        ...state,
        fetching: false,
        error: true
      };
    case resetError:
      return { ...state, error: false };
    case deletingUserToken:
      return userState;
    default:
      return state;
  }
}

export default userReducer;
