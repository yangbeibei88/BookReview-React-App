import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./components/Header.jsx";
import { ReviewList } from "./components/ReviewList.jsx";
import { reviewData } from "./data/reviewData.js";

const App = () => {
  return (
    <div>
      <Header />
      <ReviewList reviews={reviewData} />
    </div>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
