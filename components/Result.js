import { useEffect } from "react";
import connectDB from "@/middleware/db";

const Result = ({ participant }) => {
  const { name, email, usn, score } = participant;

  useEffect(() => {
    // Send participant data when the component renders
    const sendParticipantData = async () => {
      console.log("Sending participant data");
      console.log(participant);

      // Connect to the database
      connectDB();

      try {
        const response = await fetch("/api/save", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(participant),
        });

        if (response.ok) {
          console.log("Participant data saved successfully");
        } else {
          console.error("Failed to save participant data");
        }
      } catch (error) {
        console.error("Error while sending participant data:", error);
      }
    };

    // Call the function to send participant data
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
    </div>
  );
};

export default Result;
