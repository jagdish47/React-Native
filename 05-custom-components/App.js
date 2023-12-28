import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Platform, SafeAreaView } from "react-native";
import CustomButton from "./components/CustomButton";
export default function App() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Welcome</Text>
          <CustomButton title="Press me" onPress={() => alert("Pressed!")} />
        </View>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "plum",
  },
  container: {
    flex: 1,
    backgroundColor: "plum",
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
  box: {
    padding: 20,
  },
  text: {
    ...Platform.select({
      ios: {
        color: "purple",
      },
      android: {
        color: "green",
      },
    }),
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
