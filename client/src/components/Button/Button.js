import React from "react";
import "./Button.css";

const Button = props => (

  <span className="waves-effect waves-light btn .home-btn" {...props}>
    <i className="material-icons left">add_circle</i>Add to Pack
  </span>
  
);

export default Button;
