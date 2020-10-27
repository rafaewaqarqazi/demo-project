import React from "react";

const MainCard = ({ tagOne, tagTwo, children }) => {
  return (
    <div className="d-flex flex-column mx-4">
      <div className="d-flex align-items-center justify-content-center position-relative px-5 card-img-container">
        <div className="tag">Best Seller</div>
        {children}
      </div>
      <div className="card-txt">{tagOne}</div>
      <div className="card-txt">{tagTwo}</div>
    </div>
  );
};

export default MainCard;
