import { call, put, takeLatest, fork, all } from "redux-saga/effects";
import api from "../../../helpers/api";
import { POKEMON } from "../reducer/pokemon.actions";
import { Action } from "redux-actions";
import { Pokemon } from "../model/pokemon.model";

function* getList() {
  yield takeLatest(POKEMON.GET_LIST_REQUEST, function* () {
    try {
      const response = yield call(api.get, `/pokemon?limit=50`);
      const promises: any = [];
      response.data.results.forEach(async (pokemon: Pokemon) => {
        promises.push(call(api.get, `/pokemon/${pokemon.name}`));
      });
      const results = yield all(promises);

      yield put({
        type: POKEMON.GET_LIST_SUCCESS,
        payload: results.map((result: any) => result.data),
      });
    } catch (e) {
      yield put({ type: POKEMON.GET_LIST_FAILURE, error: e });
    }
  });
}

function* get() {
  yield takeLatest(
    POKEMON.GET_REQUEST,
    function* ({ payload }: Action<{ pokemonId: string }>) {
      const { pokemonId } = payload;
      try {
        const response = yield call(api.get, `/pokemon/${pokemonId}`);
        yield put({
          type: POKEMON.GET_SUCCESS,
          payload: response.data,
        });
      } catch (e) {
        yield put({ type: POKEMON.GET_FAILURE, error: e });
      }
    }
  );
}

export default function* saga() {
  yield fork(getList);
  yield fork(get);
}
