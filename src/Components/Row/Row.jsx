import React, { useState, useEffect } from "react";
import axios from "./../../axios";
import YouTube from "react-youtube";
import MovieTrailer from "movie-trailer";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
   const [movies, setMovies] = useState([]);
   const [trailerUrl, setTrailerUrl] = useState("");
   let rowNumber = Math.floor(Math.random() * 100);

   useEffect(() => {
      async function fetchData() {
         const { data } = await axios.get(fetchUrl);
         setMovies(data.results);
      }
      fetchData();
   }, [fetchUrl]);

   const opts = {
      height: "800",
      width: "100%",
      playerVars: {
         autoplay: 1,
      },
   };

   const handleClick = (movie) => {
      // Close trailer when click movie again
      if (trailerUrl) {
         setTrailerUrl("");
      } else {
         MovieTrailer(movie?.original_title || "")
            .then((url) => {
               const urlParams = new URLSearchParams(new URL(url).search);
               setTrailerUrl(urlParams.get("v"));
            })
            .catch((error) => console.error(error));
      }
   };

   return (
      <div className="row">
         {/* Title */}
         <h2>{title}</h2>

         {/* Container -> posters */}
         <div className={`row__posters row_${rowNumber}`}>
            <button
               className={
                  isLargeRow ? "slide__left slide__left__large" : "slide__left"
               }
               onClick={() => {
                  document.querySelector(
                     `.row_${rowNumber}`
                  ).scrollLeft -= 1000;
               }}
            >
               <i className="fas fa-arrow-left"></i>
            </button>

            {/* Posters */}
            {movies.map(
               (movie) =>
                  movie.poster_path && (
                     <img
                        key={movie.id}
                        onClick={() => handleClick(movie)}
                        className={`row__poster${
                           isLargeRow ? " row__poster__large" : ""
                        }`}
                        src={`${base_url}${
                           isLargeRow ? movie.poster_path : movie.backdrop_path
                        }`}
                        alt={movie.name}
                     />
                  )
            )}
            <button
               className={
                  isLargeRow
                     ? "slide__right slide__right__large"
                     : "slide__right"
               }
               onClick={() => {
                  document.querySelector(
                     `.row_${rowNumber}`
                  ).scrollLeft += 1000;
               }}
            >
               <i className="fas fa-arrow-right"></i>
            </button>
         </div>
         {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
   );
}

export default Row;
