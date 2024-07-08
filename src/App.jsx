import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./components/Header.jsx";
import { FeedbackList } from "./components/FeedbackList.jsx";
import { feedbackData } from "./data/feedbackData.js";

const App = () => {
  return (
    <div>
      <Header />
      <FeedbackList feedbacks={feedbackData} />
    </div>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
