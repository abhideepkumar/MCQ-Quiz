const Question = ({ question, onAnswerSubmit }) => {
    const { options, question: questionText } = question;
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const selectedOption = e.target.elements.option.value;
      onAnswerSubmit(selectedOption);
    };
  
    return (
      <div className="max-w-sm mx-auto p-4 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Quiz Question</h2>
        <p className="mb-4">{questionText}</p>
        <form onSubmit={handleSubmit}>
          {options.map((option, index) => (
            <div key={index} className="mb-2">
              <label htmlFor={`option${index}`} className="inline-flex items-center">
                <input
                  type="radio"
                  id={`option${index}`}
                  name="option"
                  value={option}
                  className="form-radio text-blue-500"
                />
                <span className="ml-2">{option}</span>
              </label>
            </div>
          ))}
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
          >
            Submit Answer
          </button>
        </form>
      </div>
    );
  };
  
  export default Question;
  