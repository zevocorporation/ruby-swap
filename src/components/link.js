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
      id={props.id}
    >
      {props.children}
    </NavLink>
  );
};

export default Link;
