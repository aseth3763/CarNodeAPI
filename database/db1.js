const mongoose = require("mongoose");
require("dotenv").config()

// const MONGO_URL = process.env.DB_URL_LOCAL
const MONGO_URL = process.env.DB_URL

mongoose.connect(MONGO_URL);

const db = mongoose.connection;

// Handle connection events
db.on("connected", () => {
  console.log("Connected successfully to MongoDB.");
});

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

db.on("disconnected", () => {
  console.log("Disconnected from MongoDB.");
});

module.exports = db;
