import { ReviewItem } from "./ReviewItem.jsx";
export const ReviewList = ({ reviews }) => {
  if (reviews.length === 0) {
    return <p>No feedback yet.</p>;
  } else {
    return (
      <div className="container">
        {reviews.map(({ id, rating, bookTitle, review, date }) => {
          return (
            <ReviewItem
              key={id}
              rating={rating}
              bookTitle={bookTitle}
              review={review}
              date={date}
            />
          );
        })}
      </div>
    );
  }
};
