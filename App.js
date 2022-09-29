import React from "react";
import { View } from "react-native";

const App = () => (
  <>
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} />
    <View style={{ flex: 1, width: 100, height: 100, backgroundColor: "red" }}/>
    <View style={{ flex: 1, width: 100, height: 100, backgroundColor: "blue" }}/>
  </>
);

export default App;