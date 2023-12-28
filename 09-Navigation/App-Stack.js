import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AboutScreen from "./screens/AboutScreen";
import HomeScreen from "./screens/HomeScreen";
import { Pressable, Text } from "react-native";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Welcome Home",
            headerStyle: {
              backgroundColor: "#6a51ae",
            },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold" },
            headerRight: () => (
              <Pressable onPress={() => alert("Menu button pressed!")}>
                <Text>Menu</Text>
              </Pressable>
            ),
            contentStyle: {
              backgroundColor: "#e8e4f3",
            },
          }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          initialParams={{ name: "Guest" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
