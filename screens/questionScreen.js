import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function QuestionScreen({ route, navigation }) {
  const { item } = route.params;
  const { polyclinic } = route.params;
  const questions = [
    {
      title: "How long has your fever lasted?",
      options: [
        { name: "Less than one day", key: "1" },
        { name: "Between 1 day to 1 week", key: "2" },
        { name: "Less than one day", key: "3" },
      ],
    },
    {
      title: "How high has your temperature been?",
      options: [
        { name: "Between 37.5°C and 38°C", key: "1" },
        { name: "Between 38°C to 40°C", key: "2" },
        { name: "Above 40°C", key: "3" },
      ],
    },
    {
      title: "Are you feeling cold and shivering for no apparent reason?",
      options: [
        { name: "Yes", key: "1" },
        { name: "No", key: "2" },
        { name: "Don't know", key: "3" },
      ],
    },
    {
      title: "Do you have muscle aches and cramps?",
      options: [
        { name: "Yes", key: "1" },
        { name: "No", key: "2" },
        { name: "Don't know", key: "3" },
      ],
    },
    {
      title: "Do you have a cough?",
      options: [
        { name: "Yes", key: "1" },
        { name: "No", key: "2" },
        { name: "Don't know", key: "3" },
      ],
    },
    {
      title: "Are you coughing up mucus?",
      options: [
        { name: "Yes", key: "1" },
        { name: "No", key: "2" },
        { name: "Don't know", key: "3" },
      ],
    },
    {
      title: "Are you coughing up blood?",
      options: [
        { name: "Yes", key: "1" },
        { name: "No", key: "2" },
        { name: "Don't know", key: "3" },
      ],
    },
    {
      title: "Does your throat hurt or feel sore?",
      options: [
        { name: "Yes", key: "1" },
        { name: "No", key: "2" },
        { name: "Don't know", key: "3" },
      ],
    },
    {
      title: "Do you have any difficulty breathing?",
      options: [
        { name: "Yes", key: "1" },
        { name: "No", key: "2" },
        { name: "Don't know", key: "3" },
      ],
    },
    {
      title: "Any chest pain?",
      options: [
        { name: "Yes", key: "1" },
        { name: "No", key: "2" },
        { name: "Don't know", key: "3" },
      ],
    },
  ];
  const [evidence, setEvidence] = useState([]);
  const [question, setQuestion] = useState(questions[0]);
  const [options, setOptions] = useState(questions[0].options);
  const [questionNum, setQuestionNum] = useState(0);

  const setNextQuestion = (answer) => {
    let currentEvidence = evidence;
    currentEvidence.push({
      question: question.title,
      id: questionNum.toString(),
      answer: answer,
    });
    setEvidence(currentEvidence);
    let n = questionNum;
    n = n + 1;
    setQuestionNum(n);
    setQuestion(questions[n]);
    setOptions(questions[n].options);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Text style={styles.heading}>Chief Complaint: {item}</Text>
      <Text style={styles.questionTitle}>{question.title}</Text>
      {options.map((option) => {
        return (
          <View key={option.key}>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => {
                if (questionNum < 9) {
                  setNextQuestion(option.name);
                } else {
                  evidence.push({
                    question: question.title,
                    id: (questionNum + 1).toString(),
                    answer: option.name,
                  });
                  navigation.navigate("AppointmentScreen", {
                    evidence,
                    polyclinic,
                  });
                }
              }}
            >
              <Text style={styles.optionText}>{option.name}</Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    // fontFamily: "Roboto",
    color: "gray",
  },
  questionTitle: {
    fontSize: 32,
    padding: 12,
    fontWeight: "bold",
    // fontFamily: "Roboto",
    textAlign: "center",
  },
  optionButton: {
    width: 300,
    marginTop: 20,
    backgroundColor: "#eb637a",
    padding: 15,
    borderRadius: 50,
  },
  optionText: {
    color: "white",
    fontSize: 16,
    justifyContent: "center",
    textAlign: "center",
    // fontFamily: "Roboto",
  },
});
