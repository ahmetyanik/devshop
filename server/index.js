require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const Schema = mongoose.Schema;

mongoose.connect(process.env.BAGLANTI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", function (req, res) {
  res.send("Başarılı..");
});

app.listen(5000);
