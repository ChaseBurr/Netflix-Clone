import React from "react";
import { Link } from "react-router-dom";
import Button from "../Components/Buttons/Button";

// Components
import FormCenter from "./../Components/Forms/FormCenter";

function Login() {
   return (
      <div className="login-page">
         <div className="overlay"></div>
         <header className="header">
            <img
               src="/Netflix-Clone/images/netflix-logo-1.png"
               alt=""
               className="top-logo"
            />
         </header>
         <FormCenter header="Sign In">
            <input placeholder="Email of Phone number" />
            <input placeholder="Password" />
            <Button text="Sign In" />
            <p>
               New to Netflix?{" "}
               <Link to="/signup">
                  <b>Sign up now</b>
               </Link>
            </p>
            <Link to="/browse">Click here for Demo</Link>
         </FormCenter>
      </div>
   );
}

export default Login;
