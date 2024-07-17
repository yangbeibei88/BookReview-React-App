import { Review } from "../models/Review.js";

// get All reviews
export const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json({ success: true, data: reviews });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
};

// get one review
export const getReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) {
      return res
        .status(404)
        .json({ success: false, error: "Review not found" });
    }
    console.log(review);
    res.status(200).json({ success: true, data: review });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, error: "Something went wrong." });
  }
};

// add a review
export const createReview = async (req, res) => {
  // prepare data instance
  const newReview = new Review({
    rating: req.body.rating,
    bookTitle: req.body.bookTitle,
    review: req.body.review,
  });

  try {
    const savedNewReview = await newReview.save();
    console.log(savedNewReview);
    res.status(201).json({ success: true, data: savedNewReview });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
};

// update a review
export const updateReview = async (req, res) => {
  const lastUpdatedDate = new Date(
    new Date().getTime() - new Date().getTimezoneOffset() * 60000
  );
  try {
    const review = await Review.findById(req.params.id);

    if (!review) {
      return res
        .status(404)
        .json({ success: false, error: "Review not found" });
    }

    const updatedReview = await Review.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          rating: req.body.rating,
          bookTitle: req.body.bookTitle,
          review: req.body.review,
          lastUpdated: lastUpdatedDate,
        },
      },
      { new: true }
    );
    console.log(updatedReview);
    res.status(200).json({ success: true, data: updatedReview });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
};

// delete an review
export const deleteReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) {
      return res
        .status(404)
        .json({ success: false, error: "Review not found" });
    }

    await Review.findByIdAndDelete(req.params.id);
    return res.status(200).json({ success: true, data: {} });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
};
