import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header.jsx";
import { ReviewList } from "./components/ReviewList.jsx";
import { ReviewStats } from "./components/ReviewStats.jsx";
import { ReviewForm } from "./components/ReviewForm.jsx";
import { AboutPage } from "./pages/AboutUs.jsx";
import { Footer } from "./components/Footer.jsx";
import { ReviewProvider } from "./context/ReviewContext.jsx";

const App = () => {
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
                  <ReviewForm />
                  <ReviewStats />
                  <ReviewList />
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
