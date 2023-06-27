import connectDB from "@/middleware/db";
import Participant from "@/models/Participant";

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const scoreData = req.body;
      
      // Create a new Participant instance with the received score data
      const newParticipant = new Participant(scoreData);
      
      // Save the participant's data to the database
      await newParticipant.save();
      
      console.log("Participant submitted:", scoreData);
      console.log("Participant data saved successfully!");
      
      // Send a success response
      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error saving participant data:", error);
      
      // Send an error response if saving the participant data fails
      res.status(500).json({ error: "Failed to save participant data" });
    }
  } else {
    // Send an error response if the request method is not POST
    res.status(400).json({ error: "This method is not allowed" });
  }
};

export default connectDB(handler);
