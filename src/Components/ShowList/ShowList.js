import React from "react";

function ShowList(props) {
   return (
      <div className="movie-list">
         <h1>{props.header}</h1>
         <div className="shows">{props.children}</div>
      </div>
   );
}

export default ShowList;
