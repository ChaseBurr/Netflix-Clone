import React, { useState, useEffect } from "react";
import axios from "./../../axios";
import requests from "./../../requests";
import "./Banner.css";

function Banner() {
   const [movie, setMovie] = useState([]);

   useEffect(() => {
      async function fetchData() {
         const req = await axios.get(requests.fetchNetflixOriginals);
         setMovie(
            req.data.results[
               Math.floor(Math.random() * req.data.results.length - 1)
            ]
         );
         return req;
      }
      fetchData();
   }, []);

   function truncate(str, n) {
      return str?.lengt > n ? str.substr(0, n - 1) + "..." : str;
   }

   return (
      <header
         className="banner"
         style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
         }}
      >
         <div className="banner__contents">
            {/* title */}
            <h1 className="banner__title">
               {movie?.title || movie?.name || movie?.original_name}
            </h1>

            {/* Buttons */}
            <div className="banner_buttons">
               <button className="banner__button">Play</button>
               <button className="banner__button">My List</button>
            </div>

            {/* Descriptions */}
            <h1 className="banner__description">{movie?.overview}</h1>
         </div>
         <div className="banner__fadeBottom"></div>
      </header>
   );
}

export default Banner;
