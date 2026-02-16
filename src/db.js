const mongoose = require("mongoose");

let dbReady = false;

const connectDb = async () => {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    console.warn("MONGO_URI not set. Using fallback data.");
    return;
  }

  try {
    await mongoose.connect(uri);
    dbReady = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed. Using fallback data.");
    console.error(error.message);
  }
};

const isDbReady = () => dbReady;

module.exports = { connectDb, isDbReady };
