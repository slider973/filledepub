import Link from "next/link";
import React from "react";

function Feature1() {
  return (
    <>
      <div className="home1-featured-area mb-120">
        <div className="container">
          <div className="row mb-60">
            <div className="col-12 d-flex flex-wrap align-items-end justify-content-md-between justify-content-start gap-3">
              <div className="section-title1">
                <h2>
                  Latest <span>Featured</span> Jobs
                </h2>
                <p>
                  To choose your trending job dream &amp; to make future bright.
                </p>
              </div>
              <div className="explore-btn">
                <Link legacyBehavior href="/job-listing1">
                  <a>
                    Explore More
                    <span>
                      <img
                        src="assets/images/icon/explore-elliose.svg"
                        alt=""
                      />
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-xl-4 col-lg-6">
              <div className="feature-card">
                <div className="company-area">
                  <div className="logo">
                    <img
                      src="assets/images/bg/company-logo/company-01.png"
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
                      <p>Full Time, Part Time</p>
                    </div>
                    <div className="bookmark">
                      <i className="bi bi-bookmark" />
                    </div>
                  </div>
                </div>
                <div className="job-discription">
                  <ul>
                    <li>
                      <img src="assets/images/icon/arrow2.svg" alt="" />
                      <p>
                        <span className="title">Salary:</span> $80-$110 /
                        <span className="time">Per month</span>
                      </p>
                    </li>
                    <li>
                      <img src="assets/images/icon/arrow2.svg" alt="" />
                      <p>
                        <span className="title">Vacancy:</span>
                        <span> 07 Person (Both)</span>
                      </p>
                    </li>
                    <li>
                      <img src="assets/images/icon/arrow2.svg" alt="" />
                      <p>
                        <span className="title">Deadline:</span>
                        <span> 02 March, 2023</span>
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
            <div className="col-xl-4 col-lg-6">
              <div className="feature-card">
                <div className="company-area">
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
                          <a>Assistant Laboratorist</a>
                        </Link>
                      </h5>
                      <p>Full Time, Part Time</p>
                    </div>
                    <div className="bookmark">
                      <i className="bi bi-bookmark" />
                    </div>
                  </div>
                </div>
                <div className="job-discription">
                  <ul>
                    <li>
                      <img src="assets/images/icon/arrow2.svg" alt="" />
                      <p>
                        <span className="title">Salary:</span> $30-$40 /
                        <span className="time">Per month</span>
                      </p>
                    </li>
                    <li>
                      <img src="assets/images/icon/arrow2.svg" alt="" />
                      <p>
                        <span className="title">Vacancy:</span>
                        <span> 05 Person (Both)</span>
                      </p>
                    </li>
                    <li>
                      <img src="assets/images/icon/arrow2.svg" alt="" />
                      <p>
                        <span className="title">Deadline:</span>
                        <span> 02 March, 2023 </span>
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
            <div className="col-xl-4 col-lg-6">
              <div className="feature-card">
                <div className="company-area">
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
                          <a>Senior Receptionist</a>
                        </Link>
                      </h5>
                      <p>Full Time, Part Time</p>
                    </div>
                    <div className="bookmark">
                      <i className="bi bi-bookmark" />
                    </div>
                  </div>
                </div>
                <div className="job-discription">
                  <ul>
                    <li>
                      <img src="assets/images/icon/arrow2.svg" alt="" />
                      <p>
                        <span className="title">Salary:</span> $60-$90 /
                        <span className="time">Per month</span>
                      </p>
                    </li>
                    <li>
                      <img src="assets/images/icon/arrow2.svg" alt="" />
                      <p>
                        <span className="title">Vacancy:</span>
                        <span> 07 Person (Female)</span>
                      </p>
                    </li>
                    <li>
                      <img src="assets/images/icon/arrow2.svg" alt="" />
                      <p>
                        <span className="title">Deadline:</span>
                        <span> 03 March, 2023 </span>
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
            <div className="col-xl-4 col-lg-6">
              <div className="feature-card">
                <div className="company-area">
                  <div className="logo">
                    <img
                      src="assets/images/bg/company-logo/company-05.png"
                      alt=""
                    />
                  </div>
                  <div className="company-details">
                    <div className="name-location">
                      <h5>
                        <Link legacyBehavior href="/job-details">
                          <a>Senior WordPress Develope</a>
                        </Link>
                      </h5>
                      <p>Part Time, Remote</p>
                    </div>
                    <div className="bookmark">
                      <i className="bi bi-bookmark" />
                    </div>
                  </div>
                </div>
                <div className="job-discription">
                  <ul>
                    <li>
                      <img src="assets/images/icon/arrow2.svg" alt="" />
                      <p>
                        <span className="title">Salary:</span> $60-$80 /
                        <span className="time">Per month</span>
                      </p>
                    </li>
                    <li>
                      <img src="assets/images/icon/arrow2.svg" alt="" />
                      <p>
                        <span className="title">Vacancy:</span>
                        <span> 03 Person (Male)</span>
                      </p>
                    </li>
                    <li>
                      <img src="assets/images/icon/arrow2.svg" alt="" />
                      <p>
                        <span className="title">Deadline:</span>
                        <span> 04 March, 2023 </span>
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
            <div className="col-xl-4 col-lg-6">
              <div className="feature-card">
                <div className="company-area">
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
                          <a>Manager (HR)</a>
                        </Link>
                      </h5>
                      <p>Full Time, Part Time</p>
                    </div>
                    <div className="bookmark">
                      <i className="bi bi-bookmark" />
                    </div>
                  </div>
                </div>
                <div className="job-discription">
                  <ul>
                    <li>
                      <img src="assets/images/icon/arrow2.svg" alt="" />
                      <p>
                        <span className="title">Salary:</span> $60-$76 /
                        <span className="time">Per month</span>
                      </p>
                    </li>
                    <li>
                      <img src="assets/images/icon/arrow2.svg" alt="" />
                      <p>
                        <span className="title">Vacancy:</span>
                        <span> 01 Person (Both)</span>
                      </p>
                    </li>
                    <li>
                      <img src="assets/images/icon/arrow2.svg" alt="" />
                      <p>
                        <span className="title">Deadline:</span>
                        <span> 05 March, 2023</span>
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
            <div className="col-xl-4 col-lg-6">
              <div className="feature-card">
                <div className="company-area">
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
                          <a>UI/UX Designer</a>
                        </Link>
                      </h5>
                      <p>Full Time, Part Time</p>
                    </div>
                    <div className="bookmark">
                      <i className="bi bi-bookmark" />
                    </div>
                  </div>
                </div>
                <div className="job-discription">
                  <ul>
                    <li>
                      <img src="assets/images/icon/arrow2.svg" alt="" />
                      <p>
                        <span className="title">Salary:</span> $60-$70 /
                        <span className="time">Per month</span>
                      </p>
                    </li>
                    <li>
                      <img src="assets/images/icon/arrow2.svg" alt="" />
                      <p>
                        <span className="title">Vacancy:</span>
                        <span> 03 Person (Both)</span>
                      </p>
                    </li>
                    <li>
                      <img src="assets/images/icon/arrow2.svg" alt="" />
                      <p>
                        <span className="title">Deadline:</span>
                        <span> 02 March, 2023</span>
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
    </>
  );
}

export default Feature1;
