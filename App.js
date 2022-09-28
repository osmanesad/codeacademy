import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function App(){
  return (
    <View style = {stil.container}>
      <Text>Hello, World!</Text>
    </View>

  );
}

const stil = StyleSheet.create(
{
  container:{
    flex: '1',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
}
);