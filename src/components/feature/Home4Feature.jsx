import Link from "next/link";
import React from "react";

function Home4Feature() {
  return (
    <div className="home4-feature-area mb-120">
      <div className="container">
        <div className="row mb-60">
          <div className="col-12 d-flex flex-wrap align-items-end justify-content-md-between justify-content-start gap-3">
            <div className="section-title1">
              <h2>
                <span>Featured</span> Job List
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
                    <img src="assets/images/icon/explore-elliose.svg" alt="" />
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-lg-12 mb-30">
            <div className="job-listing-card">
              <div className="job-top">
                <div className="job-list-content">
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
                            <a>Senior Receptionist</a>
                          </Link>
                        </h5>
                        <p>
                          <Link legacyBehavior href="/company-details">
                            <a>Medico.co Ltd</a>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="job-discription">
                    <ul>
                      <li>
                        <p>
                          <span className="title">Location:</span> Dhaka,
                          Bangladesh
                        </p>
                      </li>
                      <li>
                        <p>
                          <span className="title">Salary:</span> $20K-$50K /{" "}
                          <span className="time">Per Month</span>
                        </p>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <p>
                          <span className="title">Experience:</span> 1.5-2 Years
                        </p>
                      </li>
                      <li>
                        <p>
                          <span className="title">Published:</span> 05 April,
                          2023
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bookmark">
                  <i className="bi bi-bookmark-fill" />
                </div>
              </div>
              <div className="job-type-apply">
              <p><img src="assets/images/icon/company-4.svg" alt=""/> Job Applied: <span> 07 Person</span></p>
                <div className="job-type">
                  <span className="light-green">Full Time</span>
                  <span className="light-blue">Part Time</span>
                  <span className="light-green">Remote</span>
                </div>
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
          <div className="col-lg-12 mb-30">
            <div className="job-listing-card">
              <div className="job-top">
                <div className="job-list-content">
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
                            <a>Senior PHP Developer</a>
                          </Link>
                        </h5>
                        <p>
                          <Link legacyBehavior href="/company-details">
                            <a>Marko Land Conpany</a>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="job-discription">
                    <ul>
                      <li>
                        <p>
                          <span className="title">Location:</span> Chicago,
                          Australia
                        </p>
                      </li>
                      <li>
                        <p>
                          <span className="title">Salary:</span> $50K-$70K /{" "}
                          <span className="time">Per Month</span>
                        </p>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <p>
                          <span className="title">Experience:</span> 3-4 Years
                        </p>
                      </li>
                      <li>
                        <p>
                          <span className="title">Published:</span> 08 April,
                          2023
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bookmark">
                  <i className="bi bi-bookmark-fill" />
                </div>
              </div>
              <div className="job-type-apply">
              <p><img src="assets/images/icon/company-4.svg" alt=""/> Job Applied: <span> 05 Person</span></p>
                <div className="job-type">
                  <span className="light-green">Full Time</span>
                  <span className="light-blue">Part Time</span>
                </div>
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
          <div className="col-lg-12 mb-30">
            <div className="job-listing-card">
              <div className="job-top">
                <div className="job-list-content">
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
                            <a>Junior React Developer</a>
                          </Link>
                        </h5>
                        <p>
                          <Link legacyBehavior href="/company-details">
                            <a>UI.UX Company</a>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="job-discription">
                    <ul>
                      <li>
                        <p>
                          <span className="title">Location:</span> Dhaka,
                          Bangladesh
                        </p>
                      </li>
                      <li>
                        <p>
                          <span className="title">Salary:</span> $20K-$50K /{" "}
                          <span className="time">Per Month</span>
                        </p>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <p>
                          <span className="title">Experience:</span> 1.5-2 Years
                        </p>
                      </li>
                      <li>
                        <p>
                          <span className="title">Published:</span> 08 April,
                          2023
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bookmark">
                  <i className="bi bi-bookmark-fill" />
                </div>
              </div>
              <div className="job-type-apply">
              <p><img src="assets/images/icon/company-4.svg" alt=""/> Job Applied: <span> 02 Person</span></p>
                <div className="job-type">
                  <span className="light-blue">Part Time</span>
                </div>
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
          <div className="col-lg-12">
            <div className="job-listing-card">
              <div className="job-top">
                <div className="job-list-content">
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
                            <a>Senior React Developer</a>
                          </Link>
                        </h5>
                        <p>
                          <Link legacyBehavior href="/company-details">
                            <a>UI.UX Company</a>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="job-discription">
                    <ul>
                      <li>
                        <p>
                          <span className="title">Location:</span> Dhaka,
                          Bangladesh
                        </p>
                      </li>
                      <li>
                        <p>
                          <span className="title">Salary:</span> $20K-$50K /{" "}
                          <span className="time">Per Month</span>
                        </p>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <p>
                          <span className="title">Experience:</span> 2.5-5 Years
                        </p>
                      </li>
                      <li>
                        <p>
                          <span className="title">Published:</span> 08 April,
                          2023
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bookmark">
                  <i className="bi bi-bookmark-fill" />
                </div>
              </div>
              <div className="job-type-apply">
              <p><img src="assets/images/icon/company-4.svg" alt=""/> Job Applied: <span> 08 Person</span></p>
                <div className="job-type">
                  <span className="light-green">Full Time</span>
                  <span className="light-blue">Part Time</span>
                  <span className="light-green">Remote</span>
                </div>
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
  );
}

export default Home4Feature;
