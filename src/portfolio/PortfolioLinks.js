import React from "react";
import { NavLink } from "react-router-dom";

const PortfolioLinks = () => {
  return (
    <div>
      <NavLink to="/Portfolio/1">Item one</NavLink>
      <NavLink to="/Portfolio/2">Item two</NavLink>
    </div>
  );
};

export default PortfolioLinks;
