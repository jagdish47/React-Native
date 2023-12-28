import { View, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CourseListScreen from "./screens/CourseListScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingScreen from "./screens/SettingScreen";
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Course List" component={CourseListScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
          <Tab.Screen name="Setting" component={SettingScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}
