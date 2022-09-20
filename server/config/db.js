const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = mongoose
    .connect("mongodb://127.0.0.1:27017/mern-yams", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log(`Mongoose Connected`.cyan.underline))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
