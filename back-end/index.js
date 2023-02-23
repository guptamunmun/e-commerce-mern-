const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/User");
const Product = require("./db/product");
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

  let user = await User.findOne(req.body).select("-password");
  if (user) {
    res.send(user);
  } else {
    res.send({ result: "user not exist" });
  }
});

// add product
app.post("/add-product", async (req, res) => {
  let product = new Product(req.body);
  let result = await product.save();
  res.send(result);
});
//get product details
app.get("/get-product", async (req, res) => {
  const products = await Product.find();
  if (products.length > 0) {
    res.send(products);
  } else {
    res.send({ result: "no product found" });
  }
});
// delete product
app.delete("/product/:id", async (req, res) => {
  let result = await Product.deleteOne({ _id: req.params.id });
  res.send(result);
});
// get single  product
app.get("/product/:id", async (req, res) => {
  let result = await Product.findOne({ _id: req.params.id });
  if (result) {
    res.send(result);
  } else {
    res.send({ result: "result not found" });
  }
});
// update product
app.put("/product/:id", async (req, res) => {
  let result = await Product.updateOne(
    { _id: req.params.id },
    { $set: req.body } 
  );
  res.send(result);
});

app.get("/search/:key", async (req, res) => {
  let result = await Product.find({
    "$or": [
      {
        name: { $regex: req.params.key },
      },
      { 
        company: { $regex: req.params.key },
      },
      {
        category: { $regex: req.params.key },
      },
    ],
  });
  res.send(result)
});

// for wrong url
app.use("/*", (req, res) => { 
  res.send("check url");
});

app.listen(3000, () => {
  console.log("server is running on PORT 3000");
});
