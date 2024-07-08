import { Card } from "./shared/Card.jsx";
export const ReviewItem = ({ rating, feedback }) => {
  return (
    <Card>
      <div className="num-display">{rating}</div>
      <div className="text-display">{feedback}</div>
    </Card>
  );
};
