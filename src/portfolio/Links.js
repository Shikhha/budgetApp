import React from "react";
import { NavLink } from "react-router-dom";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Home from "./Home";
import "../styles/style.scss";

const Links = () => {
  return (
    <div>
      <NavLink to="/" activeClassName="is-active">
        Home
      </NavLink>
      <NavLink to="/Portfolio" activeClassName="is-active">
        Portfolio
      </NavLink>
      <NavLink to="Contact" activeClassName="is-active">
        Contact
      </NavLink>
    </div>
  );
};

export default Links;
