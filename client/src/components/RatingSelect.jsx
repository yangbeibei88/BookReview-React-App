export const RatingSelect = ({ ratingValue, handleChange }) => {
  return (
    <ul className="rating">
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type="radio"
            name="rating"
            id={`num${i + 1}`}
            value={i + 1}
            checked={ratingValue === i + 1}
            onChange={handleChange}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  );
};
