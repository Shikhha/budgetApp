import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import Portfolio from "./Portfolio";
import PortfolioItem from "./PortfolioItem";
import Contact from "./Contact";
import Home from "./Home";
import Links from "./Links.js";

const routes = () => {
  return (
    <BrowserRouter>
      <div>
        <Links />
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Portfolio" component={Portfolio} exact={true} />
          <Route path="/Portfolio/:id" component={PortfolioItem} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default routes;
