const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/User");
const e = require("express");
const app = express();
app.use(cors());
app.use(express.json());

// sign up
app.post("/register", async (req, res) => {
  const user = new User(req.body);
  const response = await user.save();
  const result = {
    name: response.name,
    email: response.email,
  };
  res.send(result);
});

// login user
app.post("/login", async (req, res) => {
  let data = req.body;
  const { email, password } = data;
  if (!email) return res.send("email is required");
  if (!password) return res.send("password is required");
  const user = await User.findOne(req.body).select("-password");
  if (!user) {
    res.send("user not exist");
  } else {
    res.send(user);
  }
});

// for wrong url
app.use("/*", (req, res) => {
  res.send("check url");
});

app.listen(3000, () => {
  console.log("server is running on PORT 3000");
});
