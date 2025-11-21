import express from "express";
import {
  getEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
} from "../controllers/eventController.js";

const router = express.Router();

// GET all events + CREATE event
router.route("/").get(getEvents).post(createEvent);

// GET single event + UPDATE + DELETE
router.route("/:id").put(updateEvent).delete(deleteEvent).get(getEventById);

export default router;
