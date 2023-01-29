const express = require("express");
const { default: mongoose } = require("mongoose");
require("./db/config");
const user = require("./db/User");
const app = express();

app.get("/", (req, res) => {
  res.send("hello Let's get started");
});

// mongodb+srv://functionup-cohort:*****@cluster0.jn5ja3l.mongodb.net/backend?retryWrites=true&w=majority
// mongoose
//   .connect(
//     "mongodb+srv://mayank222:68Kt3Wl1jGT0gtpM@cluster0.o46h9ld.mongodb.net/e-commerce",
//     { useNewUrlParser: true }
//   )
//   .then(() => console.log("MongoDb is connected"))
//   .catch((err) => console.log(err));

app.post("/register", (req, res) => {
  res.send("started");
});

app.listen(3000, () => {
  console.log("server is running on PORT 3000");
});
