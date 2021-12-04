"use strict";
const express = require("express");
const app = express();

app.listen(3001, (err) => {
  if (err) {
    console.log("there was a problem", err);
    return;
  }
  console.log("listening on port 3001");
});
