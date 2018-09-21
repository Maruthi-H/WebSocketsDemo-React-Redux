import { put, takeLatest, all } from "redux-saga/effects";

function* fetchWorkflows() {
  const json = yield fetch("http://localhost:9090/api/workflows").then(
    response => response.json()
  );
  yield put({ type: "WORKFLOWS_RECEIVED", workflows: json.workflows });
}

//this is not necessary though
function* updateWorkflowStatus(action) {
  debugger;
  yield put({ type: "WORKFLOWS_RECEIVED", workflows: action.payload.workflows });
}

function* actionWatcher() {
  yield takeLatest("GET_WORKFLOWS", fetchWorkflows);
  yield takeLatest("UPDATE_WORKFLOW_STATUS", updateWorkflowStatus);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
