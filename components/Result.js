import { useEffect, useState } from "react";
const Result = ({ participant }) => {
  const [state, setState] = useState(
    "Sending result. Do not close or switch tab."
  );
  const { name, email, usn, score } = participant;

  useEffect(() => {
    const sendParticipantData = async () => {
      console.log("Sending participant data");
      console.log(participant);
      try {
        console.log("try block off Result");
        const response = await fetch("/api/save", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(participant),
        });
        console.log("response:", response);
        if (response.ok) {
          console.log("Participant data saved successfully");
          setState("");
        } else {
          console.error("Failed to save participant data from result");
          setState("Failed to submit Result. Try reattempt quiz");
        }
      } catch (error) {
        console.error(
          "Error while sending participant data from result2:",
          error
        );
      }
    };

    sendParticipantData();
  }, []);

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
      <hr />
      <p className="text-gray-500">{state}</p>
    </div>
  );
};

export default Result;
