import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, ScrollView, Button, Pressable, ActivityIndicator } from "react-native";
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';
import { getPokemon } from "../services/pokeAPI";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Pokemon } from "../services/pokeAPI.type";
import PokemonCard from "../components/PokemonCard";

export default function PokemonDetailsScreen() {
  type PokemonDetailsRouteProp = RouteProp<RootStackParamList, 'PokemonDetails'>;
  const route = useRoute<PokemonDetailsRouteProp>();
  const { pokemonId } = route.params;

  const [pokemon, setPokemon] = useState<Pokemon>();
  const [loading, setLoading] = useState<boolean>(true);

  const loadPokemonDetails = async (pokemonId: number) => {
    try {
      const pokemonDetails = await getPokemon(pokemonId);
      setPokemon(pokemonDetails);
      console.log("Successfully loaded pokemon details for ", pokemonDetails.name);
    } catch (error) {
      console.error("Error loading pokemon details:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadPokemonDetails(pokemonId);
  }, []);

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1 }}>
          {loading ? (
            <View style={styles.loaderContainer}>
              <ActivityIndicator size="large"/>
            </View>
          ) : (
            <ScrollView showsVerticalScrollIndicator={false}>

              <PokemonCard heading={`${pokemonId}.  ${pokemon?.name} Details`} />

              <PokemonCard subheading="Base Stats">
                <Text style={styles.text}>Height: {pokemon?.height}</Text>
                <Text style={styles.text}>Weight: {pokemon?.weight}</Text>
                <Text style={styles.text}>Base Experience: {pokemon?.base_experience}</Text>
              </PokemonCard>

              <PokemonCard subheading="Abilities">
                {pokemon?.abilities.map((ability, index) => (
                  <Text key={index} style={styles.text}>
                    {index + 1}. {ability}
                  </Text>
                ))}
              </PokemonCard>

              <PokemonCard subheading="Forms">
                {pokemon?.forms.map((form, index) => (
                  <Text key={index} style={styles.text}>
                    {index + 1}. {form}
                  </Text>
                ))}
              </PokemonCard>

              <PokemonCard subheading="Stats">
                {pokemon?.stats.map((stat, index) => (
                  <Text key={index} style={styles.text}>
                    {index + 1}. {stat.name}: {stat.base_stat} (Effort: {stat.effort})
                  </Text>
                ))}
              </PokemonCard>

              <PokemonCard subheading="Types">
                {pokemon?.types.map((type, index) => (
                  <Text key={index} style={styles.text}>
                    {index + 1}. {type}
                  </Text>
                ))}
              </PokemonCard>
            </ScrollView>

          )}

          <View style={styles.buttonContainer}>
            <Pressable onPress={() => navigation.goBack()} style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Back</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginInline: 20,
    paddingHorizontal: 10,
  },
  text: {
    textTransform: 'capitalize',
  },
  buttonContainer: {
    marginVertical: 10,
    backgroundColor: '#d8d8d8ff',
    borderRadius: 20,
    width: '70%',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#000000',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5,
    fontSize: 18,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});