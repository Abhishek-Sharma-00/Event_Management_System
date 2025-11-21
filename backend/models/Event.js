import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: String,
    date: String,
    time: String,
    location: String,
    description: String,
    category: String,
    image: String,
    maxRegistrations: { type: Number, default: 0 },
    currentRegistrations: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model("Event", eventSchema);
