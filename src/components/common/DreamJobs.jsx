import Link from "next/link";
import React from "react";

function DreamJobs() {
  return (
    <div className="home5-dream-job-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex flex-wrap align-items-end justify-content-md-between justify-content-start gap-3">
            <div className="dream-job-content">
              <h3>Are You Looking For A Dream Job?</h3>
              <p>2400+ candidates are available for your company.</p>
            </div>
            <div className="find-btn">
              <Link legacyBehavior href="/job-listing1">
                <a className="primry-btn-3 lg-btn">Find Now</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DreamJobs;
