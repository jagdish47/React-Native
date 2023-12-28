import "react-native-gesture-handler";
import { NavigationContain } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DashboardScreen from "./screens/DashboardScreen";
import SettingScreen from "./screens/SettingScreen";
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContain>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{
            title: "My Dashboard",
            drawerLabel: "Dashboard Label",
            drawerActiveTintColor: "#333",
            drawerActiveBackgroundColor: "lightblue",
            drawerContentStyle: {
              backgroundColor: "#c6cbef",
            },
          }}
        />
        ////first open page at top
        <Drawer.Screen name="Settings" component={SettingScreen} />
      </Drawer.Navigator>
    </NavigationContain>
  );
}
