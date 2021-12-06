"use strict";
const express = require("express");
const app = express();
// const stats = require(/route/stats);

app.get("/", (req, res) => {
  console.log(req.url);
  res.send("index.html");
});
app.route("/stats", (req, res) => {});

app.listen(3001, (err) => {
  if (err) {
    console.log("there was a problem", err);
    return;
  }
  console.log("listening on port 3001");
});
