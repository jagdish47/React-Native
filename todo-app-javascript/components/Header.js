import { View, Text, StyleSheet } from "react-native";
const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo Application</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 3,
    alignItems: "center",
  },
  header: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
});
