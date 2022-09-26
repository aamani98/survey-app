import { StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import AppText from "../AppText";
import { colors } from "../../utils/constants";

const Header = ({ current, total, onBackClick }) => {
  return (
    <>
      <MaterialIcons
        name="keyboard-arrow-left"
        size={24}
        color="black"
        onPress={onBackClick}
        style={styles.icon}
      />
      <AppText style={styles.text} color={colors.navyBlue}>{`${current} of ${total}`}</AppText>
      <View style={styles.progressContainer}>
        <View
          style={[
            styles.progressIndicator,
            {
              width: `${(current / total) * 100}%`,
            },
          ]}
        />
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  icon: { padding: 12, position: "absolute", marginLeft: 16 },
  text: { alignSelf: "center", margin: 12 },
  progressContainer: {
    backgroundColor: colors.paleBlue,
    height: 15,
    marginHorizontal: 16,
    marginVertical: 20,
    borderRadius: 10,
  },
  progressIndicator: { backgroundColor: colors.navyBlue, height: 15, borderRadius: 10 },
});
