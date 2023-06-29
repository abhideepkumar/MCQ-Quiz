import mongoose from "mongoose";

const connectDB = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    return handler(req, res);
  }
  await mongoose.connect("mongodb+srv://admin:P2P10@cluster1.tm6oa6e.mongodb.net/cmquiz", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
};

export default connectDB;
