import mongoose from "mongoose";

const PromptSchema = new mongoose.Schema({
  authorName: {
    type: String,
    required: ["Author Name is required.", true],
  },
  email: {
    type: String,
    required: ["Email is required.", true],
  },
  prompt: {
    type: String,
    required: ["Prompt is required.", true],
  },
  tag: {
    type: String,
    required: ["Tag is required.", true],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Prompt = mongoose.models.Prompt || mongoose.model("Prompt", PromptSchema);
