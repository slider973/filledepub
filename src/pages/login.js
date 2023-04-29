import Link from "next/link";
import React, { useState } from "react";
import Layout from "../layout/Layout";

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };
  return (
    <Layout>
      <div className="login-area pt-120 mb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="form-wrapper">
                <div className="form-title">
                  <h3>Log In Here!</h3>
                  <span />
                </div>
                <form>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-inner mb-25">
                        <label htmlFor="email">Email*</label>
                        <div className="input-area">
                          <img src="assets/images/icon/email-2.svg" alt="" />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="info@example.com"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-inner">
                        <label htmlFor="email">Password*</label>
                        <input
                          type={!passwordVisible ? "password" : "text"}
                          name="password"
                          id="password"
                          placeholder="Password"
                        />
                        <i
                          onClick={() => togglePasswordVisibility()}
                          className={
                            !passwordVisible
                              ? "bi bi-eye-slash"
                              : "bi bi-eye-slash  bi-eye"
                          }
                          id="togglePassword"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-agreement form-inner d-flex justify-content-between flex-wrap">
                        <div className="form-group">
                          <input type="checkbox" id="html" />
                          <label htmlFor="html">Remember Me</label>
                        </div>
                        <a href="#" className="forgot-pass">
                          Forget Password?
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-inner">
                        <button className="primry-btn-2" type="submit">
                          LogIn
                        </button>
                      </div>
                    </div>
                    <h6>
                      Don’t have an account?
                      <Link legacyBehavior href="/register">
                        <a>Sign Up</a>
                      </Link>
                    </h6>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
