import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
  try {
    if (isConnected) {
      console.log("MongoDB is already Connected.");
      return;
    }
    await mongoose.connect(process.env.MONGODB_URI || "");
    console.log("Connected to MongoDB.");
    isConnected = true;
  } catch (error) {
    console.log("Error Connecting to MongoDB!", error);
  }
};
