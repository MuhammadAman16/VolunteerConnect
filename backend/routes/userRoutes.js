import express from "express";
import bcrypt from "bcrypt";
import User from "../models/users.js";
import jwt from "jsonwebtoken";
import { check, validationResult } from "express-validator";

const router = express.Router();
const jwtSecret = "secret123";
// Define an API endpoint to fetch users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching users");
  }
});

// Define a login endpoint
router.post(
  "/login",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      // Find the user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Invalid email or password" });
      }

      // Compare the provided password with the stored hash
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid email or password" });
      }

      // Create payload for JWT
      const payload = {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      };

      // Sign the JWT token
      jwt.sign(
        payload,
        jwtSecret,
        { expiresIn: "1h" }, // Token expires in 1 hour
        (err, token) => {
          if (err) throw err;
          res.status(200).json({ token });
        }
      );
    } catch (err) {
      console.error(err);
      res.status(500).send("Server error");
    }
  }
);

// Define a register endpoint
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create a new user
    user = new User({
      name,
      email,
      password,
    });

    // Save the user to the database
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

export default router;
