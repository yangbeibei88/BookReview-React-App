import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./components/Header.jsx";
import { ReviewList } from "./components/ReviewList.jsx";
import { reviewData } from "./data/reviewData.js";

const App = () => {
  const [data, setData] = useState(reviewData);
  const deleteFeedback = (id) => {
    if (confirm(`Are you sure you want to delete your book review#${id}?`)) {
      setData(data.filter((item) => item.id !== id));
      console.log(`Review # ${id} deleted!`);
    }
  };
  return (
    <div>
      <Header />
      <ReviewList reviews={data} handleDelete={deleteFeedback} />
    </div>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
