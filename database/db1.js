const mongoose = require("mongoose");
const mongoURL = "mongodb://localhost:27017/Car_database";

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

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
