import React from "react";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={props.className}
      disabled={props.disabled}
      style={props.style}
    >
      {props.children}
    </button>
  );
};

export default Button;
