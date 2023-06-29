import mongoose from "mongoose";

const connectDB = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    return handler(req, res);
  }
  await mongoose.connect("mongodb+srv://returncode1:CM8282@cluster0.gmzd2m2.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
};

export default connectDB;
