import mongoose from "mongoose";
import Device from "../models/Device";
import { devices } from "./examples";

const seedDatabase = async () => {
  try {
    await mongoose
      .connect("mongodb://mongo:27017/homeLink")
      .then(() => {
        console.log("MongoDB connected to the backend successfully");
      })
      .catch((err) => console.log(err));

    await Device.insertMany(devices);
    console.log("Seed data inserted");

    process.exit();
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();
