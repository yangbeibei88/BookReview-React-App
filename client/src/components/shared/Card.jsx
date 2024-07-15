export const Card = ({ children, reverse = "" }) => {
  return (
    <article className={`card ${reverse && "reverse"}`}>{children}</article>
  );
};
