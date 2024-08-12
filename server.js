const express = require("express");
const app = express();
const PORT = process.env.port || 3200;

const db = require("./database/db1");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
require("dotenv").config()

const CarRouter = require("./router/carRouter")
app.use("/Car_data",CarRouter)


app.listen(PORT, () => {
  console.log(`connection listening on port ${PORT}`);
});
