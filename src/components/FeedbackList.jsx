import { FeedbackItem } from "./FeedbackItem.jsx";
export const FeedbackList = ({ feedbacks }) => {
  if (feedbacks.length === 0) {
    return <p>No feedback yet.</p>;
  } else {
    return (
      <div className="container">
        {feedbacks.map(({ id, rating, text }) => {
          return <FeedbackItem key={id} rating={rating} feedback={text} />;
        })}
      </div>
    );
  }
};
