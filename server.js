"use strict";
const express = require("express");
const app = express();
const path = require("path");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  console.log(req.url);
  res.sendFile(path.join(__dirname, "/public/html/index.html"));
});
app.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/html/stats.html"));
});
app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/html/exercise.html"));
});

app.listen(3001, (err) => {
  if (err) {
    console.log("there was a problem", err);
    return;
  }
  console.log("listening on port 3001");
});
