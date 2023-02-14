import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const PORT = 4000;
const app = express();
app.use(cors);

await mongoose.connect(
  "mongodb+srv://AbdulBasit:abdulbasit1234@cluster0.4pupzen.mongodb.net/?retryWrites=true&w=majority"
);
console.log("MongoDB connection is successful");

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
