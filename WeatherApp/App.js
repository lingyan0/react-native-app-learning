import React, { useState, StyleSheet, View } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ActivityIndicator } from "react-native";
import Tabs from "./src/components/Tabs";

const Tab = createBottomTabNavigator();

const App = () => {
  const [loading, setLoading] = useState(true);
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={"large"} color={"blue"} />
      </View>
    );
  }
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    justfyContent: "center",
    flex: 1,
  },
});
export default App;
