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