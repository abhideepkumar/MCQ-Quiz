import connectDB from "@/pages/api/middleware/db";
import Participant from "@/pages/api/models/Participant";

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const scoreData = req.body;
      
      const newParticipant = new Participant(scoreData);
      await newParticipant.save();
      
      console.log("Participant submitted:", scoreData);
      console.log("Participant data saved successfully!");
      
      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error saving participant data:", error);
      res.status(500).json({ error: "Failed to save participant data" });
    }
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};

export default connectDB(handler);
