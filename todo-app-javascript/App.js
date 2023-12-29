import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import { HomeScreen } from "./screen/HomeScreen";
export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <StatusBar style="auto" backgroundColor="#494F55" />
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#494F55",
  },
});
