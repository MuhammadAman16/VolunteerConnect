import express from "express";
import Participant from "../models/Participant.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { eventId, name, email } = req.body;

  try {
    const participant = new Participant({ eventId, name, email });
    await participant.save();
    res.status(201).json({ message: "Participant added successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to add participant", error: error.message });
  }
});

export default router;
