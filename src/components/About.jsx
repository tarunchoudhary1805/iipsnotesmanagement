import React from "react";
import { Redirect } from "react-router";

const About = () => {
  if (
    !(
      localStorage.getItem("token") != null ||
      localStorage.getItem("token") != undefined
    )
  ) {
    return <Redirect to="/login" />;
  }
  return <div>About</div>;
};

export default About;
