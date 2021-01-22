import React from "react";

function ShowList(props) {
   return (
      <div className="movie-list">
         <h1>{props.header}</h1>
         <button className="glider-prev">
            <i className="fa fa-chevron-left"></i>
         </button>
         <div className="shows glider">{props.children}</div>
         <div id="dots" className="glider-dots"></div>
         <button className="glider-next">
            <i className="fa fa-chevron-right"></i>
         </button>
      </div>
   );
}

export default ShowList;
