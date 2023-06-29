import React, { useState, useEffect } from "react";
import ParticipantForm from "../components/ParticipantForm";
import Question from "../components/Question";
import Result from "../components/Result";
import Timer from "../components/Timer";
import questionsData from "../data/questions.json";
const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const IndexPage = () => {
  const [participant, setParticipant] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(15);

  useEffect(() => {
    const shuffledQuestions = shuffleArray(questionsData);
    setQuestions(shuffledQuestions);
  }, []);

  const handleSubmitParticipant = (participantData) => {
    const participantScore = questions.reduce((total, question) => {
      const participantAnswer = participantData[`question_${question.id}`];
      const isCorrect = question.correctOption === participantAnswer;
      return total + (isCorrect ? question.score : 0);
    }, 0);

    const participantWithScore = { ...participantData, score: participantScore };
    setParticipant(participantWithScore);
  };

  const handleAnswerSubmit = (selectedOption) => {
    const currentCorrectOption = questions[currentQuestion].correctOption;
    if (selectedOption === currentCorrectOption) {
      setScore((prevScore) => prevScore + questions[currentQuestion].score);
    }

    setTimeRemaining(15);
    setCurrentQuestion((prevQuestion) =>
      prevQuestion < questions.length - 1 ? prevQuestion + 1 : -1
    );
  };

  const handleTimeExpired = () => {
    setTimeRemaining(15);
    setCurrentQuestion((prevQuestion) =>
      prevQuestion < questions.length - 1 ? prevQuestion + 1 : -1
    );
  };

  return (
    <div className="container mx-auto p-4">
      {participant ? (
        currentQuestion >= 0 ? (
          <>
            <Question
              key={currentQuestion}
              question={questions[currentQuestion]}
              onAnswerSubmit={handleAnswerSubmit}
            />
            <Timer
              time={timeRemaining}
              onTimeExpired={handleTimeExpired}
              setTime={setTimeRemaining}
            />
          </>
        ) : (
          <Result participant={{ ...participant, score }} />
        )
      ) : (
        <ParticipantForm onSubmit={handleSubmitParticipant} />
      )}
    </div>
  );
};

export default IndexPage;
