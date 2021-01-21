import React from "react";

function FormCenter(props) {
   return (
      <div className="form-center">
         <h1>{props.header}</h1>
         {props.children}
      </div>
   );
}

export default FormCenter;
