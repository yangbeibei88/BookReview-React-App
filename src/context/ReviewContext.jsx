import { createContext, useState } from "react";

const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
  const [review, setReview] = useState({
    id: 1,
    rating: 10,
    bookTitle: "Book Title",
    review: "lorem lorem",
  });
  return (
    <ReviewContext.Provider
      value={{
        review,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
};
