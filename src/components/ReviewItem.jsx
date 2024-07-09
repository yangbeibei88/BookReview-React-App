import { FaTimes } from "react-icons/fa";
import { Card } from "./shared/Card.jsx";
export const ReviewItem = ({ item, handleDelete }) => {
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => handleDelete(item.id)}>
        <FaTimes color="red" />
      </button>
      <h2 className="title">{item.bookTitle}</h2>
      <p className="text-display">{item.review}</p>
      <small>{item.date}</small>
    </Card>
  );
};
