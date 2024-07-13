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
  ]);
  return (
    <ReviewContext.Provider
      value={{
        reviews,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
};
