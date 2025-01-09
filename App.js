// import { StatusBar } from 'expo-status-bar';
// import { Button, StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.hello}>Hello DuckSociety !</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor:'black'
//   },
//   hello: {
//     color:'ivory',
//     fontWeight:'bold',
//     fontSize:50
//   }

// });
import React from 'react';
import { View } from 'react-native';

const App = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <View style={{ width: 100, height: 100, backgroundColor: 'red' }} />
    <View style={{ width: 100, height: 100, backgroundColor: 'blue' }} />
  </View>
);

export default App;