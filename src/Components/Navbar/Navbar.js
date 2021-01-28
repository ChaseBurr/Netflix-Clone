import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
   const [show, handleShow] = useState(false);

   useEffect(() => {
      window.addEventListener("scroll", () => {
         if (window.scrollY > 100) {
            handleShow(true);
         } else handleShow(false);
      });
      return () => {
         window.removeEventListener("scroll");
      };
   }, []);
   return (
      <nav className={`${show && "nav__black"}`}>
         <img
            className="nav__logo"
            src="https://cdn.worldvectorlogo.com/logos/netflix-3.svg"
            alt="Netflix Logo"
         />
         <img
            className="nav__avatar"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
            alt="Profile Avatar"
         />
      </nav>
   );
}

export default Navbar;
