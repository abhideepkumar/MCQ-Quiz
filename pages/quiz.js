import React, { useState } from 'react';
import Timer from '../components/Timer';
import Question from '../components/Question';

const QuizPage = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isTimeout, setIsTimeout] = useState(false);

  const questions = [
    {
      question: 'Question 1',
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    },
    {
      question: 'Question 2',
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    },
    // Add more questions...
  ];

  const handleNextQuestion = (answer) => {
    setAnswers((prevAnswers) => [...prevAnswers, answer]);
    setQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleTimeout = () => {
    setIsTimeout(true);
  };

  return (
    <div>
      {isTimeout ? (
        <div>
          <h2>Times up!</h2>
          {/* Show a message or redirect to the result page */}
        </div>
      ) : (
        <div>
          <h2>Quiz</h2>
          <Timer time={60} onTimeout={handleTimeout} />
          {questionIndex < questions.length ? (
            <Question
              question={questions[questionIndex].question}
              options={questions[questionIndex].options}
              onSelect={handleNextQuestion}
            />
          ) : (
            <div>
              <h2>Quiz Completed!</h2>
              {/* Show a message or redirect to the result page */}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default QuizPage;
