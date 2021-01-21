import React from "react";

function Browse() {
   return (
      <div>
         <div className="background-film">
            <div className="overlay"></div>
            <div className="browser-navbar">
               <img
                  src="/Netflix-Clone/images/netflix-logo-1.png"
                  className="top-logo"
                  alt=""
               />
               <ul className="show-tabs">
                  <li>Home</li>
                  <li>TV Shows</li>
                  <li>Movies</li>
                  <li>New & Popular</li>
                  <li>My List</li>
               </ul>
               <ul className="personal-tabs">
                  <li>
                     <i className="fas fa-search"></i>
                  </li>
                  <li>KIDS</li>
                  <li>DVD</li>
                  <li>present</li>
                  <li>notification</li>
                  <li>profile</li>
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
      </div>
   );
}

export default Browse;
