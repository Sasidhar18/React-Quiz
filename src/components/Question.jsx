import React, { useState } from "react";
import QuizTImer from "./QuizTImer";
import Answer from "./Answer";
import Questions from "../Questions.js";

const Question = ({ currentQuestionIndex, onSelect, onSkipper }) => {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: false,
  });

  let timer = 10000;

  if (answer.selectedAnswer !== '') {
    timer = 1000;
  }

  if (answer.isCorrect !== false) {
    timer = 2000;
  }

  const handleAnswer = (selectedAnswer) => {
    setAnswer({
      selectedAnswer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer,
        isCorrect:
          selectedAnswer === Questions[currentQuestionIndex].answers[0],
      });

      setTimeout(() => {
        onSelect(selectedAnswer);
      }, 1500);
    }, 1000);
  };

  let answerState = "";

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  return (
    <div id="question">
      <QuizTImer
        key={timer}
        timer={timer}
        onTimeOut={answer.selectedAnswer === "" ? onSkipper : null}
        mode={answerState}
      />
      <h2>{Questions[currentQuestionIndex].text}</h2>
      <Answer
        answerState={answerState}
        answer={Questions[currentQuestionIndex].answers}
        onSelect={handleAnswer}
        selectedAnswer={answer.selectedAnswer}
      />
    </div>
  );
};

export default Question;
