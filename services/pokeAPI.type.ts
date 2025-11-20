export interface NamedAPIResourceList {
  count: number;
  next: string | null;
  previous: string | null;
  results: NamedAPIResource[]; 
}

export interface NamedAPIResource {
  name: string;
}