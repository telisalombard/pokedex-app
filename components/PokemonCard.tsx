import { View, Text, StyleSheet } from "react-native";
import { IndexedPokemon } from "../services/pokeAPI.type";

const PokemonCard = ({ pokemon }: { pokemon: IndexedPokemon }) => (
  <View style={styles.card}>
    <Text>{pokemon.id}  {pokemon.name}</Text>
  </View>
);

const styles = StyleSheet.create({
    card: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#d8d8d8ff',
        borderRadius: 5,
        shadowColor: '#000',
    }
});

export default PokemonCard;