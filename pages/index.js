import { useState, useEffect } from 'react';
import ParticipantForm from '../components/ParticipantForm';
import Question from '../components/Question';
import Result from '../components/Result';
import questionsData from '../data/questions.json';

const IndexPage = () => {
  const [participant, setParticipant] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);

  useEffect(() => {
    // Shuffle the questions when the component mounts
    const shuffledQuestions = shuffleArray(questionsData);
    setQuestions(shuffledQuestions);
  }, []);

  const handleSubmitParticipant = (participantData) => {
    setParticipant(participantData);
    setTotalScore(questionsData.reduce((total, question) => total + question.score, 0));
  };

  const handleAnswerSubmit = (selectedOption) => {
    const currentCorrectOption = questions[currentQuestion].correctOption;
    if (selectedOption === currentCorrectOption) {
      setScore(score + questions[currentQuestion].score);
    }

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
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  return (
    <div className="container mx-auto p-4">
      {participant ? (
        currentQuestion >= 0 ? (
          <Question
            question={questions[currentQuestion]}
            onAnswerSubmit={handleAnswerSubmit}
          />
        ) : (
          <Result participant={participant} score={score} totalScore={totalScore} />
        )
      ) : (
        <ParticipantForm onSubmit={handleSubmitParticipant} />
      )}
    </div>
  );
};

export default IndexPage;
