import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header.jsx";
import { ReviewList } from "./components/ReviewList.jsx";
import { reviewData } from "./data/reviewData.js";
import { ReviewStats } from "./components/ReviewStats.jsx";
import { ReviewForm } from "./components/ReviewForm.jsx";
import { AboutPage } from "./pages/AboutUs.jsx";
import { Footer } from "./components/Footer.jsx";
import { ReviewProvider } from "./context/ReviewContext.jsx";

const App = () => {
  const [data, setData] = useState(reviewData);

  const deleteReview = (id) => {
    if (confirm(`Are you sure you want to delete your book review#${id}?`)) {
      setData(data.filter((item) => item.id !== id));
      console.log(`Review # ${id} deleted!`);
    }
  };

  const handleAdd = (newReview) => {
    console.log(newReview);
    // setData(data.concat(newReview));
    setData([newReview, ...data]);
  };

  return (
    <ReviewProvider>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <ReviewForm addReview={handleAdd} />
                  <ReviewStats />
                  <ReviewList handleDelete={deleteReview} />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </ReviewProvider>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
