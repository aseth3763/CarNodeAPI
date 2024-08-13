const express = require("express");
const app = express();

const db = require("./database/db1");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
require("dotenv").config();
const port = process.env.port || 3200;

const CarRouter = require("./router/carRouter");
app.use("/Car_data", CarRouter);

app.listen(port, () => {
  console.log(`connection listening on port ${port}`);
});
