import { fetch } from 'expo/fetch';
import { NamedAPIResourceList } from './pokeAPI.type';

export const listPokemons = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0', {
    headers: { Accept: 'text/event-stream' },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch user");
    }

    return response.json() as Promise<NamedAPIResourceList>;
};
