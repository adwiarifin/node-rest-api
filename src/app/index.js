// import / dependency
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");

const indexRouter = require("./router");

// body
const app = express();
const port = 1234;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

app.use("/", indexRouter);

// listen
app.listen(port, () => {
  console.log(`listening at port ${port}`);
});
