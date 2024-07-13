import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [reviewEdit, setReviewEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchData();
  }, []);

  // fetch data
  const fetchData = async () => {
    const response = await fetch(
      `http://localhost:8080/reviews?_sort=id&_order=desc`,
    );
    const data = await response.json();
    // console.log(data);
    setReviews(data);
    setIsLoading(false);
  };

  const addReview = (newReview) => {
    newReview.id = uuidv4();
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

  const updateReview = (id, updatedItem) => {
    setReviews(
      reviews.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item,
      ),
    );
  };

  return (
    <ReviewContext.Provider
      value={{
        reviews,
        reviewEdit,
        isLoading,
        deleteReview,
        addReview,
        editReview,
        updateReview,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
};
