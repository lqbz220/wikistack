const express = require("express");
const morgan = require("morgan");
const app = express();
const path = require("path");
const layout = require('./views/layout');
const { db } = require('./models');

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(layout('we are cool!'));
});

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })





const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running!");
});
