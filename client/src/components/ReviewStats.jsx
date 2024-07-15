import { useContext } from "react";
import { ReviewContext } from "../context/ReviewContext";

export const ReviewStats = () => {
  const { reviews } = useContext(ReviewContext);

  const averageRating = (
    reviews.reduce((total, { rating }) => total + rating, 0) / reviews.length
  )
    .toFixed(1)
    .replace(/[.,]0$/, "");
  return (
    <div className="review-stats">
      <h4>{reviews.length} Reviews</h4>
      <h4>Average Rating: {isNaN(averageRating) ? 0 : averageRating}</h4>
    </div>
  );
};
