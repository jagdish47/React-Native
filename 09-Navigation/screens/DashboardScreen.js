import { View, Text, Button } from "react-native";

const DashboardScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Dashboard</Text>
      <Button
        title="Toggle Drawer"
        onPress={() => {
          navigation.toggleDrawer();
        }}
      />
      <Button
        title="Setting "
        onPress={() => {
          navigation.jumpTo("Settings");
        }}
      />
    </View>
  );
};

export default DashboardScreen;
