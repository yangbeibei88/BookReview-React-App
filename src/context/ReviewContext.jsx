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

  const [reviewEdit, setReviewEdit] = useState({
    item: {},
    edit: false,
  });

  const addReview = (newReview) => {
    console.log(newReview);
    setReviews([newReview, ...reviews]);
  };

  const deleteReview = (id) => {
    if (confirm(`Are you sure you want to delete your book review#${id}?`)) {
      setReviews(reviews.filter((item) => item.id !== id));
      console.log(`Review # ${id} deleted!`);
    }
  };

  const editReview = (item) => {
    setReviewEdit({ item, edit: true });
  };

  return (
    <ReviewContext.Provider
      value={{
        reviews,
        deleteReview,
        addReview,
        editReview,
        reviewEdit,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
};
