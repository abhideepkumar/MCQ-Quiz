import { useEffect } from "react";
import connectDB from "@/middleware/db";
const Result = ({ participant }) => {
  const { name, email, usn, score } = participant;
  useEffect(() => {
    // Sending participant data when the component renders
    const sendmadi = async () => {
      console.log("sent madi");
      const participantDatas = {
        name,
        email,
        usn,
        score,
      };
      console.log("Data sent:", participantDatas);
      connectDB();
      const response = await fetch("/api/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ participantDatas }),
      });

      if (response.ok) {
        console.log("Participant data saved successfully");
      } else {
        console.error("Failed to save participant data");
      }
    };

    sendmadi();
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
    </div>
  );
};

export default Result;
