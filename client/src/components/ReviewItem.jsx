import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import { ReviewContext } from "../context/ReviewContext.jsx";
import { Card } from "./shared/Card.jsx";

export const ReviewItem = ({ item }) => {
  const { deleteReview, editReview } = useContext(ReviewContext);

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => deleteReview(item._id)}>
        <FaTimes color="red" />
      </button>
      <button className="edit" onClick={() => editReview(item)}>
        <FaEdit color="green" />
      </button>
      <h2 className="title">{item.bookTitle}</h2>
      <p className="text-display">{item.review}</p>
      <div className="post-footer">
        <p>
          <small>Posted at: {item.postedDate}</small>
        </p>
        <p>
          <small>Last Updated: {item.lastUpdated}</small>
        </p>
      </div>
    </Card>
  );
};
