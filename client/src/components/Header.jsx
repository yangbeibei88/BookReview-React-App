export const Header = () => {
  const headerStyle = {
    backgroundColor: "rgba(0,0,0,0.4)",
    color: "#5ec2d7",
  };
  return (
    <header style={headerStyle}>
      <div className="container">
        <h1>Simple Book Review React App</h1>
      </div>
    </header>
  );
};
