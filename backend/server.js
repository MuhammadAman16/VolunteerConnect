import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js"; // Import the routes

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://mohammedaman5253:nvbCLKbQfTk7Zfu5@volunteerconnect.v5lsuti.mongodb.net/?retryWrites=true&w=majority&appName=VolunteerConnect";

// Connect to MongoDB using Mongoose
mongoose
  .connect(uri)
  .then(() => console.log("Successfully connected to MongoDB!"))
  .catch((err) => console.error("Connection error", err));

// Use the routes from the separate routes file
app.use("/api", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
