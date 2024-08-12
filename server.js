const express = require("express");
const app = express();
const port = 3500;

const db = require("./database/db1");

const bodyParser = require("body-parser");
app.use(bodyParser.json());


const CarRouter = require("./router/carRouter")
app.use("/Car_data",CarRouter)


app.listen(port, () => {
  console.log("connection listening on port 3500");
});
