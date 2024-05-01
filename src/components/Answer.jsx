import React, { useRef } from "react";

const Answer = ({ answer, onSelect, selectedAnswer, answerState }) => {
  const shuffledAnswer = useRef();

  if (!shuffledAnswer.current) {
    shuffledAnswer.current = answer;
    shuffledAnswer.current.sort(() => Math.random() - 0.5);
  }
  return (
    <ul id="answers">
      {shuffledAnswer.current.map((answer, index) => {
        const isSelected = selectedAnswer === answer;
        let cssClass = "";

        if (answerState === "answered" && isSelected) {
          cssClass = "selected";
        }

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClass = answerState;
        }
        return (
          <li key={index} className="answer">
            <button
              className={cssClass}
              onClick={() => {
                onSelect(answer);
              }}
              disabled={answerState === "answered"}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Answer;
