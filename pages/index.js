import { useState, useEffect } from "react";
import ParticipantForm from "../components/ParticipantForm";
import Question from "../components/Question";
import Result from "../components/Result";
import Timer from "../components/Timer";
import questionsData from "../data/questions.json";
import connectDB from "@/middleware/db";

const IndexPage = () => {
  const [participant, setParticipant] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(15);

  useEffect(() => {
    // Shuffle the questions when the component mounts
    const shuffledQuestions = shuffleArray(questionsData);
    setQuestions(shuffledQuestions);
    //starting mongodb server
    connectDB();
  }, []);

  const handleSubmitParticipant = (participantData) => {
    // Calculate the participant's score
    const participantScore = questions.reduce((total, question) => {
      const participantAnswer = participantData[`question_${question.id}`];
      const isCorrect = question.correctOption === participantAnswer;
      return total + (isCorrect ? question.score : 0);
    }, 0);
  
    // Update the participant's data with the score
    const participantWithScore = {
      ...participantData,
      score: participantScore,
    };
  
    // Set the participant's data
    setParticipant(participantWithScore);
  };  

  const handleAnswerSubmit = (selectedOption) => {
    const currentCorrectOption = questions[currentQuestion].correctOption;
    if (selectedOption === currentCorrectOption) {
      setScore(score + questions[currentQuestion].score);
    }

    // Reset the timer and move to the next question
    setTimeRemaining(15);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setCurrentQuestion(-1);
    }
  };

  const handleTimeExpired = () => {
    // Reset the timer and move to the next question
    setTimeRemaining(15);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setCurrentQuestion(-1);
    }
  };

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };
  return (
    <div className="container mx-auto p-4">
      {participant ? (
        currentQuestion >= 0 ? (
          <div>
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
          </div>
        ) : (
          participant.score=score,
          <Result
            participant={participant}
          />
        )
      ) : (
        <ParticipantForm onSubmit={handleSubmitParticipant} />
      )}
    </div>
  );
};

export default IndexPage;
