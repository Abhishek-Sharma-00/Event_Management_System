import Registration from "../models/Registration.js";
import Event from "../models/Event.js";

export const registerUser = async (req, res) => {
  try {
    const userId = req.user.id;

    // Find event
    const event = await Event.findById(eventId);
    if (!event) return res.status(404).json({ detail: "Event not found" });

    // Check if seats full
    if (event.currentRegistrations >= event.maxRegistrations) {
      return res.status(400).json({ detail: "Event is fully booked" });
    }

    // Create registration
    const registration = await Registration.create({
      event: req.user.id,
      user: userId,
    });

    // Increase current registration count
    event.currentRegistrations = (event.currentRegistrations || 0) + 1;

    await event.save();

    res.status(201).json(registration);
  } catch (error) {
    console.log("Error Occurred:", error);
    res.status(500).json({ detail: "Registration error" });
  }
};

export const getRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.find().populate("eventId");
    res.status(200).json(registrations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch registrations" });
  }
};
