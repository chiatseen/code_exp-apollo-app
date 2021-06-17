import React, { useState, useEffect, Fragment, useRef } from "react";
import { View, Text } from "react-native";
import getQuizQuestions from "util";

export default function Quiz(props) {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [questionOver, setQuestionOver] = useState(true);
  const [TOTAL_QUESTIONS] = useState(10);
  const setAnswer = useRef(null);

  const startQuiz = () => {
    setLoading(true);
    setQuestionOver(false);

    const url = "https://api.infermedica.com/v3/symptoms?age.value=25";
    const data = fetch(url, {
      method: "GET",
      headers: {
        "App-Id": "124b24d6",
        "App-Key": "2a6b6a45eef7ca5e299edfd733a801a0",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  useEffect(() => {
    startQuiz();
  }, []);

  console.log(props.initial);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-end",
        position: "relative",
        padding: 20,
        backgroundColor: "#fff",
        borderRadius: 300,
        width: 60,
        height: 60,
        position: "absolute",
        bottom: 20,
        right: 20,
      }}
    >
      <Text>Quiz Questions</Text>
    </View>
  );
}
