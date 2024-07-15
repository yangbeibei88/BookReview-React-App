import { createContext, useState, useEffect } from "react";

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

  const server = "https://yangbeibei88.github.io/BookReview-React-App";

  // fetch data
  const fetchData = async () => {
    const response = await fetch(`${server}/reviews?_sort=id&_order=desc`);
    const data = await response.json();
    // console.log(data);
    setReviews(data);
    setIsLoading(false);
  };

  const addReview = async (newReview) => {
    newReview.postedDate = new Date().toLocaleString("en-AU", {
      hour12: false,
      timeZone: "Australia/Brisbane",
    });
    const response = await fetch(`${server}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    });

    const newData = await response.json();
    console.log(newData);
    setReviews([newData, ...reviews]);
  };

  const deleteReview = async (id) => {
    if (confirm(`Are you sure you want to delete your book review#${id}?`)) {
      await fetch(`${server}/reviews/${id}`, {
        method: "DELETE",
      });
      setReviews(reviews.filter((item) => item.id !== id));
      console.log(`Review # ${id} deleted!`);
    }
  };

  const editReview = (item) => {
    setReviewEdit({ item, edit: true });
  };

  const updateReview = async (id, updatedItem) => {
    const existingResponse = await fetch(`${server}/reviews/${id}`);
    const existingReview = await existingResponse.json();

    updatedItem.lastUpdated = new Date().toLocaleString("en-AU", {
      hour12: false,
      timeZone: "Australia/Brisbane",
    });

    const updatedReview = { ...existingReview, ...updatedItem };

    const response = await fetch(`${server}/reviews/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedReview),
    });

    const updatedData = await response.json();

    setReviews(
      reviews.map((item) =>
        item.id === id ? { ...item, ...updatedData } : item,
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
