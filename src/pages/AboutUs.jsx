import { Card } from "../components/shared/Card.jsx";

export const AboutPage = () => {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>This is a React app to write book reviews.</p>
        <p>Version: 1.0.0</p>
        <a href="/">Back to Home</a>
      </div>
    </Card>
  );
};
