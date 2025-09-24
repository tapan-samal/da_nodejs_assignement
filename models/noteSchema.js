import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Provide title of note!"],
    trim: true,
  },
  content: {
    type: String,
    required: [true, "Provide content details!"],
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export const Note = mongoose.model("Note", noteSchema);
