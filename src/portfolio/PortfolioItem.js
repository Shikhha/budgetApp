import React from "react";

const PortfolioItem = props => {
  return (
    <div>
      <h1>A thing I have done</h1>
      <p>This page is for the item with id of ${props.match.params.id}</p>
    </div>
  );
};

export default PortfolioItem;
