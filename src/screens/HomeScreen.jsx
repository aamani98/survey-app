import { Image, StyleSheet, View, Text } from "react-native";
import React from "react";
import AppScreen from "../components/AppScreen";
import homeImage from "../../assets/Home.jpg";
import AppLargeButton from "../components/AppLargeButton";
import AppText from "../components/AppText";

const HomeScreen = ({ navigation }) => {
  return (
    <AppScreen>
      <View style={styles.headerContainer}>
        <AppText size={60}>Survey App</AppText>
      </View>
      <View style={styles.imageContainer}>
        <Image source={homeImage} style={styles.image} />
      </View>

      <View style={styles.buttonContainer}>
        <AppLargeButton title={"Start Survey"} onPress={() => navigation.navigate("Survey")} />
      </View>
    </AppScreen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  headerContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 375,
    height: 375,
    alignSelf: "center",
  },
  buttonContainer: {
    flex: 2,
    justifyContent: "flex-end",
  },
});
