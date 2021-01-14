import { Pokemon } from "./pokemon.model";

export type PokemonState = {
  list: Pokemon[];
  selected?: Pokemon;
  loading: boolean;
};
