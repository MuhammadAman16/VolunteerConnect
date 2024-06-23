import express from "express";
import Event from "../models/events.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single event by ID
router.get("/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });
    res.json(event);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new event
router.post("/", async (req, res) => {
  const event = new Event({
    name: req.body.name,
    date: req.body.date,
    description: req.body.description,
    image: req.body.image,
    email: req.body.email,
  });

  try {
    const newEvent = await event.save();
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update an event
router.put("/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });

    event.name = req.body.name || event.name;
    event.date = req.body.date || event.date;
    event.description = req.body.description || event.description;
    event.image = req.body.image || event.image;
    event.email = req.body.email || event.email;

    const updatedEvent = await event.save();
    res.json(updatedEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete an event
router.delete("/:id", async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.json({ message: "Event deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/my-events/:email", async (req, res) => {
  try {
    const events = await Event.find({ email: req.params.email });
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
