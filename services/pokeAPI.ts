import { fetch } from 'expo/fetch';
import { NamedAPIResourceList } from './pokeAPI.type';

export const listPokemons = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=2000&offset=0', {
    headers: { Accept: 'text/event-stream' },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch user");
    }

    return response.json() as Promise<NamedAPIResourceList>;
};

export const injectId = (results: any[]) => {
    return results.map((item) => {
        const id = item.url.split('/').filter(Boolean).pop();
        return {
            ...item,
            id: Number(id),
        };
    });
};