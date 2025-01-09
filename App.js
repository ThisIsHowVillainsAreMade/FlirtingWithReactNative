import React from "react";
import { Image, View } from "react-native";

const img = require('./assets/favicon.png');

const App = () => (
  <View style={{ flex: 1, justifyContent: "center" }}>
    <Image
      style={{ width: 100, height: 100 }}
      source={{
        uri: "https://www.powertrafic.fr/wp-content/uploads/2023/04/image-ia-exemple.png",
      }}
    ></Image>
    <Image
      style={{ width: 100, height: 100 }}
      source={img}
    ></Image>
  </View>
);

export default App;
