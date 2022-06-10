import React, { useState } from "react";

export default function Quize() {
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is the ceo of telesa ?",
      answerOptions: [
        { answerText: "Jeff Buzzes", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Startk", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company ?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "2", isCorrect: false },
        { answerText: "3", isCorrect: false },
        { answerText: "4", isCorrect: true },
      ],
    },
  ];
  const [curQuestion, setcurQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }
    const nextQuestion = curQuestion + 1;
    if (nextQuestion < questions.length) {
      setcurQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="ResultContainer">
      {showScore ? (
        <div>
          {" "}
          Your scored {score} out of {questions.length}{" "}
        </div>
      ) : (
        <div className="MainContainer">
          <div className="question-section">
            <div className="question-count">
              <span> question {curQuestion + 1} </span> /{questions.length}
            </div>
            <div className="question-text">
              {questions[curQuestion].questionText}{" "}
            </div>
          </div>
          <div className="answer-section">
            {questions[curQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}{" "}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
