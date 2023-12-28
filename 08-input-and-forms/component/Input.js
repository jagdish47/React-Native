import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TextInput,
  Switch,
} from "react-native";

export default function App() {
  const [name, setName] = useState("");
  const [isDarkMode, setDarkMode] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="email@example.com "
        // autoCorrect={true}
        autoCapitalize="none"
        secureTextEntry
        keyboardType="numeric"
      />
      <TextInput
        style={[styles.input, styles.multiline]}
        placeholder="Message"
        multiline
      />
      <View style={isDarkMode ? styles.switchContainer : ""}>
        <Text>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => setDarkMode((prevState) => !prevState)}
          trackColor={{ false: "#767577", true: "lightblue" }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: StatusBar.currentHeight,
  },
  input: {
    width: "100%",
    height: 30,
    margin: 20,
    padding: 5,
    borderWidth: 2,
  },
  multiline: {
    height: 60,
    textAlignVertical: "top",
  },
  switchContainer: {
    flexDirection: "row",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});
