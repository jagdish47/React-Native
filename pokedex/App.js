import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [firstGenPokemon, setFirstGenPokemon] = useState([]);

  const pokePath = "https://pokeapi.co/api/v2/";
  const pokeQuery = "pokemon?limit=151&offset=0";
  const firstGenPokemonPath = `${pokePath}${pokeQuery}`;

  const fetchPokemon = async () => {
    const response = await fetch(firstGenPokemonPath);
    const data = await response.json();
    setFirstGenPokemon(data);
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
