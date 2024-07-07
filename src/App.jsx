import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
