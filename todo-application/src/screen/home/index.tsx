import { View, Text, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Home</Text>
      <Pressable
        onPress={() => {
          navigation.navigate("CreateTask");
        }}
      >
        <Text>Navigate to create task</Text>
      </Pressable>
    </View>
  );
};

export default Home;
