const mongoose = require("mongoose");
require("dotenv").config();

// const MONGO_URL = process.env.db_url_local
const MONGO_URL = process.env.DB_URL; // Using uppercase for environment variables
console.log(MONGO_URL);

if (!MONGO_URL) {
  console.error(
    "MongoDB connection string is missing. Please set the DB_URL environment variable."
  );
  process.exit(1); // Exit process if environment variable is not set
}

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
