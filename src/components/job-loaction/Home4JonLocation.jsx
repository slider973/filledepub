import Link from "next/link";
import React from "react";

function Home4JonLocation() {
  return (
    <div className="home4-joblocation-area mb-120">
      <div className="container">
        <div className="row mb-60">
          <div className="col-12 d-flex flex-wrap align-items-end justify-content-md-between justify-content-start gap-3">
            <div className="section-title1">
              <h2>
                Job By Your <span>Location</span>
              </h2>
              <p>
                To choose your trending job dream &amp; to make future bright.
              </p>
            </div>
            <div className="explore-btn">
              <Link legacyBehavior href="/job-listing1">
                <a>
                  View All Location
                  <span>
                    <img src="assets/images/icon/explore-elliose.svg" alt="" />
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="row grid g-4">
          <div className="col-lg-4 col-md-6">
            <div className="location-wrap">
              <img
                className="img-fluid"
                src="assets/images/bg/location-01.png"
                alt=""
              />
              <div className="location-content-wrap">
                <div className="batch">
                  <span>Popular</span>
                </div>
                <div className="location-content">
                  <h4>
                    <Link legacyBehavior href="/job-listing1">
                      <a>Loss Angles City, Canada</a>
                    </Link>
                  </h4>
                  <p>
                    Job Available: <span>33</span>
                  </p>j
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="location-wrap">
              <img
                className="img-fluid"
                src="assets/images/bg/location-02.png"
                alt=""
              />
              <div className="location-content-wrap">
                <div className="location-content">
                  <h4>
                    <Link legacyBehavior href="/job-listing1">
                      <a>Dhaka City, Bangladesh</a>
                    </Link>
                  </h4>
                  <p>
                    Job Available: <span>38</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="location-wrap">
              <img
                className="img-fluid"
                src="assets/images/bg/location-03.png"
                alt=""
              />
              <div className="location-content-wrap">
                <div className="batch">
                  <span>Popular</span>
                </div>
                <div className="location-content">
                  <h4>
                    <Link legacyBehavior href="/job-listing1">
                      <a>Melbourne City, Austrila</a>
                    </Link>
                  </h4>
                  <p>
                    Job Available: <span>66</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="location-wrap">
              <img
                className="img-fluid"
                src="assets/images/bg/location-04.png"
                alt=""
              />
              <div className="location-content-wrap">
                <div className="location-content">
                  <h4>
                    <Link legacyBehavior href="/job-listing1">
                      <a>New York City, USA</a>
                    </Link>
                  </h4>
                  <p>
                    Job Available: <span>55</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="location-wrap">
              <img
                className="img-fluid"
                src="assets/images/bg/location-05.png"
                alt=""
              />
              <div className="location-content-wrap">
                <div className="location-content">
                  <h4>
                    <Link legacyBehavior href="/job-listing1">
                      <a>California City, UK</a>
                    </Link>
                  </h4>
                  <p>
                    Job Available: <span>76</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="location-wrap">
              <img
                className="img-fluid"
                src="assets/images/bg/location-06.png"
                alt=""
              />
              <div className="location-content-wrap">
                <div className="batch">
                  <span>Popular</span>
                </div>
                <div className="location-content">
                  <h4>
                    <Link legacyBehavior href="/job-listing1">
                      <a>Moscow City, Russia</a>
                    </Link>
                  </h4>
                  <p>
                    Job Available: <span>32</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home4JonLocation;
