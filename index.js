// import / dependency
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const helmet = require('helmet');
const bottleneck = require('bottleneck');

// body
const app = express();
const port = 1234;

app.use(bodyParser());
app.use(cors());
app.use(helmet());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

app.get("/", (req, res) => {
  console.log(req.query); // {}
  const value = req.query.query1; // "" / "abc" / undefined
  console.log(req.headers);
  const headerValue = req.headers["x-custom"];

  let message = "hello world get";
  if (value) {
    message += ` with query1 = ${value}`;
  }
  if (headerValue) {
    message += ` with x-custom = ${headerValue}`;
  }
  res.send(message);
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("hello world post");
});

app.put("/", (req, res) => {
  res.send("hello world put");
});

app.delete("/", (req, res) => {
  res.send("hello world delete");
});

// app.[method](path, (callback function))
// req, res

// listen
app.listen(port, () => {
  console.log(`listening at port ${port}`);
});
