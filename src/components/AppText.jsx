import { Text } from "react-native";
import React from "react";
import { colors, fontSize } from "../utils/constants";

const AppText = ({
  children,
  color = colors.darkBlue,
  size = fontSize.l,
  paddingVertical = 0,
  paddingHorizontal = 0,
  style,
}) => {
  return (
    <Text style={[{ color, fontSize: size, paddingHorizontal, paddingVertical }, style]}>
      {children}
    </Text>
  );
};

export default AppText;
