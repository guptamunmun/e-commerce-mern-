const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://jay420:gRLzeLdOa6ENyasF@cluster0.dnkg3q6.mongodb.net/e-commerce",
    { useNewUrlParser: true }
  ) 
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));


    // "mongodb+srv://mayank222:68Kt3Wl1jGT0gtpM@cluster0.o46h9ld.mongodb.net/e-commerce"