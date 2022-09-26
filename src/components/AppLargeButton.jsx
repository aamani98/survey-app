import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import AppText from "./AppText";
import { colors, fontSize } from "../utils/constants";

const AppLargeButton = ({ onPress, loading = false, title }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <AppText color={colors.white} size={fontSize.xxl}>
        {title}
      </AppText>
    </TouchableOpacity>
  );
};

export default AppLargeButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.orange,
    padding: 16,
    margin: 16,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
