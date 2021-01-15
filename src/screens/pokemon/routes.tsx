import React from "react";
import PokemonList from "./list/List";
const routes: any = {
  path: "/",
  children: [{ path: "/", element: <PokemonList /> }],
};
export default routes;
