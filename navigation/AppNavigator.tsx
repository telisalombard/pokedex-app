import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import PokemonDetails from "../screens/PokemonDetails";

export type RootStackParamList = {
  Home: undefined;
  PokemonDetails: { pokemonId: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="PokemonDetails" component={PokemonDetails} options={{ title: "Pokemon Details" }}/>
    </Stack.Navigator>
  );
}
