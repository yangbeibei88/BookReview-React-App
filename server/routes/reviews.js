import express from "express";
import {
  createReview,
  deleteReview,
  getReview,
  getReviews,
  updateReview,
} from "../controllers/ReviewController.js";

export const router = express.Router();

// get all reviews
router.get("/", getReviews);

// get a single review
router.get("/:id", getReview);

// add a review
router.post("/", createReview);

// update a review
router.put("/:id", updateReview);

// delete a review
router.delete("/:id", deleteReview);
