import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MovieCard from "../Components/Cards/MovieCard";
import ShowList from "../Components/ShowList/ShowList";
import { getPopular } from "../Components/FetchData";

function Browse() {
   const [popularData, setPopularData] = useState([]);

   useEffect(() => {
      async function getData() {
         setPopularData(
            await getPopular().then((response) => response.data.results)
         );
      }
      getData();
   }, []);

   return (
      <>
         <div className="browser-hero">
            <div className="background-film"></div>
            <div className="overlay"></div>
            <div className="browser-navbar">
               <img
                  src="/Netflix-Clone/images/netflix-logo-1.png"
                  className="top-logo"
                  alt=""
               />
               <ul className="show-tabs">
                  <li>
                     <Link to="/browse">Home</Link>
                  </li>
                  <li>
                     <Link to="/browse/tv">TV Shows</Link>
                  </li>
                  <li>
                     <Link to="/browse/movies">Movies</Link>
                  </li>
                  <li>
                     <Link to="popular">New & Popular</Link>
                  </li>
                  <li>
                     <Link>My List</Link>
                  </li>
               </ul>
               <ul className="personal-tabs">
                  <li>
                     <i className="fas fa-search"></i>
                  </li>
                  <li>
                     <Link to="/browse/kids">KIDS</Link>
                  </li>
                  <li>
                     <Link to="/browse/dvd">DVD</Link>
                  </li>
                  <li>
                     <Link to="/">
                        <i className="fas fa-gift"></i>
                     </Link>
                  </li>
                  <li>
                     <Link to="/">
                        <i className="fas fa-bell"></i>
                     </Link>
                  </li>
                  <li>
                     <Link to="/">
                        <i className="fas fa-user"></i>
                     </Link>
                  </li>
               </ul>
            </div>
            <div className="film">
               <img src="/Netflix-Clone/images/netflix-film-1.webp" alt="" />
               <div className="film-buttons">
                  <button className="btn-white">
                     <i className="fas fa-play"></i>Play
                  </button>
                  <button className="btn-grey">
                     <i className="fas fa-info-circle"></i>More Info
                  </button>
               </div>
            </div>
         </div>
         <div className="show-list-section">
            <ShowList header="Popular">
               {popularData ? (
                  popularData.map((movie, index) => {
                     if (movie.backdrop_path)
                        return (
                           <MovieCard
                              imgSrc={movie.backdrop_path}
                              key={index}
                           />
                        );
                  })
               ) : (
                  <div>Loading...</div>
               )}
            </ShowList>
            <ShowList header="Most Watched">
               {popularData ? (
                  popularData.map((movie, index) => {
                     if (movie.backdrop_path)
                        return (
                           <MovieCard
                              imgSrc={movie.backdrop_path}
                              key={index}
                           />
                        );
                  })
               ) : (
                  <div>Loading...</div>
               )}
            </ShowList>
         </div>
      </>
   );
}

export default Browse;
