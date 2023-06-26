import { Schema, model } from "mongoose";

const participantSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  score: {
    type: Number,
  },
  usn: {
    type: String,
  },
});

export default model("Participant", participantSchema);
