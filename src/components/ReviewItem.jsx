import { Card } from "./shared/Card.jsx";
export const ReviewItem = ({ rating, bookTitle, review, date }) => {
  return (
    <Card>
      <div className="num-display">{rating}</div>
      <h2>{bookTitle}</h2>
      <div className="text-display">{review}</div>
      <small>{date}</small>
    </Card>
  );
};
