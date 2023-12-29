import { takeEvery } from "redux-saga/effects";

function* userList() {
  const url = "http://dummyjson.com/users";
  try {
    let data = yield fetch(url);
    data = yield data.json();
    console.log("Data in Saga", data);
    // Dispatch an action with the data if needed
  } catch (error) {
    console.error("Error in userList saga", error);
    // Handle the error, dispatch an error action, or do other error handling
  }
}

function* sagaData() {
  yield takeEvery("FETCH_USER_LIST", userList);
  // Replace "FETCH_USER_LIST" with the actual action type you want to listen for
}

export default sagaData;
