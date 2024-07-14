import { createContext, useState, useEffect } from "react";

export const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
  const server = "http://localhost:8080";
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
    const response = await fetch(`${server}/reviews?_sort=id&_order=desc`);
    const data = await response.json();
    // console.log(data);
    setReviews(data);
    setIsLoading(false);
  };

  const addReview = async (newReview) => {
    const response = await fetch(`${server}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    });

    const newData = await response.json();
    console.log(newReview);
    setReviews([newData, ...reviews]);
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
