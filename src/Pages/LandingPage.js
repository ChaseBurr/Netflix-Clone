import React from "react";
import Button from "../Components/Buttons/Button";

function LandingPage() {
   return (
      <div className="landingPage">
         <div className="landing-page-header">
            <div className="landing-page-logo">
               <img src="/Netflix-Clone/images/netflix-logo-1.png" alt="logo" />
            </div>
            <Button className="landing-page-button-login" text="Sign in" />
         </div>
         <div className="our-story-page landing-page-hero">
            <div className="overlay"></div>
            <div className="hero-content">
               <h1>
                  Unlimited movies, TV <br /> shows, and more.
               </h1>
               <h3>Watch anywhere. Cancel anytime</h3>
               <h4>
                  Ready to watch? Enter your email to create or restart your
                  membership.
               </h4>
               <form>
                  <input type="text" Placeholder="Email Address" />
                  <button>GET STARTED</button>
               </form>
            </div>
         </div>
         <div className="our-story-page landing-page-tv">
            <div className="content-text">
               <h1>Enjoy on your TV.</h1>
               <h3>
                  Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                  Blu-ray players, and more.
               </h3>
            </div>
            <div className="tv-image">
               <img src="/Netflix-Clone/images/tv.png" alt="" />
            </div>
         </div>
         <div className="our-story-page"></div>
      </div>
   );
}

export default LandingPage;
