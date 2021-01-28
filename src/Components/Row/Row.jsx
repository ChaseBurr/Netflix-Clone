import React, { useState, useEffect } from "react";
import axios from "./../../axios";
import YouTube from "react-youtube";
import MovieTrailer from "movie-trailer";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
   const [movies, setMovies] = useState([]);
   const [trailerUrl, setTrailerUrl] = useState("");

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
         <div className="row__posters">
            {/* Posters */}
            {movies.map((movie) => (
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
            ))}
         </div>
         {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
   );
}

export default Row;
