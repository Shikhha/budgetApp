import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import configureStore from "./store/configStore";
import "./styles/style.scss";
import AppRouter from "./routers/AppRouter";

const store = configureStore();

console.log(store.getState());

ReactDOM.render(<AppRouter />, document.getElementById("root"));
