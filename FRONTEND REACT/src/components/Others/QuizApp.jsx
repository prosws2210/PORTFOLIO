import React, { useState, useEffect } from 'react';

const quizData = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'Berlin', 'London', 'Madrid'],
    answer: 'Paris',
  },
  {
    question: 'Who wrote "Romeo and Juliet"?',
    options: ['William Shakespeare', 'Charles Dickens', 'Jane Austen', 'Mark Twain'],
    answer: 'William Shakespeare',
  },
  {
    question: 'What is the largest planet in our solar system?',
    options: ['Jupiter', 'Saturn', 'Neptune', 'Earth'],
    answer: 'Jupiter',
  },
];

function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(new Array(quizData.length).fill(''));
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizEnded, setQuizEnded] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60); // 60 seconds

  useEffect(() => {
    let timer;
    if (quizStarted && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [quizStarted, timeLeft]);

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handleSelectOption = (option) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[currentQuestion] = option;
    setSelectedOptions(newSelectedOptions);
  };

  const handleSubmitAnswer = () => {
    if (selectedOptions[currentQuestion] === quizData[currentQuestion].answer) {
      setScore((prevScore) => prevScore + 1);
    }
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      setQuizEnded(true);
      setQuizStarted(false);
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion - 1);
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOptions(new Array(quizData.length).fill(''));
    setQuizStarted(false);
    setQuizEnded(false);
    setTimeLeft(60);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md h-screen grid place-items-center">
      <h1 className="text-2xl font-bold text-center mb-4">Quiz App</h1>
      {!quizStarted && !quizEnded && (
        <div>
          <p>Total Questions: {quizData.length}</p>
          <p>Total Time: 60 seconds</p>
          <button
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={handleStartQuiz}
          >
            Start Quiz
          </button>
        </div>
      )}
      {quizStarted && !quizEnded && (
        <div>
          <h2 className="text-lg font-bold mb-2">
            Question {currentQuestion + 1}: {quizData[currentQuestion].question}
          </h2>
          <div className="flex flex-col mb-4">
            {quizData[currentQuestion].options.map((option, index) => (
              <label key={index} className="flex items-center mb-2">
                <input
                  type="radio"
                  value={option}
                  checked={selectedOptions[currentQuestion] === option}
                  onChange={() => handleSelectOption(option)}
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>
          <button
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md mb-2"
            onClick={handleSubmitAnswer}
          >
            Submit Answer
          </button>
          <div className="flex justify-between">
            <button
              className="w-1/2 bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
              onClick={handlePreviousQuestion}
              disabled={currentQuestion === 0}
            >
              Previous Question
            </button>
            <button
              className="w-1/2 bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={handleNextQuestion}
              disabled={currentQuestion === quizData.length - 1}
            >
              Next Question
            </button>
          </div>
          <p className="mt-2">Time Left: {timeLeft} seconds</p>
        </div>
      )}
      {quizEnded && (
        <div>
          <p className="text-lg font-bold mb-2">Quiz Ended!</p>
          <p className="mb-2">
            Your Score: {score} / {quizData.length}
          </p>
          <button
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={handleRestartQuiz}
          >
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
}

export default QuizApp;
