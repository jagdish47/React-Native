import { View, Text, StyleSheet } from "react-native";
import Box from "./components/Box";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text style={styles.title}>Hello World</Text>
    //   <Text style={[styles.title, styles.changes]}>Another One</Text>
    // </View>

    <View style={styles.container}>
      <Box style={{ backgroundColor: "#8e8b00" }}>Box 1</Box>
      <Box style={{ backgroundColor: "#7e8b00" }}>Box 2</Box>
      <Box style={{ backgroundColor: "#6e8b00" }}>Box 3</Box>
      <Box style={{ backgroundColor: "#5e8b00" }}>Box 4</Box>
      {/* <Box style={{ backgroundColor: "#4e8b00" }}>Box 5</Box>
      <Box style={{ backgroundColor: "#3e8b00" }}>Box 6</Box>
      <Box style={{ backgroundColor: "#2e8b00" }}>Box 7</Box> */}
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64,
    borderWidth: 5,
    borderColor: "red",
  },
});
