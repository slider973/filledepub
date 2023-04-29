import Link from "next/link";
import React from "react";

function Breadcrumb({ pageTitle, pageName }) {
  return (
    <div className="inner-banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="banner-content text-center">
              <h1>{pageTitle}</h1>
              <span />
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link legacyBehavior href="/">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {pageName}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumb;
