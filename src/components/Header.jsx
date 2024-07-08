export const Header = () => {
  const headerStyle = {
    backgroundColor: "rgba(0,0,0,0.4)",
    color: "#ff6a95",
  };
  return (
    <header style={headerStyle}>
      <div className="container">
        <h1>Simple Book Review React App</h1>
      </div>
    </header>
  );
};
