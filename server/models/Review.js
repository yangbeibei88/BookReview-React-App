import mongoose from "mongoose";
const { Schema } = mongoose;

const getLocalDate = () => new Date();

const ReviewSchema = new Schema({
  rating: { type: Number },
  bookTitle: { type: String, required: [true, "Please add a book title"] },
  review: { type: String, required: [true, "please add your book review"] },
  postedDate: { type: Date, default: getLocalDate },
  lastUpdated: { type: Date },
});

export const Review = mongoose.model("Review", ReviewSchema);
