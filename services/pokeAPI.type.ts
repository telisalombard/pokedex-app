export type NamedAPIResourceList = {
  count: number;
  next: string | null;
  previous: string | null;
  results: IndexedPokemon[]; 
}

export type IndexedPokemon = {
    id: number;
    name: string;
    url: string;
}

export type Pokemon = {
    id: number;
    name: string;
    height: number;
    weight: number;
    base_experience: number;
    abilities: string[];
    forms: string[];
    stats: PokemonStat[];
    types: string[];
}

export type PokemonStat = {
  base_stat: number;
  effort: number;
  name: string;
};