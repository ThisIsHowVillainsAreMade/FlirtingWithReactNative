import React from 'react';
import { View, Text } from 'react-native';

const App = () => (
  <View style={{ flex:1, height:100}}>
  <Text style={{ flex: 1, justifyContent: 'center', fontSize:16, color:'white', top:50}}>
    The <Text style={{fontWeight:'bold'}}>quick brown fox</Text> jumps over the lazy dog
  </Text></View>
);

export default App;