import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  FlatList,
  SectionList,
} from "react-native";
import pokemonList from "./data.json";
import groupedData from "./grouped-data.json";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* {pokemonList.map((pokemon, idx) => (
          <View style={styles.card} key={idx}>
            <Text>{pokemon.type}</Text>
            <Text>{pokemon.name}</Text>
          </View>
        ))} */}

      {/* <FlatList
        data={pokemonList}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>{item.type}</Text>
            <Text>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={
          <View
            style={{
              height: 16,
            }}
          />
        }
        ListEmptyComponent={<Text>No Items Found</Text>}
        ListHeaderComponent={<Text>Pokemon List</Text>}
        ListFooterComponent={<Text>End of Pokemon List</Text>}
        // horizontal
      /> */}

      <SectionList
        sections={groupedData}
        renderItem={({ item }) => {
          return (
            <View style={styles.card}>
              <Text style={styles.cardText}>{item}</Text>
            </View>
          );
        }}
        renderSectionHeader={({ section }) => <Text>{section.type}</Text>}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        SectionSeparatorComponent={() => <View style={{ height: 16 }} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    borderWidth: 2,
    padding: 5,
    width: "40%",
    marginTop: 4,
    alignItems: "center",
    justifyContent: "center",
  },
});
