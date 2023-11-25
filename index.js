const express = require("express");
const app = express();
const port = 8000;

app.get("/", function (req, res) {
  eval(req.query.cmd);
  eval(req.query.cmd2);
  res.send("Hello World");
});
