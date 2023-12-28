import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
  StatusBar,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useState } from "react";

import Greet from "./components/Greet";
const LogoImage = require("./assets/adaptive-icon.png");
const favicon = require("./assets/favicon.png");

export default function App() {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [statusbar, setStatusbar] = useState(true);

  const [indicator, setIndicator] = useState(true);

  return (
    <View style={{ flex: 1, backgroundColor: "plum" }}>
      <Greet name="Jagdish Kumawat" />
      <Greet name="Tonny Stark" />

      <Button title="Alert-1" onPress={() => Alert.alert("Invalid data!")} />
      <Button
        title="Alert-2"
        onPress={() => Alert.alert("Invalid Date!", "DOB Incorrect!")}
      />
      <Button
        title="Alert-3"
        onPress={() => {
          Alert.alert("A", "B", [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
            },
            {
              text: "OK",
              onPress: () => console.log("Ok Pressed"),
            },
          ]);
        }}
      />

      <ActivityIndicator
        size="large"
        color="midnightblue"
        animating={indicator}
      />

      <StatusBar hidden={statusbar} />
      <ScrollView>
        <Pressable onPressOut={() => console.log("Image Pressed")}>
          <Image style={{ width: 200, height: 200 }} source={LogoImage} />
        </Pressable>
        <Button
          color="black"
          title="Toggle StatusBar"
          onPress={() => setStatusbar(!statusbar)}
        />
        <Button
          color="midnightblue"
          title="Toggle Indicator"
          onPress={() => setIndicator(!indicator)}
        />
        <Text style={{ color: "black", fontSize: 35 }}>Hello World</Text>
        <Text>
          If you're looking for random paragraphs, you've come to the right
          place. When a random word or a random sentence isn't quite enough, the
          next logical step is to find a random paragraph. We created the Random
          Paragraph Generator with you in mind. The process is quite simple.
          Choose the number of random paragraphs you'd like to see and click the
          button. Your chosen number of paragraphs will instantly appear. While
          it may not be obvious to everyone, there are a number of reasons
          creating random paragraphs can be useful. A few examples of how some
          people use this generator are listed in the following paragraphs.If
          you're looking for random paragraphs, you've come to the right place.
          When a random word or a random sentence isn't quite enough, the next
          logical step is to find a random paragraph. We created the Random
          Paragraph Generator with you in mind. The process is quite simple.
          Choose the number of random paragraphs you'd like to see and click the
          button. Your chosen number of paragraphs will instantly appear. While
          it may not be obvious to everyone, there are a number of reasons
          creating random paragraphs can be useful. A few examples of how some
          people use this generator are listed in the following paragraphs.
        </Text>
        <Image style={{ width: 200, height: 200 }} source={LogoImage} />
        <Button
          onPress={() => setIsModelOpen(true)}
          title="open modal"
          color={"midnightblue"}
        />
        <Modal
          visible={isModelOpen}
          onRequestClose={() => setIsModelOpen(false)}
          animationType="slide"
          presentationStyle="pageSheet"
        >
          <View>
            <Image source={favicon} />
            <Button title="Close" onPress={() => setIsModelOpen(false)} />
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
}
