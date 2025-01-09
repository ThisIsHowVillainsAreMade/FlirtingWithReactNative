// import { StatusBar } from "expo-status-bar";
// import { Button, StyleSheet, Text, View } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.hello}>Jouons avec React Native !</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "black",
//   },
//   hello: {
//     color: "ivory",
//     fontWeight: "bold",
//     fontSize: 70,
//   },
// });
import React from 'react';
import { View, Text } from 'react-native';

const App = () => (
  <View style={{ flex:1, backgroundColor:'white'}}>
  <Text style={{ flex: 1, justifyContent: 'center'}}>
    The quick brown fox jumps over the lazy dog
  </Text></View>
);

export default App;