import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://movies-website:hc4c8%403WhZVrtRY@cluster0.miam60b.mongodb.net/netmov?retryWrites=true&w=majority"
    );

    console.log("mongodb is connected");
  } catch (e) {
    console.log(e);
  }
};

export default connectToDB;
