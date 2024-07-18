import { createContext, useState, useEffect } from "react";

export const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [reviewEdit, setReviewEdit] = useState({
    item: {},
    edit: false,
  });

  // const apiURL = import.meta.env.VITE_API_URL;
  const apiURL =
    "https://book-review-react-app-028d329cbc98.herokuapp.com/api/reviews";

  useEffect(() => {
    fetchData();
  }, []);

  // display all reviews
  const fetchData = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
    setReviews(data.data);
    setIsLoading(false);
  };

  // add a review
  const addReview = async (newReview) => {
    // newReview.postedDate = new Date().toLocaleString("en-AU", {
    //   hour12: false,
    //   timeZone: "Australia/Brisbane",
    // });
    const response = await fetch(apiURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    });

    const newData = await response.json();
    console.log(newData);
    setReviews([newData.data, ...reviews]);
  };

  // delete a review
  const deleteReview = async (id) => {
    if (confirm(`Are you sure you want to delete your book review#${id}?`)) {
      await fetch(`${apiURL}/${id}`, {
        method: "DELETE",
      });
      setReviews(reviews.filter((item) => item._id !== id));
      console.log(`Review # ${id} deleted!`);
    }
  };

  const editReview = (item) => {
    setReviewEdit({ item, edit: true });
    console.log(item._id);
  };

  // update a review
  const updateReview = async (id, updatedItem) => {
    const existingResponse = await fetch(`${apiURL}/${id}`);
    const existingReview = await existingResponse.json();

    // updatedItem.lastUpdated = new Date().toLocaleString("en-AU", {
    //   hour12: false,
    //   timeZone: "Australia/Brisbane",
    // });

    const updatedReview = { ...existingReview.data, ...updatedItem };

    const response = await fetch(`${apiURL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedReview),
    });

    const updatedData = await response.json();

    setReviews(
      reviews.map((item) =>
        item._id === id ? { ...item, ...updatedData.data } : item,
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
