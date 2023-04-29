import Link from "next/link";
import React from "react";

function Home2Feature() {
  return (
    <>
      <div className="home2-featured-area mb-120">
        <div className="container">
          <div className="row mb-60">
            <div className="col-12 d-flex flex-wrap align-items-end justify-content-md-between justify-content-start gap-3">
              <div className="section-title1">
                <h2>
                  Our <span>Featured</span> Jobs
                </h2>
                <p>
                  To choose your trending job dream &amp; to make future bright.
                </p>
              </div>
            </div>
          </div>
          <div className="row gy-5">
            <div className="col-lg-6">
              <div className="feature-card2">
                <div className="company-area">
                  <span />
                  <div className="logo">
                    <img
                      src="assets/images/bg/company-logo/company-02.png"
                      alt=""
                    />
                  </div>
                  <div className="company-details">
                    <div className="name-location">
                      <h5>
                        <Link legacyBehavior href="/job-details">
                          <a>UI/UX Engineer</a>
                        </Link>
                      </h5>
                      <ul>
                        <li>
                          <Link legacyBehavior href="/company-details">
                            <a>Norland Company</a>
                          </Link>
                        </li>
                        <li className="verified">
                          <img src="assets/images/icon/verified.svg" alt="" />
                          Verified Company
                        </li>
                      </ul>
                    </div>
                    <div className="bookmark">
                      <i className="bi bi-bookmark-fill" />
                    </div>
                  </div>
                </div>
                <div className="job-discription">
                  <ul className="one">
                    <li>
                      <p>
                        <span className="title">Location:</span> Chicago,
                        Australia
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="title">Salary:</span> $90-$140 /{" "}
                        <span className="time">Per Hour</span>
                      </p>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <p>
                        <span className="title">Experience:</span> 2-3 Years
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="title">Deadline:</span>
                        <span className="time"> 3 February, 2023</span>
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="job-type-apply">
                  <div className="apply-btn">
                    <Link legacyBehavior href="/job-details">
                      <a>
                        <span>
                          <img
                            src="assets/images/icon/apply-ellipse.svg"
                            alt=""
                          />
                        </span>
                        Apply Now
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="feature-card2">
                <div className="company-area">
                  <span />
                  <div className="logo">
                    <img
                      src="assets/images/bg/company-logo/company-03.png"
                      alt=""
                    />
                  </div>
                  <div className="company-details">
                    <div className="name-location">
                      <h5>
                        <Link legacyBehavior href="/job-details">
                          <a>React JS Developer</a>
                        </Link>
                      </h5>
                      <ul>
                        <li>
                          <Link legacyBehavior href="/company-details">
                            <a>UX.UI Company</a>
                          </Link>
                        </li>
                        <li className="verified">
                          <img src="assets/images/icon/verified.svg" alt="" />
                          Verified Company
                        </li>
                      </ul>
                    </div>
                    <div className="bookmark">
                      <i className="bi bi-bookmark-fill" />
                    </div>
                  </div>
                </div>
                <div className="job-discription">
                  <ul className="one">
                    <li>
                      <p>
                        <span className="title">Location:</span> Dhaka,
                        Bangladesh
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="title">Salary:</span> $80K-$110K /{" "}
                        <span className="time">Per Month</span>
                      </p>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <p>
                        <span className="title">Experience:</span> 2-3 Years
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="title">Deadline:</span>
                        <span className="time"> 3 February, 2023</span>
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="job-type-apply">
                  <div className="apply-btn">
                    <Link legacyBehavior href="/job-details">
                      <a>
                        <span>
                          <img
                            src="assets/images/icon/apply-ellipse.svg"
                            alt=""
                          />
                        </span>
                        Apply Now
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="feature-card2">
                <div className="company-area">
                  <span />
                  <div className="logo">
                    <img
                      src="assets/images/bg/company-logo/company-04.png"
                      alt=""
                    />
                  </div>
                  <div className="company-details">
                    <div className="name-location">
                      <h5>
                        <Link legacyBehavior href="/job-details">
                          <a>Receptionist</a>
                        </Link>
                      </h5>
                      <ul>
                        <li>
                          <Link legacyBehavior href="/company-details">
                            <a>Germaine Group Ltd</a>
                          </Link>
                        </li>
                        <li className="verified">
                          <img src="assets/images/icon/verified.svg" alt="" />
                          Verified Company
                        </li>
                      </ul>
                    </div>
                    <div className="bookmark">
                      <i className="bi bi-bookmark-fill" />
                    </div>
                  </div>
                </div>
                <div className="job-discription">
                  <ul className="one">
                    <li>
                      <p>
                        <span className="title">Location:</span> West London, Uk
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="title">Salary:</span> $50K-$60K /{" "}
                        <span className="time">Per Hour</span>
                      </p>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <p>
                        <span className="title">Experience:</span> 2-2.5 Years
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="title">Deadline:</span>
                        <span className="time"> 4 February, 2023</span>
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="job-type-apply">
                  <div className="apply-btn">
                    <Link legacyBehavior href="/job-details">
                      <a>
                        <span>
                          <img
                            src="assets/images/icon/apply-ellipse.svg"
                            alt=""
                          />
                        </span>
                        Apply Now
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="feature-card2">
                <div className="company-area">
                  <span />
                  <div className="logo">
                    <img
                      src="assets/images/bg/company-logo/company-06.png"
                      alt=""
                    />
                  </div>
                  <div className="company-details">
                    <div className="name-location">
                      <h5>
                        <Link legacyBehavior href="/job-details">
                          <a>Marko-land Company</a>
                        </Link>
                      </h5>
                      <ul>
                        <li>
                          <Link legacyBehavior href="/company-details">
                            <a>Marko-land Company</a>
                          </Link>
                        </li>
                        <li className="verified">
                          <img src="assets/images/icon/verified.svg" alt="" />{" "}
                          Verified Company
                        </li>
                      </ul>
                    </div>
                    <div className="bookmark">
                      <i className="bi bi-bookmark-fill" />
                    </div>
                  </div>
                </div>
                <div className="job-discription">
                  <ul className="one">
                    <li>
                      <p>
                        <span className="title">Location:</span> Chicago,
                        Australia
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="title">Salary:</span> $90-$140 /
                        <span className="time">Per Hour</span>
                      </p>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <p>
                        <span className="title">Experience:</span> 2-3 Years
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="title">Deadline:</span>
                        <span className="time"> 3 February, 2023</span>
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="job-type-apply">
                  <div className="apply-btn">
                    <Link legacyBehavior href="/job-details">
                      <a>
                        <span>
                          <img
                            src="assets/images/icon/apply-ellipse.svg"
                            alt=""
                          />
                        </span>
                        Apply Now
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home2-talent-area mb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="talent-wrap">
                <div className="talent-content">
                  <h4>
                    Are You Looking For A <span>Dream Job?</span>
                  </h4>
                  <p>2400+ candidates are available for your company.</p>
                </div>
                <div className="talent-img">
                  <img
                    className="img-fluid"
                    src="assets/images/bg/home-talent-img.png"
                    alt=""
                  />
                </div>
                <div className="find-btn">
                  <Link legacyBehavior href="/job-listing1">
                    <a className="primry-btn-2 lg-btn">Find Now</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home2Feature;
