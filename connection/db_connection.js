const mongoose = require("mongoose");
const mongoUrl =
  process.env.MONGO_URL || "mongodb://127.0.0.1:27017/electrician-api";

mongoose
  .connect(mongoUrl, {})
  .then(() => {
    console.log("Connection is successful");
  })
  .catch((e) => {
    console.log("No connection: ", e);
  });
