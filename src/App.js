// React Imports
import React from "react";

// CSS imports
import "./App.css";

// Component imports
import { Row, Banner, Navbar } from "./Components/exports";

// request import
import requests from "./requests";

// App Component
function App() {
   return (
      <div className="app">
         {/* Nav */}
         <Navbar />

         {/* Banner */}
         <Banner />

         {/* Rows */}
         <Row
            title="NETFLIX ORIGINALS"
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow
         />
         <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
         <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
         <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
         <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
         <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
         <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      </div>
   );
}

export default App;
