import { handleActions, Action } from "redux-actions";
import { PokemonState } from "../model/pokemon.state";
import { Pokemon } from "../model/pokemon.model";
import { POKEMON } from "./pokemon.actions";

const initialState: PokemonState = {
  list: [],
  selected: undefined,
  loading: false,
};

export default handleActions<PokemonState, any>(
  {
    [POKEMON.GET_LIST_REQUEST]: (state): PokemonState => ({
      ...state,
      list: [],
      loading: true,
    }),
    [POKEMON.GET_LIST_SUCCESS]: (
      state,
      { payload }: Action<Pokemon[]>
    ): PokemonState => ({
      ...state,
      list: payload,
      loading: false,
    }),
    [POKEMON.GET_LIST_FAILURE]: (state): PokemonState => ({
      ...state,
      list: [],
      loading: false,
    }),
    [POKEMON.GET_REQUEST]: (state): PokemonState => ({
      ...state,
      selected: undefined,
      loading: true,
    }),
    [POKEMON.GET_SUCCESS]: (
      state,
      { payload }: Action<Pokemon>
    ): PokemonState => ({
      ...state,
      selected: payload,
      loading: false,
    }),
    [POKEMON.GET_FAILURE]: (state, { error }): PokemonState => ({
      ...state,
      selected: undefined,
      loading: false,
    }),
  },
  initialState
);
