import Link from "next/link";
import React from "react";

function Home2WorkProcess() {
  return (
    <div className="home2-working-process mb-120">
      <div className="container">
        <div className="row mb-60">
          <div className="col-12 d-flex justify-content-center">
            <div className="section-title1 text-center">
              <h2>
                JOBES Working <span>Process</span>
              </h2>
              <p>
                To choose your trending job dream &amp; to make future bright.
              </p>
            </div>
          </div>
        </div>
        <div className="row gy-5 justify-content-center">
          <div className="col-lg-3 col-sm-6">
            <div className="working-process-card2">
              <div className="working-process-sl">
                <h4>01</h4>
                <span />
              </div>
              <div className="working-process-content">
                <h5>
                  <Link legacyBehavior href="/register">
                    <a>Account Create</a>
                  </Link>
                </h5>
                <p>To create your account be confident &amp; safely.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="working-process-card2">
              <div className="working-process-sl">
                <h4>02</h4>
                <span />
              </div>
              <div className="working-process-content">
                <h5>
                  <Link legacyBehavior href="/edit-profile">
                    <a>Create Resume</a>
                  </Link>
                </h5>
                <p>To create your account be confident &amp; safely.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="working-process-card2">
              <div className="working-process-sl">
                <h4>03</h4>
                <span />
              </div>
              <div className="working-process-content">
                <h5>
                  <Link legacyBehavior href="/job-listing1">
                    <a>Find Jobs</a>
                  </Link>
                </h5>
                <p>To create your account be confident &amp; safely.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="working-process-card2">
              <div className="working-process-sl last">
                <h4>04</h4>
                <span />
              </div>
              <div className="working-process-content">
                <h5>
                  <Link legacyBehavior href="/job-listing1">
                    <a>Apply Jobs</a>
                  </Link>
                </h5>
                <p>To create your account be confident &amp; safely.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home2WorkProcess;
