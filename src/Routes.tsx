import React from "react";
import { useRoutes } from "react-router-dom";
import pokemonRoutes from "./screens/pokemon/routes";
const routes = [pokemonRoutes, { path: "*", element: <div>404</div> }];

const AppRoutes = () => {
  const element = useRoutes(routes);
  return element;
};

export default AppRoutes;
