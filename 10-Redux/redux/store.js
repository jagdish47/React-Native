import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import SagaData from "./saga";
const saga = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: () => [saga],
});

saga.run(SagaData);

export default store;
