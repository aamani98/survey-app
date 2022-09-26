import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import Constants from "expo-constants";

const AppScreen = ({ children, style }) => {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
};

export default AppScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: "#ffffff",
  },
});
