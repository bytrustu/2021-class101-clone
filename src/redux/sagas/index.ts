import { all, fork } from "redux-saga/effects";
import axios from "axios";
import productSaga from "../sagas/productSaga";

export default function* rootSaga() {
  yield all([fork(productSaga)]);
}
