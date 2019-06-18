import React from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import PortfolioLink from "./PortfolioLinks";

const Portfolio = () => {
  return (
    <div>
      <h1>Portfolio</h1>
      <p>Check out the following things I have done</p>
      <div>
        <PortfolioLink />
      </div>
    </div>
  );
};

export default Portfolio;
