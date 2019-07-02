import { takeLatest, call, put, select } from "redux-saga/effects";

import queryUserData from "../api";

import { apiCallRequest, apiCallSuccess, apiCallFailure } from "../types/user";

const getToken = state => state.token.token;

function* workerSaga() {
  try {
    const token = yield select(getToken);
    const oauth = { Authorization: `bearer ${token}` };
    const {
      data: { data }
    } = yield call(queryUserData, oauth);
    const payload = data;

    yield put({ type: apiCallSuccess, payload });
  } catch (error) {
    yield put({ type: apiCallFailure, error });
  }
}

function* watcherSaga() {
  yield takeLatest(apiCallRequest, workerSaga);
}

export default watcherSaga;
