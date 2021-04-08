import React from "react";
import { BrowserRouter } from "react-router-dom";
import SignIn from "./pages/Auth/SignIn";
import Signup from "./pages/Auth/Signup";
import PrimaryRoutes from "./Routes/PrimaryRoutes";
import "./styles/style.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <PrimaryRoutes />
      </BrowserRouter>
    </>
  );
};

export default App;
