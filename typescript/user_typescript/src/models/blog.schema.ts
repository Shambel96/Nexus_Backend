// Schema -> Blueprint of a table
import mongoose, { Schema, Document } from "mongoose";

export interface BlogDocument extends Document {}

const blogSchema: Schema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
});

export default mongoose.model<BlogDocument>("Blog", blogSchema);

//
