import React from "react";
import { NavLink } from "react-router-dom";

const Link = (props) => {
  return (
    <NavLink
      to={props.to || "/"}
      exact
      activeClassName={props.activeClassName}
      className={props.className}
      onClick={props.onClick}
    >
      {props.children}
    </NavLink>
  );
};

export default Link;
