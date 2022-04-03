import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.js";

// Load environment variable
dotenv.config();

const app = express();

// Connect DB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Db connection successfull");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/users", userRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Backend server is running!`);
});
