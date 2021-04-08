import React from "react";
import { Route, Switch } from "react-router";
import SignIn from "../pages/Auth/SignIn";
import Signup from "../pages/Auth/Signup";
import HomePage from "../pages/HomePage/HomePage";

const PrimaryRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <div className="main">
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={Signup} />
      </div>
    </Switch>
  );
};

export default PrimaryRoutes;
