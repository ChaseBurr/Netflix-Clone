import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";

// CSS imports
import "./App.css";
import "./Pages/PageStyling.css";
import "./Components/ComponentStyling.css";

function App() {
   return (
      <div className="Project">
         <Router>
            <Switch>
               <Route path="/" component={LandingPage} />
            </Switch>
         </Router>
      </div>
   );
}

export default App;
