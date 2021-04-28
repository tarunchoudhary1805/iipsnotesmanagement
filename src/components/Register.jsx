import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import image from "../images/signup-image.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    userType: "usertype",
    password: "",
    cpassword: "",
  });
  const [token, setToken] = useState(localStorage.getItem("token"));

  const submit = async (e) => {
    e.preventDefault();
    let response = await fetch("http://localhost:8081/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
    console.log(response);
    if (response?.token) {
      localStorage.setItem("token", response.token);
      setToken(response.token);
      toast(response.message, "hello");
    }
    toast(response?.error);
    console.log(data);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  if (token) {
    return <Redirect to="/about" />;
  }
  return (
    <>
      <ToastContainer />
      <div className="containr border bg-secodary ">
        <div className="d-flex justify-content-center pt-5">
          <h3 className="head">Register</h3>
        </div>
        <div className="register-page">
          <form className="width-50">
            <div className="input-div">
              <label className="label">
                <i class="far fa-user"></i>
              </label>
              <input
                type="text"
                className="input"
                required
                name="name"
                value={data.name}
                onChange={handleChange}
                placeholder="Full Name"
              />
            </div>
            <div className="input-div">
              <label className="label">
                <i class="fa fa-envelope"></i>
              </label>
              <input
                type="email"
                className="input"
                required
                name="email"
                value={data.email}
                onChange={handleChange}
                placeholder="Email Address"
              />
            </div>
            <div className="input-div">
              <label className="label">
                <i class="far fa-user"></i>
              </label>
              <input
                type="text"
                className="input"
                required
                name="phone"
                onChange={handleChange}
                value={data.phone}
                placeholder="Contact Number"
              />
            </div>
            <div className="input-div">
              <label className="label">
                <i class="fa fa-lock"></i>
              </label>
              <input
                type="password"
                className="input"
                required
                name="password"
                value={data.password}
                onChange={handleChange}
                placeholder="Password"
              />
            </div>
            <div className="input-div">
              <label className="label">
                <i class="fa fa-lock"></i>
              </label>
              <input
                type="password"
                className="input"
                name="cpassword"
                required
                value={data.cpassword}
                onChange={handleChange}
                placeholder="Confirm Password"
              />
            </div>
            <div className="input-div">
              <label className="label">
                <i class="far fa-user"></i>
              </label>
              <select
                className="input"
                name="userType"
                onChange={handleChange}
                value={data.userType}
              >
                <option className="option">Student</option>
                <option className="option">Teacher</option>
              </select>
            </div>
            <div className="button">
              <button
                type="button"
                onClick={submit}
                className="btn btn-primary"
              >
                Register
              </button>
            </div>{" "}
            <div className="button">
              <Link to="/login"> Already Have an account? Login </Link>
            </div>
          </form>
          <div className="width-50">
            <img className="img" src={image} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
