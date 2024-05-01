import React, { useEffect, useState } from "react";

const QuizTImer = ({ timer, onTimeOut }) => {
  console.log(timer)
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const timeOut = setTimeout(onTimeOut, timer);

    return () => {
      clearTimeout(timeOut);
    };
  }, [timer, onTimeOut]);

  useEffect(() => {
    const Interval = setInterval(() => {
      setRemainingTime((prevState) => prevState - 10);
    }, 10);

    return () => {
      clearInterval(Interval);
    };
  }, []);

  return <progress value={remainingTime} max={timer} />;
};

export default QuizTImer;
