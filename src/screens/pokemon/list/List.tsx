import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import PokemonCard from "./components/PokemonCard";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../reducers/root.interface";
import { POKEMON } from "../reducer/pokemon.actions";

const useStyles = makeStyles({
  root: { margin: "1em" },
});

export default function PokemonList() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const pokemonState = useSelector((state: RootState) => state.pokemon);
  const { loading, list } = pokemonState;

  useEffect(() => {
    dispatch({
      type: POKEMON.GET_LIST_REQUEST,
    });
  }, [dispatch]);
  if (loading) return <></>;
  return (
    <Grid container spacing={5} className={classes.root}>
      {list.map((pokemon) => (
        <Grid item>
          <PokemonCard pokemon={pokemon} />
        </Grid>
      ))}
    </Grid>
  );
}
