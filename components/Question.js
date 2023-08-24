
import React from "react";

const Question = ({ question, onAnswerSubmit }) => {
  const { options, question: questionText } = question;

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedOption = e.target.elements.option.value;
    onAnswerSubmit(selectedOption);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Quiz Question</h2>
      <p className="mb-4">{questionText}</p>
      <form onSubmit={handleSubmit}>
        {options.map((option, index) => (
          <label key={index} htmlFor={`option${index}`} className="block mb-2 cursor-pointer">
            <input type="radio" id={`option${index}`} name="option" value={option} className="mr-2 text-blue-500 focus:ring focus:ring-blue-300" />
            {option}
          </label>
        ))}
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
          Submit Answer
        </button>
      </form>
    </div>
  );
};

export default Question;
