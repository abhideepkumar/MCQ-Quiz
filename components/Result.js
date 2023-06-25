const Result = ({ participant, score, totalScore }) => {
    const { name, email, usn } = participant;
  
    return (
      <div className="max-w-sm mx-auto p-4 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Quiz Result</h2>
        <p>
          Name: <strong>{name}</strong>
        </p>
        <p>
          Email: <strong>{email}</strong>
        </p>
        <p>
          USN Number: <strong>{usn}</strong>
        </p>
        <p>
          Score: <strong>{score}</strong> out of <strong>100</strong>
        </p>
      </div>
    );
  };
  
  export default Result;
  