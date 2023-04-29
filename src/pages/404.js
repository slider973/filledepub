import Link from "next/link";
import React from "react";
import Layout from "../layout/Layout";

function CustomError() {
  return (
    <Layout>
      <div className="error-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="error-wrapper">
                <div className="error-img">
                  <img
                    className="img-fluid"
                    src="assets/images/bg/404.svg"
                    alt=""
                  />
                </div>
                <div className="error-content-area text-center">
                  <h2>Opps... Page Not Found</h2>
                  <p>
                    Something went wrong, web page that is displayed to the user
                    when the server cannot find the requested page.
                  </p>
                  <div className="error-btn">
                    <Link legacyBehavior href="/">
                      <a className="primry-btn-2 lg-btn ">Back Homepage</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CustomError;
