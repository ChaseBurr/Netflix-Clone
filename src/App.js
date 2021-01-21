import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/Login";

// CSS imports
import "./App.css";
import "./Pages/PageStyling.css";
import "./Components/ComponentStyling.css";

function App() {
   return (
      <div className="Project">
         <Router>
            <Switch>
               <Route exact path="/" component={LandingPage} />
               <Route exact path="/login" component={Login} />
            </Switch>
         </Router>
      </div>
   );
}

export default App;
