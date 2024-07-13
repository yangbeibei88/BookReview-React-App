import { useState } from "react";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { FormContainer } from "./shared/FormContainer.jsx";
import { Button } from "./shared/Button.jsx";
import { RatingSelect } from "./RatingSelect.jsx";
import { ReviewContext } from "../context/ReviewContext.jsx";

export const ReviewForm = () => {
  const [bookTitle, setBookTitle] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);
  const { addReview } = useContext(ReviewContext);

  const handleBookTitleChange = (e) => {
    setBookTitle(e.target.value);
  };

  const handleReviewTextChange = (e) => {
    setReviewText(e.target.value);
    if (reviewText === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (reviewText.trim().length < 10 && reviewText !== "") {
      setBtnDisabled(true);
      setMessage("Review must be more than 10 characters");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
  };

  const handleRatingChange = (e) => {
    setRating(+e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (reviewText.trim().length > 10) {
      const newReview = {
        id: uuidv4(),
        rating: rating,
        bookTitle: bookTitle,
        review: reviewText,
      };

      // console.log(newReview);

      addReview(newReview);
      setBookTitle("");
      setReviewText("");
      setBtnDisabled(true);
    }
  };

  return (
    <FormContainer>
      <form className="form-container" onSubmit={handleSubmit}>
        <h2> Write a review for a book you read📖.</h2>
        {/* @todo - rating select component */}
        {/* <RatingSelect selected={rating} setSelected={setRating} /> */}
        <RatingSelect ratingValue={rating} handleChange={handleRatingChange} />
        <div className="input-group">
          <label htmlFor="book-title">Book Title:</label>
          <input
            type="text"
            name="book-title"
            id="book-title"
            placeholder="Book Name"
            onChange={handleBookTitleChange}
            value={bookTitle}
          />
        </div>
        <div className="input-group">
          <label htmlFor="review">Review:</label>
          <textarea
            name="review"
            id="review"
            rows={10}
            placeholder="Write a review for this book."
            value={reviewText}
            onChange={handleReviewTextChange}
          >
            {reviewText}
          </textarea>
          {message && <div className="message">{message}</div>}
        </div>
        <Button version={"secondary"} type={"submit"} isDisabled={btnDisabled}>
          Submit Review
        </Button>
      </form>
    </FormContainer>
  );
};
