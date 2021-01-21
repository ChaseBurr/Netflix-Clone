import React from "react";
const imgUrl = "https://image.tmdb.org/t/p/original";

function MovieCard(props) {
   return (
      <div className="movie-card">
         <img src={`${imgUrl}${props.imgSrc}`} alt="" />
      </div>
   );
}

export default MovieCard;
