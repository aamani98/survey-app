import React, { useReducer, useState } from "react";
import AppScreen from "../components/AppScreen";
import questions from "../data.js";
import Question from "../components/questions/Question";
import Header from "../components/questions/Header";
import { ADD_ANSWER, colors } from "../utils/constants";
import AppLargeButton from "../components/AppLargeButton";
import useBackHandler from "../hooks/useBackHandler";
import { ActivityIndicator, Alert, Modal, StyleSheet, View } from "react-native";
import useAPI from "../hooks/useAPI";
import { submitSurvey } from "../services/surveyService";
import emailTemplate from "../utils/emailTemplate";

const initialState = questions.map((question) => ({ ...question, answer: null }));

const QuestionScreen = ({ navigation }) => {
  const submitSurveyAPI = useAPI(submitSurvey);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  useBackHandler(() => {
    handleBackPress();
    return true;
  });

  const handleNextQuestionPress = async () => {
    if (state[currentQuestionIndex].answer) {
      if (currentQuestionIndex !== state.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
      } else {
        await submitSurveyAPI.request(emailTemplate(state));
        alert("Survey Submitted");
        navigation.goBack();
      }
    }
  };

  function reducer(state, { type, payload }) {
    switch (type) {
      case ADD_ANSWER:
        const newState = [...state];
        newState[payload.index] = { ...newState[payload.index], answer: payload.answer };
        return newState;
      default:
        return state;
    }
  }
  const handleBackPress = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    } else {
      Alert.alert("", "Are you sure you want to exit the survey?", [
        {
          text: "Yes",
          onPress: () => navigation.goBack(),
        },
        {
          text: "No",
        },
      ]);
    }
  };
  return (
    <AppScreen>
      <Header
        current={currentQuestionIndex + 1}
        total={state.length}
        onBackClick={handleBackPress}
      />
      <Question
        question={state[currentQuestionIndex].question}
        options={state[currentQuestionIndex].options}
        answerSelected={state[currentQuestionIndex].answer}
        onOptionSelect={(answer) =>
          dispatch({ type: ADD_ANSWER, payload: { index: currentQuestionIndex, answer } })
        }
      />
      <AppLargeButton
        onPress={handleNextQuestionPress}
        title={currentQuestionIndex === state.length - 1 ? "Submit" : "Next Question"}
      />
      <Modal
        animationType="fade"
        visible={submitSurveyAPI.loading}
        transparent={true}
        statusBarTranslucent={true}
      >
        <View style={styles.background} />
        <View style={styles.loaderContainer}>
          <ActivityIndicator size={40} color={colors.darkBlue} />
        </View>
      </Modal>
    </AppScreen>
  );
};

export default QuestionScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.black,
    opacity: 0.2,
  },
  loaderContainer: {
    top: "50%",
    alignSelf: "center",
    position: "absolute",
  },
});
