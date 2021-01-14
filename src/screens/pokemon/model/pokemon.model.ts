export type Pokemon = {
  id?: string;
  name?: string;
  sprites?: {
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
  };
  image?: string;
};
