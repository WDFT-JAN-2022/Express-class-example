const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", function (req, res) {
  //This will let us send HTML
  res.sendFile(__dirname + "/views/home-page.html");
});

app.get("/profile", function (req, res) {
  //This will let us send HTML
  res.send("<h2>Welcome to your profile</h2>");
});

app.get("/login", function (req, res) {
  res.send("<label>Enter username</label><input>");
});

app.get("/cat", (req, res) => {
  res.sendFile(__dirname + "/views/cat-page.html");
});

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/views/home-page.html");
});

app.listen(3000, function () {
  console.log("We are now listening on port 3000");
});
