import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  FlatList,
} from "react-native";

export function HomeScreen() {
  const [todo, setTodo] = useState("");
  const [store, setStore] = useState([]);

  const handleTodo = () => {
    if (todo) {
      setStore((prevStore) => [{ id: Date.now(), text: todo }, ...prevStore]);
      setTodo("");
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <TextInput
          onChangeText={setTodo}
          value={todo}
          style={styles.input}
          placeholder="Enter Todo"
        />
        <Button onPress={() => handleTodo()} color="green" title="Add" />
      </View>

      <View style={styles.mainContainer}>
        <FlatList
          data={store}
          renderItem={({ item }) => (
            <View style={styles.listContainer}>
              <Text>{item.text}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "white",
    color: "black",
    padding: 5,
    paddingHorizontal: 10,
    width: 200,
    borderRadius: 5,
    marginRight: 5,
  },
  listContainer: {
    padding: 2,
    marginTop: 5,
    backgroundColor: "white",
    width: 400,
    alignItems: "center",
    borderRadius: 5,
  },
  mainContainer: {
    alignItems: "center",
  },
});
