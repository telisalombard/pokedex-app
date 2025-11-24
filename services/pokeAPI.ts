import { fetch } from 'expo/fetch';
import { NamedAPIResourceList, Pokemon } from './pokeAPI.type';

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

export const getPokemon = async (id: number) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    headers: { Accept: 'text/event-stream' },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch user");
    }

    const data = await response.json();
    const pokemon: Pokemon = mapPokemon(data);

    return pokemon;
};

export const mapPokemon = (data: any): Pokemon => {
    return {
        id: data.id,
        name: data.name,
        height: data.height,
        weight: data.weight,
        base_experience: data.base_experience,
        abilities: data.abilities.map((a: any) => a.ability.name),
        forms: data.forms.map((f: any) => f.name),
        stats: data.stats.map((s: any) => ({
        base_stat: s.base_stat,
        effort: s.effort,
        name: s.stat.name,
        })),

        types: data.types.map((t: any) => t.type.name),
    };
}