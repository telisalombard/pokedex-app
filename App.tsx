import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { listPokemons } from './services/pokeAPI';
import { use, useEffect, useState } from 'react';
import { NamedAPIResourceList } from './services/pokeAPI.type';

export default function App() {
  const [items, setItems] = useState<NamedAPIResourceList>();
  
  const loadPokemons = async () => {
    try {
      const pokemons = await listPokemons();
      setItems(pokemons);
      console.log(pokemons);
    } catch (error) {
      console.error("Error loading pokemons:", error);
    }
  }
  
  useEffect(() => {
    loadPokemons();
  }, []);

  return (
    <View style={styles.container}>
      {items ? (
        items.results.map((item, index) => (
        <Text key={index}>{item.name}</Text>
      ))
      ) : (
        <Text>Loading...</Text>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
