import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import image from "../images/signin-image.jpg";

const Login = (props) => {
  const [data, setData] = useState({
    email: "",

    password: "",
  });
  const [token, setToken] = useState(localStorage.getItem("token"));
  const submit = async (e) => {
    e.preventDefault();

    console.log(data);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  if (token) {
    console.log("hel i am lin login");
    return <Redirect to="/about" />;
  }
  return (
    <>
      <ToastContainer />
      <div className="container border ">
        <div className="d-flex justify-content-center pt-5">
          <h3 className="head">Login</h3>
        </div>

        <div className="register-page">
          <div className="width-50 ">
            <img className="img" src={image} />
          </div>
          <form className="width-50">
            <div className="input-div">
              <label className="label">
                <i class="fa fa-envelope"></i>
              </label>
              <input
                type="email"
                className="input"
                name="email"
                value={data.email}
                onChange={handleChange}
                required
                placeholder="Email Address"
              />
            </div>
            <div className="input-div">
              <label className="label">
                <i class="fa fa-lock"></i>
              </label>
              <input
                type="password"
                className="input"
                name="password"
                value={data.password}
                onChange={handleChange}
                required
                placeholder="Password"
              />
            </div>
            <div className="button">
              <button className="btn btn-primary" onClick={submit}>
                Login
              </button>
            </div>{" "}
            <div className="button">
              <Link to="/register"> Don't Have an account? Register</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
