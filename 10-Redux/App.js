import { StyleSheet, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Header from "./components/Header";
import Product from "./components/Product";
import { Provider } from "react-redux";
import store from "./redux/store";

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <Header />
        <Product />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Product" component={Product} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
