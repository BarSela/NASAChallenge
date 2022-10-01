const https = require("https");

const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

// Set EJS as templating engine
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
// for parsing application to x-www-form-urlencoded
app.use(express.json());

app.listen(port, () => {
  console.log("server is up and running");
});

app.get("/", (req, res) => {
  res.render("pages/home");
});
