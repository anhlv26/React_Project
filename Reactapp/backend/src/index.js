const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require("body-parser");

dotenv.config();

const app = express();

const port = process.env.PORT || 3001;

app.use(bodyParser.json());

routes(app);

mongoose
  .connect(
    `mongodb+srv://vietanhle26:Anhle098@cluster0.qlkevbc.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("connect db success");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log("sever is running in port: ", +port);
});
