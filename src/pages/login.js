'use client'
import React, { useState } from "react";
import Layout from "../layout/Layout";
import FormLogin from "../Forms/FormLogin/FormLogin";

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
                  <h3>Connectez-vous ici !</h3>
                  <span/>
                </div>
                <FormLogin passwordVisible={passwordVisible} onClick={() => togglePasswordVisibility()}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
