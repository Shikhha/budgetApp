import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import "./styles/style.scss";
import AppRouter from "./portfolio/AppRouter";

ReactDOM.render(<AppRouter />, document.getElementById("root"));
