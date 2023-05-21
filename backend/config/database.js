const mongoose = require("mongoose");

const connectDatabase = () => {
  db_url = process.env.MONGO_URL;

  // Connect to MongoDB
  mongoose
    .connect(db_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Database connected"))
    .catch((err) => console.log(err));
};

module.exports = connectDatabase;
