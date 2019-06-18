import React from "react";
import { NavLink } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <div>
      404: not found!<NavLink to="/">go home</NavLink>
    </div>
  );
};

export default NotFoundPage;
