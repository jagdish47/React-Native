import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

import { useSelector } from "react-redux";

const Header = () => {
  const cartData = useSelector((state) => state.reducer);
  console.log(cartData);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Total Product : {cartData.length}{" "}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3498db", // Set your desired background color
    paddingTop: 10,
  },
  header: {
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "#fff", // Set your desired text color
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Header;
