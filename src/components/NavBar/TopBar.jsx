import React from "react";

const TopBar = () => {
  const topBarStyle = {
    backgroundColor: "purple",
    color: "white",
    padding: "10px 0",
    textAlign: "center",
  };

  return (
    <div style={topBarStyle}>
      Get 10% off on your first Booking! Use the code 'Welcome 10'.
    </div>
  );
};

export default TopBar;