import { FaTimes } from "react-icons/fa";
import { useContext } from "react";
import { ReviewContext } from "../context/ReviewContext.jsx";
import { Card } from "./shared/Card.jsx";

export const ReviewItem = ({ item }) => {
  const { deleteReview } = useContext(ReviewContext);

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => deleteReview(item.id)}>
        <FaTimes color="red" />
      </button>
      <h2 className="title">{item.bookTitle}</h2>
      <p className="text-display">{item.review}</p>
      <small>{item.date}</small>
    </Card>
  );
};
