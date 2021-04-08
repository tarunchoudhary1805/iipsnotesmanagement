import React from "react";
import { Link } from "react-router-dom";
import img from "../../images/signup-image.jpg";

const Signup = () => {
  return (
    <>
      <section class="signup">
        <div class="container">
          <div class="signup-content">
            <div class="signup-form">
              <h2 class="form-title">Sign up</h2>
              <form method="POST" class="register-form" id="register-form">
                <div class="form-group">
                  <label for="name">
                    <i class="fas fa-user"></i>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                  />
                </div>
                <div class="form-group">
                  <label for="email">
                    <i class="fas fa-envelope"></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                  />
                </div>
                <div class="form-group">
                  <label for="pass">
                    <i class="fas fa-lock"></i>
                  </label>
                  <input
                    type="password"
                    name="pass"
                    id="pass"
                    placeholder="Password"
                  />
                </div>

                <div className="form-group">
                  <select name="cars" id="cars">
                    <option value="volvo">Student</option>
                    <option value="saab">Teacher</option>
                  </select>
                  <label>
                    <i class="fas fa-caret-down"></i>
                  </label>
                </div>
                {/* <div class="form-group">
                  <input
                    type="checkbox"
                    name="agree-term"
                    id="agree-term"
                    // class="agree-term"
                  />
                  <label for="agree-term" class="label-agree-term">
                    <span>
                      <span></span>
                    </span>
                    I agree all statements in{" "}
                    <a href="#" class="term-service">
                      Terms of service
                    </a>
                  </label>
                </div> */}
                <div class="form-group form-button">
                  <input
                    type="submit"
                    name="signup"
                    id="signup"
                    class="form-submit"
                    value="Register"
                  />
                </div>
              </form>
            </div>
            <div class="signup-image">
              <figure>
                <img src={img} alt="sing up image" />
              </figure>
              <Link to="/signin" class="signup-image-link">
                I am already member
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
