import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/errorHandler.js";
import { Note } from "../models/noteSchema.js";

// Create Note
export const createNote = catchAsyncError(async (req, res, next) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return next(new ErrorHandler("Please provide both title and content!", 400));
  }

  const note = await Note.create({
    title,
    content,
    createdBy: req.user._id,
  });

  res.status(201).json({
    success: true,
    message: "Note created successfully!",
    note,
  });
});

// Get All Notes (for logged-in user)
export const getNotes = catchAsyncError(async (req, res, next) => {
  const notes = await Note.find({ createdBy: req.user._id });
  res.status(200).json({
    success: true,
    count: notes.length,
    notes,
  });
});

// Get Note by Id
export const getNoteById = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  const note = await Note.findOne({ _id: id, createdBy: req.user._id });

  if (!note) {
    return next(new ErrorHandler("Note not found!", 404));
  }

  res.status(200).json({
    success: true,
    note,
  });
});

// Update Note
export const updateNote = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;

  let note = await Note.findOne({ _id: id, createdBy: req.user._id });
  if (!note) {
    return next(new ErrorHandler("Note not found!", 404));
  }

  note = await Note.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    message: "Note updated successfully",
    note,
  });
});

// Delete Note
export const deleteNote = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;

  const note = await Note.findOne({ _id: id, createdBy: req.user._id });
  if (!note) {
    return next(new ErrorHandler("Note not found!", 404));
  }

  await note.deleteOne();

  res.status(200).json({
    success: true,
    message: "Note deleted successfully!",
  });
});
