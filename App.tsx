import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { injectId, listPokemons } from './services/pokeAPI';
import { use, useEffect, useState } from 'react';
import { IndexedPokemon, NamedAPIResourceList } from './services/pokeAPI.type';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import PokemonCard from './components/PokemonCard';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
    
  );
}


