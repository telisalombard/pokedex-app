import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { injectId, listPokemons } from './services/pokeAPI';
import { use, useEffect, useState } from 'react';
import { IndexedPokemon, NamedAPIResourceList } from './services/pokeAPI.type';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
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

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={items}
          renderItem={({ item }: { item: IndexedPokemon }) => (
            <Item title={item.name} id={item.id} />
          )}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingHorizontal: 10 }}
        />
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const Item = ({ title, id }: { title: string; id: number }) => (
  <View>
    <Text>{id} {title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginInline: 20,
  },
});
