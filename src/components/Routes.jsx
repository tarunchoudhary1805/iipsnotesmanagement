import React from "react";
import { Route, Switch } from "react-router";
import Home from "../components/Home";
import Login from "../components/Login";
import Contact from "../components/Contact";
import About from "../components/About";
import Register from "../components/Register";
import UploadNotes from "./UploadNotes";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/uploadNotes" component={UploadNotes} />
    </Switch>
  );
};

export default Routes;
