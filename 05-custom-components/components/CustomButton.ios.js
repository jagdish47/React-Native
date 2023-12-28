import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

const CustomButton = ({ onPress, title }) => {
  <Pressable onPress={onPress} style={styles.buttonContainer}>
    <Text>{title}</Text>
  </Pressable>;
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    color: "blue",
    fontSize: 18,
  },
});
