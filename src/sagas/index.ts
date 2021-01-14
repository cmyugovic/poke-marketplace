import { all } from "redux-saga/effects";
import pokemon from "../screens/pokemon/saga";

export default function* rootSaga() {
  yield all([pokemon()]);
}
