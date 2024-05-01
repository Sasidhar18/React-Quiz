import React, { useCallback, useState } from "react";
import Questions from "../Questions";
import Question from "./Question";
import Summary from "./Summary";

const Quiz = () => {
  const [userAnswer, setUserAnswer] = useState([]);
  const currentQuestionIndex = userAnswer.length;

  const handleAnswer = useCallback((selectedAnswer) => {
    setUserAnswer((prevState) => {
      return [...prevState, selectedAnswer];
    });
  }, []);

  const skipAnswer = useCallback(() => handleAnswer(null), [handleAnswer]);

  if (currentQuestionIndex === Questions.length) {
    return (
      <div id="summary">
        <Summary userAnswers={userAnswer} />
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={currentQuestionIndex}
        currentQuestionIndex={currentQuestionIndex}
        onSelect={handleAnswer}
        onSkipper={skipAnswer}
      />
    </div>
  );
};

export default Quiz;
