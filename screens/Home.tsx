import { View, Text, Pressable } from "react-native";
import { IndexedPokemon } from "../services/pokeAPI.type";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FlatList, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { use, useEffect, useState } from 'react';
import PokemonCard from "../components/PokemonCard";
import { injectId, listPokemons } from "../services/pokeAPI";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator'; 

export default function HomeScreen() {
  const [items, setItems] = useState<IndexedPokemon[]>([]);
  
  const loadPokemons = async () => {
    try {
      const pokemons = await listPokemons();
      const pokemonsWithIds = injectId(pokemons.results);
      setItems(pokemonsWithIds);
      console.log("Successfully loaded pokemons");
    } catch (error) {
      console.error("Error loading pokemons:", error);
    }
  }
  
  useEffect(() => {
    loadPokemons();
  }, []);

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
            <FlatList
            data={items}
            renderItem={({ item }: { item: IndexedPokemon }) => (
                <Pressable
                  onPress={() => {
                    console.log(`Pressed on ${item.name}`);
                    navigation.navigate('PokemonDetails', { pokemonId: item.id });
                  }}
                >
                  <PokemonCard>
                    <Text style={styles.text}>{item.id}   {item.name}</Text>
                  </PokemonCard>
                </Pressable>
            )}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ paddingHorizontal: 10 }}
            />
            <StatusBar style="auto" />
        </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginInline: 20,
  },
  text: {
    textTransform: 'capitalize',
  }
});