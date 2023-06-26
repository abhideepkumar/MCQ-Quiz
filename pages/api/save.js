import connectDB from "@/middleware/db";
import Participant from "@/models/Participant";
const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const scoreData = req.body;
      const newQuiz = new Participant(scoreData);
      await newQuiz.save();
      console.log("Student submitted:", scoreData);
      console.log("Application saved successfully!");
      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error saving application:", error);
      res.status(500).json({ error: "Failed to save application" });
    }
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};

export default connectDB(handler);
