import { createContext, useState } from "react";

export const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      rating: 10,
      bookTitle: "Book Title",
      review: "lorem lorem",
    },
    {
      id: 2,
      rating: 9,
      bookTitle: "Book Title",
      review: "lorem lorem",
    },
    {
      id: 3,
      rating: 5,
      bookTitle: "Book Title",
      review: "lorem lorem",
    },
  ]);

  const deleteReview = (id) => {
    if (confirm(`Are you sure you want to delete your book review#${id}?`)) {
      setReviews(reviews.filter((item) => item.id !== id));
      console.log(`Review # ${id} deleted!`);
    }
  };

  const addReview = (newReview) => {
    console.log(newReview);
    setReviews([newReview, ...reviews]);
  };

  return (
    <ReviewContext.Provider
      value={{
        reviews,
        deleteReview,
        addReview,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
};
