const mongoose = require("mongoose");
const mongoURL = "mongodb://localhost:27017/Car_database";

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", ()=>{
    console.log("Connected get successfully");
})


db.on("error", (error)=>{
    console.log("Connected get successfully" , error);
})

db.on("disconnected", ()=>{
    console.log("Not disconnected");
})

module.exports = db;