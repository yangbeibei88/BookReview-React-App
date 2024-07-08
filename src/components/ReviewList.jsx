import { ReviewItem } from "./ReviewItem.jsx";
export const ReviewList = ({ feedbacks }) => {
  if (feedbacks.length === 0) {
    return <p>No feedback yet.</p>;
  } else {
    return (
      <div className="container">
        {feedbacks.map(({ id, rating, text }) => {
          return <ReviewItem key={id} rating={rating} feedback={text} />;
        })}
      </div>
    );
  }
};
