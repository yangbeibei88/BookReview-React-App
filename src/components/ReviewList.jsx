import { ReviewItem } from "./ReviewItem.jsx";
export const ReviewList = ({ reviews, handleDelete }) => {
  if (reviews.length === 0) {
    return <p>No feedback yet.</p>;
  } else {
    return (
      <div className="review-list">
        {reviews.map((item) => {
          return (
            <ReviewItem key={item.id} item={item} handleDelete={handleDelete} />
          );
        })}
      </div>
    );
  }
};
