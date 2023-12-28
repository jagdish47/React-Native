import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useLayoutEffect } from "react";

const AboutScreen = ({ navigation, route }) => {
  const { name } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [navigation, name]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Screen</Text>
      <Text>{name}</Text>
      <Button
        onPress={() => {
          navigation.navigate("Home");
        }}
        title="Go To Home"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default AboutScreen;
