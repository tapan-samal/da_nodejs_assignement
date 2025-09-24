import express from "express";
import {
  createNote,
  deleteNote,
  getNotes,
  getNoteById,
  updateNote,
} from "../controllers/noteController.js";
import { isAuthenticated } from "../middlewares/authentication.js";

const router = express.Router();

router.post("/create", isAuthenticated, createNote);
router.get("/all", isAuthenticated, getNotes);
router.get("/:id", isAuthenticated, getNoteById);
router.put("/:id", isAuthenticated, updateNote);
router.delete("/:id", isAuthenticated, deleteNote);

export default router;
