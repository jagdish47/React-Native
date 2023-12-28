import { View, Text, StyleSheet, SafeAreaView } from "react-native";

export default function App() {
  <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Hello World</Text>
      </View>
    </View>
    ;
  </SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
  },
  box: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
