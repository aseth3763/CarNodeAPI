const mongoose = require("mongoose");
require("dotenv").config()

// const mongoURL = process.env.db_url
const mongoURL = process.env.db_url_local

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", ()=>{
    console.log("Connected successfully");
})


db.on("error", (error)=>{
    console.log("Error : " , error);
})

db.on("disconnected", ()=>{
    console.log("Not disconnected");
})

module.exports = db;