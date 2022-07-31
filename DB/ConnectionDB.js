const mongoose = require("mongoose");

const mongoURL = "mongodb+srv://Quiz-App:Aspirine7@quiz-app-cluster.o0o0c.mongodb.net/test"

const ConnectionDB = async () => {
  try {
    const Connection = await mongoose.connect(mongoURL);
    if (Connection) {
      console.log("Connected to DB");
    } else {
      console.log("Not Connected to DB");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {ConnectionDB}