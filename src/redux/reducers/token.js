import { storingUserToken, deletingUserToken } from "../types/token";

const token = window.localStorage.getItem("github token");

const tokenState = {
  token: token || ""
};

function tokenReducer(state = tokenState, action) {
  switch (action.type) {
    case storingUserToken: {
      return { token: action.payload };
    }
    case deletingUserToken: {
      window.localStorage.removeItem("github token");
      return { token: "" };
    }
    default:
      return state;
  }
}

export default tokenReducer;
