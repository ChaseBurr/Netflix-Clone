import React from "react";
import { Link } from "react-router-dom";

function Button(props) {
   return (
      <Link to={props.link}>
         <button className="btn" onClick={props.onClick}>
            {props.text}
         </button>
      </Link>
   );
}

export default Button;
