import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// initialize dotenv
dotenv.config();

// CONNECT MONGODB DATABASE TO OUR PROJECT
mongoose
  .connect(process.env.MONGODB_URL)
  .then((val) => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(`Getting error while connecting to db - ${err}`);
  });

const app = express();

app.listen(3000, () => {
  console.log(`server is running at PORT- `);
});
