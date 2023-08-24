import axios from "axios";
export default async function handler(req, res) {
  const data = req.body;
  console.log("data received", data);
  try {
    const response = await axios.post(
      process.env.MONGO_API,
      {
        collection: "participants",
        database: "data",
        dataSource: "Cluster0",
        document: {
          name: data.name,
          USN: data.usn,
          email: data.email,
          score: data.score,
        },
      },
      {
        headers: {
          apiKey: process.env.MONGO_KEY,
          "Content-Type": "application/json",
          "Access-Control-Request-Headers": "*",
        },
      }
    );
    console.log("response after sending: ", response.data);
    res.status(200).json(response.data);
  } catch (error) {
    console.log("error data sent: ", data);
    console.error("Error uploading user data:", error);
    res.status(500).end();
  }
}
