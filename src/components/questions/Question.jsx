import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import AppText from "../AppText";
import { colors, fontSize } from "../../utils/constants";

const Question = ({ question, options, answerSelected, onOptionSelect }) => {
  return (
    <View style={styles.container}>
      <AppText
        color={colors.darkBlue}
        size={fontSize.xxxl}
        paddingHorizontal={16}
        paddingVertical={16}
      >
        {question}
      </AppText>
      {options.map((option, index) => (
        <Option
          key={index}
          option={option}
          selected={option === answerSelected}
          onPress={onOptionSelect}
        />
      ))}
    </View>
  );
};

const Option = ({ option, selected, onPress }) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(option)}
      style={[
        styles.option,
        {
          backgroundColor: selected ? colors.paleOrange : colors.white,
          borderColor: selected ? colors.orange : colors.navyBlue,
        },
      ]}
    >
      <AppText color={selected ? colors.orange : colors.navyBlue}>{option}</AppText>
    </TouchableOpacity>
  );
};

export default Question;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  option: {
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 12,
    borderRadius: 10,
    borderWidth: 1,
  },
});
