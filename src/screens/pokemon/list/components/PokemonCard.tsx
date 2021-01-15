import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Pokemon } from "../../model/pokemon.model";
import {
  ButtonGroup,
  CardHeader,
  Divider,
  IconButton,
} from "@material-ui/core";
import { mdiGenderMale, mdiGenderFemale, mdiSparkles } from "@mdi/js";
import SvgIcon from "@material-ui/core/SvgIcon";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const getSprite = (
  pokemon: Pokemon,
  front: boolean,
  female: boolean,
  shiny: boolean
) => {
  if (front) {
    if (female) {
      if (shiny) {
        return pokemon.sprites?.front_shiny_female;
      } else {
        return pokemon.sprites?.front_female;
      }
    } else {
      if (shiny) {
        return pokemon.sprites?.front_shiny;
      } else {
        return pokemon.sprites?.front_default;
      }
    }
  } else {
    if (female) {
      if (shiny) {
        return pokemon.sprites?.back_shiny_female;
      } else {
        return pokemon.sprites?.back_female;
      }
    } else {
      if (shiny) {
        return pokemon.sprites?.back_shiny;
      } else {
        return pokemon.sprites?.back_default;
      }
    }
  }
};

export default function PokemonCard(props: { pokemon: Pokemon }) {
  const { pokemon } = props;
  const [female, setFemale] = useState(false);
  const [shiny, setShiny] = useState(false);
  const [front, setFront] = useState(true);
  const canBeFemale = pokemon.sprites?.front_female;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader title={pokemon.name} subheader='' />
      <CardContent>
        <img
          src={getSprite(pokemon, front, female, shiny)}
          alt={pokemon.name}
        />
      </CardContent>
      <Divider />
      <CardActions>
        <ButtonGroup color='primary' aria-label='button group'>
          <IconButton onClick={() => setShiny(!shiny)}>
            <SvgIcon color={shiny ? "primary" : "disabled"}>
              <path d={mdiSparkles} />
            </SvgIcon>
          </IconButton>
          <IconButton onClick={() => setFront(!front)}>
            <SwapHorizIcon color={!front ? "primary" : "disabled"} />
          </IconButton>
          {canBeFemale && (
            <IconButton onClick={() => setFemale(!female)}>
              <SvgIcon color={female ? "primary" : "disabled"}>
                <path d={mdiGenderFemale} />
              </SvgIcon>
            </IconButton>
          )}
        </ButtonGroup>
      </CardActions>
    </Card>
  );
}
