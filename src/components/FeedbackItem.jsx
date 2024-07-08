export const FeedbackItem = ({ rating, feedback }) => {
  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">{feedback}</div>
    </div>
  );
};
