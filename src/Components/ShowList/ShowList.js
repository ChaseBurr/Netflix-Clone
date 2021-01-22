import React from "react";

function ShowList(props) {
   return (
      <div className="movie-list">
         <div className="glider-contain multiple">
            <h1>{props.header}</h1>
            <div className="shows glider">{props.children}</div>
            <button
               aria-label="Previous"
               className="glider-prev glider-arrow-left"
            >
               <i className="fa fa-chevron-left "></i>
            </button>
            <button
               aria-label="Next"
               className="glider-next glider-arrow-right"
            >
               <i className="fa fa-chevron-right"></i>
            </button>
         </div>
      </div>
   );
}

export default ShowList;
