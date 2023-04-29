import Link from "next/link";
import React from "react";

function Home3Feature() {
  return (
    <div className="home3-featured-job-area mb-120">
      <div className="container">
        <div className="row mb-60">
          <div className="col-12 d-flex justify-content-center">
            <div className="section-title1 text-center">
              <h2>
                Latest <span>Featured</span> Jobs
              </h2>
              <p>To choose your trending job dream & to make future bright.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <div className="tab-btn-area">
              <ul className="nav nav-pills" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    Marketing & Sales
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    Development
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-contact-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-contact"
                    type="button"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                  >
                    Technology
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-technology-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-technology"
                    type="button"
                    role="tab"
                    aria-controls="pills-technology"
                    aria-selected="false"
                  >
                    Medical & Nurse
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div className="row g-4">
                  <div className="col-lg-4 col-md-6">
                    <div className="job-listing-card2">
                      <div className="job-thumb">
                        <img
                          className="img-fluid"
                          src="assets/images/bg/job-list-1.png"
                          alt=""
                        />
                        <div className="bookmark">
                          <i className="bi bi-bookmark"></i>
                        </div>
                      </div>
                      <div className="job-content">
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
                                  <a>WordPress Developer</a>
                                </Link>
                              </h5>
                              <ul>
                                <li>
                                  <p>
                                    <Link
                                      legacyBehavior
                                      href="/company-details"
                                    >
                                      <a>Bistro Tech Ltd</a>
                                    </Link>
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    <span className="title">Deadline:</span> 2
                                    April, 2023
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="job-discription">
                          <ul>
                            <li>
                              <p>
                                <span className="title">Salary:</span> $60-$90 /
                                <span className="time">Per Hour</span>
                              </p>
                            </li>
                            <li>
                              <p>
                                <span className="title">Experience:</span> 3-3.5
                                Years
                              </p>
                            </li>
                            <li>
                              <p>
                                <span className="title">Location:</span> Dhaka,
                                Bangladesh
                              </p>
                            </li>
                          </ul>
                        </div>
                        <div className="job-type-apply">
                          <div className="job-type">
                            <span className="light-green">Full Time</span>
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
                  <div className="col-lg-4 col-md-6">
                    <div className="job-listing-card2">
                      <div className="job-thumb">
                        <img
                          className="img-fluid"
                          src="assets/images/bg/job-list-2.png"
                          alt=""
                        />
                        <div className="bookmark">
                          <i className="bi bi-bookmark"></i>
                        </div>
                      </div>
                      <div className="job-content">
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
                                  Assistant Manager
                                </Link>
                              </h5>
                              <ul>
                                <li>
                                  <p>
                                    <Link
                                      legacyBehavior
                                      href="/company-details"
                                    >
                                      <a>Hangman Gold</a>
                                    </Link>
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    <span className="title">Deadline:</span> 3
                                    April, 2023
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="job-discription">
                          <ul>
                            <li>
                              <p>
                                <span className="title">Salary:</span> $20k-$50k
                                /<span className="time">Per Hour</span>
                              </p>
                            </li>
                            <li>
                              <p>
                                <span className="title">Experience:</span> 2-2.5
                                Years
                              </p>
                            </li>
                            <li>
                              <p>
                                <span className="title">Location:</span> Sylhet,
                                Bangladesh
                              </p>
                            </li>
                          </ul>
                        </div>
                        <div className="job-type-apply">
                          <div className="job-type">
                            <span className="light-green">Full Time</span>
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
                  <div className="col-lg-4 col-md-6">
                    <div className="job-listing-card2">
                      <div className="job-thumb">
                        <img
                          className="img-fluid"
                          src="assets/images/bg/job-list-3.png"
                          alt=""
                        />
                        <div className="bookmark">
                          <i className="bi bi-bookmark"></i>
                        </div>
                      </div>
                      <div className="job-content">
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
                                  UI/UX Designer
                                </Link>
                              </h5>
                              <ul>
                                <li>
                                  <p>
                                    <Link
                                      legacyBehavior
                                      href="/company-details"
                                    >
                                      <a>Tech-Bath IT Ltd</a>
                                    </Link>
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    <span className="title">Deadline:</span> 5
                                    April, 2023
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="job-discription">
                          <ul>
                            <li>
                              <p>
                                <span className="title">Salary:</span> $50K-$90K
                                /<span className="time">Per Month</span>
                              </p>
                            </li>
                            <li>
                              <p>
                                <span className="title">Experience:</span> 2-3
                                Years
                              </p>
                            </li>
                            <li>
                              <p>
                                <span className="title">Location:</span>{" "}
                                Chicago, Australia
                              </p>
                            </li>
                          </ul>
                        </div>
                        <div className="job-type-apply">
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
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="job-listing-card2">
                      <div className="job-thumb">
                        <img
                          className="img-fluid"
                          src="assets/images/bg/job-list-4.png"
                          alt=""
                        />
                        <div className="urgent-batch">
                          <span>Urgent</span>
                        </div>
                        <div className="bookmark">
                          <i className="bi bi-bookmark"></i>
                        </div>
                      </div>
                      <div className="job-content">
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
                                  <a>Junior Receptionist</a>
                                </Link>
                              </h5>
                              <ul>
                                <li>
                                  <p>
                                    <Link
                                      legacyBehavior
                                      href="/company-details"
                                    >
                                      <a>Gangster.Hide</a>
                                    </Link>
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    <span className="title">Deadline:</span> 6
                                    April, 2023
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="job-discription">
                          <ul>
                            <li>
                              <p>
                                <span className="title">Salary:</span> $60-$80 /
                                <span className="time">Per Hour</span>
                              </p>
                            </li>
                            <li>
                              <p>
                                <span className="title">Experience:</span> 1-1.5
                                Years
                              </p>
                            </li>
                            <li>
                              <p>
                                <span className="title">Location:</span> Dhaka,
                                Bangladesh
                              </p>
                            </li>
                          </ul>
                        </div>
                        <div className="job-type-apply">
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
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="job-listing-card2">
                      <div className="job-thumb">
                        <img
                          className="img-fluid"
                          src="assets/images/bg/job-list-5.png"
                          alt=""
                        />
                        <div className="bookmark">
                          <i className="bi bi-bookmark"></i>
                        </div>
                      </div>
                      <div className="job-content">
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
                                  <a>Senior Laboratoriest</a>
                                </Link>
                              </h5>
                              <ul>
                                <li>
                                  <p>
                                    <Link
                                      legacyBehavior
                                      href="/company-details"
                                    >
                                      <a>Laballo.Lab Ltd</a>
                                    </Link>
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    <span className="title">Deadline:</span> 9
                                    April, 2023
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="job-discription">
                          <ul>
                            <li>
                              <p>
                                <span className="title">Salary:</span> $40K-$60K
                                /<span className="time">Per Month</span>
                              </p>
                            </li>
                            <li>
                              <p>
                                <span className="title">Experience:</span> 3-4
                                Years
                              </p>
                            </li>
                            <li>
                              <p>
                                <span className="title">Location:</span>{" "}
                                New-York, USA
                              </p>
                            </li>
                          </ul>
                        </div>
                        <div className="job-type-apply">
                          <div className="job-type">
                            <span className="light-green">Full Time</span>
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
                  <div className="col-lg-4 col-md-6">
                    <div className="job-listing-card2">
                      <div className="job-thumb">
                        <img
                          className="img-fluid"
                          src="assets/images/bg/job-list-6.png"
                          alt=""
                        />
                        <div className="urgent-batch">
                          <span>Urgent</span>
                        </div>
                        <div className="bookmark">
                          <i className="bi bi-bookmark"></i>
                        </div>
                      </div>
                      <div className="job-content">
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
                                  <a>Medical Nurse</a>
                                </Link>
                              </h5>
                              <ul>
                                <li>
                                  <p>
                                    <Link
                                      legacyBehavior
                                      href="/company-details"
                                    >
                                      <a>Marko Company</a>
                                    </Link>
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    <span className="title">Deadline:</span> 9
                                    April, 2023
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="job-discription">
                          <ul>
                            <li>
                              <p>
                                <span className="title">Salary:</span> $60-$90 /
                                <span className="time">Per Hour</span>
                              </p>
                            </li>
                            <li>
                              <p>
                                <span className="title">Experience:</span> 3-3.5
                                Years
                              </p>
                            </li>
                            <li>
                              <p>
                                <span className="title">Location:</span> Dhaka,
                                Bangladesh
                              </p>
                            </li>
                          </ul>
                        </div>
                        <div className="job-type-apply">
                          <div className="job-type">
                            <span className="light-green">Part Time</span>
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
              <div
                className="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <div className="row g-4">
                  <div className="col-lg-4 col-md-6">
                    <div className="job-listing-card2">
                      <div className="job-thumb">
                        <img
                          className="img-fluid"
                          src="assets/images/bg/job-list-1.png"
                          alt=""
                        />
                        <div className="bookmark">
                          <i className="bi bi-bookmark"></i>
                        </div>
                      </div>
                      <div className="job-content">
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
                                  <a>WordPress Developer</a>
                                </Link>
                              </h5>
                              <ul>
                                <li>
                                  <p>
                                    <Link
                                      legacyBehavior
                                      href="/company-details"
                                    >
                                      <a>Bistro Tech Ltd</a>
                                    </Link>
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    <span className="title">Deadline:</span> 2
                                    April, 2023
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="job-discription">
                          <ul>
                            <li>
                              <p>
                                <span className="title">Salary:</span> $60-$90 /
                                <span className="time">Per Hour</span>
                              </p>
                            </li>
                            <li>
                              <p>
                                <span className="title">Experience:</span> 3-3.5
                                Years
                              </p>
                            </li>
                            <li>
                              <p>
                                <span className="title">Location:</span> Dhaka,
                                Bangladesh
                              </p>
                            </li>
                          </ul>
                        </div>
                        <div className="job-type-apply">
                          <div className="job-type">
                            <span className="light-green">Full Time</span>
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
                  <div className="col-lg-4 col-md-6">
                    <div className="job-listing-card2">
                      <div className="job-thumb">
                        <img
                          className="img-fluid"
                          src="assets/images/bg/job-list-2.png"
                          alt=""
                        />
                        <div className="bookmark">
                          <i className="bi bi-bookmark"></i>
                        </div>
                      </div>
                      <div className="job-content">
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
                                  <a>Assistant Manager</a>
                                </Link>
                              </h5>
                              <ul>
                                <li>
                                  <p>
                                    <Link
                                      legacyBehavior
                                      href="/company-details"
                                    >
                                      <a>Hangman Gold</a>
                                    </Link>
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    <span className="title">Deadline:</span> 3
                                    April, 2023
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="job-discription">
                          <ul>
                            <li>
                              <p>
                                <span className="title">Salary:</span> $20k-$50k
                                /<span className="time">Per Hour</span>
                              </p>
                            </li>
                            <li>
                              <p>
                                <span className="title">Experience:</span> 2-2.5
                                Years
                              </p>
                            </li>
                            <li>
                              <p>
                                <span className="title">Location:</span> Sylhet,
                                Bangladesh
                              </p>
                            </li>
                          </ul>
                        </div>
                        <div className="job-type-apply">
                          <div className="job-type">
                            <span className="light-green">Full Time</span>
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
                  <div className="col-lg-4 col-md-6">
                    <div className="job-listing-card2">
                      <div className="job-thumb">
                        <img
                          className="img-fluid"
                          src="assets/images/bg/job-list-3.png"
                          alt=""
                        />
                        <div className="bookmark">
                          <i className="bi bi-bookmark"></i>
                        </div>
                      </div>
                      <div className="job-content">
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
                                  <a>UI/UX Designer</a>
                                </Link>
                              </h5>
                              <ul>
                                <li>
                                  <p>
                                    <Link
                                      legacyBehavior
                                      href="/company-details"
                                    >
                                      <a>Tech-Bath IT Ltd</a>
                                    </Link>
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    <span className="title">Deadline:</span> 5
                                    April, 2023
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="job-discription">
                          <ul>
                            <li>
                              <p>
                                <span className="title">Salary:</span> $50K-$90K
                                /<span className="time">Per Month</span>
                              </p>
                            </li>
                            <li>
                              <p>
                                <span className="title">Experience:</span> 2-3
                                Years
                              </p>
                            </li>
                            <li>
                              <p>
                                <span className="title">Location:</span>{" "}
                                Chicago, Australia
                              </p>
                            </li>
                          </ul>
                        </div>
                        <div className="job-type-apply">
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
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="job-listing-card2">
                      <div className="job-thumb">
                        <img
                          className="img-fluid"
                          src="assets/images/bg/job-list-4.png"
                          alt=""
                        />
                        <div className="urgent-batch">
                          <span>Urgent</span>
                        </div>
                        <div className="bookmark">
                          <i className="bi bi-bookmark"></i>
                        </div>
                      </div>
                      <div className="job-content">
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
                                  <a>Junior Receptionist</a>
                                </Link>
                              </h5>
                              <ul>
                                <li>
                                  <p>
                                    <Link
                                      legacyBehavior
                                      href="/company-details"
                                    >
                                      <a>Gangster.Hide</a>
                                    </Link>
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    <span className="title">Deadline:</span> 6
                                    April, 2023
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="job-discription">
                          <ul>
                            <li>
                              <p>
                                <span className="title">Salary:</span> $60-$80 /
                                <span className="time">Per Hour</span>
                              </p>
                            </li>
                            <li>
                              <p>
                                <span className="title">Experience:</span> 1-1.5
                                Years
                              </p>
                            </li>
                            <li>
                              <p>
                                <span className="title">Location:</span> Dhaka,
                                Bangladesh
                              </p>
                            </li>
                          </ul>
                        </div>
                        <div className="job-type-apply">
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
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="job-listing-card2">
                      <div className="job-thumb">
                        <img
                          className="img-fluid"
                          src="assets/images/bg/job-list-5.png"
                          alt=""
                        />
                        <div className="bookmark">
                          <i className="bi bi-bookmark"></i>
                        </div>
                      </div>
                      <div className="job-content">
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
                                  <a>Senior Laboratoriest</a>
                                </Link>
                              </h5>
                              <ul>
                                <li>
                                  <p>
                                    <Link
                                      legacyBehavior
                                      href="/company-details"
                                    >
                                      <a>Laballo.Lab Ltd</a>
                                    </Link>
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    <span className="title">Deadline:</span> 9
                                    April, 2023
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="job-discription">
                          <ul>
                            <li>
                              <p>
                                <span className="title">Salary:</span> $40K-$60K
                                /<span className="time">Per Month</span>
                              </p>
                            </li>
                            <li>
                              <p>
                                <span className="title">Experience:</span> 3-4
                                Years
                              </p>
                            </li>
                            <li>
                              <p>
                                <span className="title">Location:</span>{" "}
                                New-York, USA
                              </p>
                            </li>
                          </ul>
                        </div>
                        <div className="job-type-apply">
                          <div className="job-type">
                            <span className="light-green">Full Time</span>
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
                  <div className="col-lg-4 col-md-6">
                    <div className="job-listing-card2">
                      <div className="job-thumb">
                        <img
                          className="img-fluid"
                          src="assets/images/bg/job-list-6.png"
                          alt=""
                        />
                        <div className="urgent-batch">
                          <span>Urgent</span>
                        </div>
                        <div className="bookmark">
                          <i className="bi bi-bookmark"></i>
                        </div>
                      </div>
                      <div className="job-content">
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
                                  <a>Medical Nurse</a>
                                </Link>
                              </h5>
                              <ul>
                                <li>
                                  <p>
                                    <Link
                                      legacyBehavior
                                      href="/company-details"
                                    >
                                      <a>Marko Company</a>
                                    </Link>
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    <span className="title">Deadline:</span> 9
                                    April, 2023
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="job-discription">
                          <ul>
                            <li>
                              <p>
                                <span className="title">Salary:</span> $60-$90 /
                                <span className="time">Per Hour</span>
                              </p>
                            </li>
                            <li>
                              <p>
                                <span className="title">Experience:</span> 3-3.5
                                Years
                              </p>
                            </li>
                            <li>
                              <p>
                                <span className="title">Location:</span> Dhaka,
                                Bangladesh
                              </p>
                            </li>
                          </ul>
                        </div>
                        <div className="job-type-apply">
                          <div className="job-type">
                            <span className="light-green">Part Time</span>
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
              <div
                className="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
              >
                <div className="row g-4">
                  <div className="col-lg-4 col-md-6">
                    <div className="job-listing-card2">
                      <div className="job-thumb">
                        <img
                          className="img-fluid"
                          src="assets/images/bg/job-list-1.png"
                          alt=""
                        />
                        <div className="bookmark">
                          <i className="bi bi-bookmark"></i>
                        </div>
                      </div>
                      <div className="job-content">
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
                                  <a>WordPress Developer</a>
                                </Link>
                              </h5>
                              <ul>
                                <li>
                                  <p>
                                    <Link
                                      legacyBehavior
                                      href="/company-details"
                                    >
                                      <a>Bistro Tech Ltd</a>
                                    </Link>
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    <span className="title">Deadline:</span> 2
                                    April, 2023
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="job-discription">
                          <ul>
                            <li>
                              <p>
                                <span className="title">Salary:</span> $60-$90 /
                                <span className="time">Per Hour</span>
                              </p>
                            </li>
                            <li>
                              <p>
                                <span className="title">Experience:</span> 3-3.5
                                Years
                              </p>
                            </li>
                            <li>
                              <p>
                                <span className="title">Location:</span> Dhaka,
                                Bangladesh
                              </p>
                            </li>
                          </ul>
                        </div>
                        <div className="job-type-apply">
                          <div className="job-type">
                            <span className="light-green">Full Time</span>
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
                  <div className="col-lg-4 col-md-6">
                    <div className="job-listing-card2">
                      <div className="job-thumb">
                        <img
                          className="img-fluid"
                          src="assets/images/bg/job-list-2.png"
                          alt=""
                        />
                        <div className="bookmark">
                          <i className="bi bi-bookmark"></i>
                        </div>
                      </div>
                      <div className="job-content">
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
                                  <a>Assistant Manager</a>
                                </Link>
                              </h5>
                              <ul>
                                <li>
                                  <p>
                                    <Link
                                      legacyBehavior
                                      href="/company-details"
                                    >
                                      <a>Hangman Gold</a>
                                    </Link>
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    <span className="title">Deadline:</span> 3
                                    April, 2023
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="job-discription">
                          <ul>
                            <li>
                              <p>
                                <span className="title">Salary:</span> $20k-$50k
                                /<span className="time">Per Hour</span>
                              </p>
                            </li>
                            <li>
                              <p>
                                <span className="title">Experience:</span> 2-2.5
                                Years
                              </p>
                            </li>
                            <li>
                              <p>
                                <span className="title">Location:</span> Sylhet,
                                Bangladesh
                              </p>
                            </li>
                          </ul>
                        </div>
                        <div className="job-type-apply">
                          <div className="job-type">
                            <span className="light-green">Full Time</span>
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
                  <div className="col-lg-4 col-md-6">
                    <div className="job-listing-card2">
                      <div className="job-thumb">
                        <img
                          className="img-fluid"
                          src="assets/images/bg/job-list-3.png"
                          alt=""
                        />
                        <div className="bookmark">
                          <i className="bi bi-bookmark"></i>
                        </div>
                      </div>
                      <div className="job-content">
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
                                  <a>UI/UX Designer</a>
                                </Link>
                              </h5>
                              <ul>
                                <li>
                                  <p>
                                    <Link
                                      legacyBehavior
                                      href="/company-details"
                                    >
                                      <a>Tech-Bath IT Ltd</a>
                                    </Link>
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    <span className="title">Deadline:</span> 5
                                    April, 2023
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="job-discription">
                          <ul>
                            <li>
                              <p>
                                <span className="title">Salary:</span> $50K-$90K
                                /<span className="time">Per Month</span>
                              </p>
                            </li>
                            <li>
                              <p>
                                <span className="title">Experience:</span> 2-3
                                Years
                              </p>
                            </li>
                            <li>
                              <p>
                                <span className="title">Location:</span>{" "}
                                Chicago, Australia
                              </p>
                            </li>
                          </ul>
                        </div>
                        <div className="job-type-apply">
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
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="job-listing-card2">
                      <div className="job-thumb">
                        <img
                          className="img-fluid"
                          src="assets/images/bg/job-list-4.png"
                          alt=""
                        />
                        <div className="urgent-batch">
                          <span>Urgent</span>
                        </div>
                        <div className="bookmark">
                          <i className="bi bi-bookmark"></i>
                        </div>
                      </div>
                      <div className="job-content">
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
                                  <a>Junior Receptionist</a>
                                </Link>
                              </h5>
                              <ul>
                                <li>
                                  <p>
                                    <Link
                                      legacyBehavior
                                      href="/company-details"
                                    >
                                      <a> Gangster.Hide</a>
                                    </Link>
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    <span className="title">Deadline:</span> 6
                                    April, 2023
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="job-discription">
                          <ul>
                            <li>
                              <p>
                                <span className="title">Salary:</span> $60-$80 /
                                <span className="time">Per Hour</span>
                              </p>
                            </li>
                            <li>
                              <p>
                                <span className="title">Experience:</span> 1-1.5
                                Years
                              </p>
                            </li>
                            <li>
                              <p>
                                <span className="title">Location:</span> Dhaka,
                                Bangladesh
                              </p>
                            </li>
                          </ul>
                        </div>
                        <div className="job-type-apply">
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
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="job-listing-card2">
                      <div className="job-thumb">
                        <img
                          className="img-fluid"
                          src="assets/images/bg/job-list-5.png"
                          alt=""
                        />
                        <div className="bookmark">
                          <i className="bi bi-bookmark"></i>
                        </div>
                      </div>
                      <div className="job-content">
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
                                  <a>Senior Laboratoriest</a>
                                </Link>
                              </h5>
                              <ul>
                                <li>
                                  <p>
                                    <Link
                                      legacyBehavior
                                      href="/company-details"
                                    >
                                      <a>Laballo.Lab Ltd</a>
                                    </Link>
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    <span className="title">Deadline:</span> 9
                                    April, 2023
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="job-discription">
                          <ul>
                            <li>
                              <p>
                                <span className="title">Salary:</span> $40K-$60K
                                /<span className="time">Per Month</span>
                              </p>
                            </li>
                            <li>
                              <p>
                                <span className="title">Experience:</span> 3-4
                                Years
                              </p>
                            </li>
                            <li>
                              <p>
                                <span className="title">Location:</span>{" "}
                                New-York, USA
                              </p>
                            </li>
                          </ul>
                        </div>
                        <div className="job-type-apply">
                          <div className="job-type">
                            <span className="light-green">Full Time</span>
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
                  <div className="col-lg-4 col-md-6">
                    <div className="job-listing-card2">
                      <div className="job-thumb">
                        <img
                          className="img-fluid"
                          src="assets/images/bg/job-list-6.png"
                          alt=""
                        />
                        <div className="urgent-batch">
                          <span>Urgent</span>
                        </div>
                        <div className="bookmark">
                          <i className="bi bi-bookmark"></i>
                        </div>
                      </div>
                      <div className="job-content">
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
                                  <a>Medical Nurse</a>
                                </Link>
                              </h5>
                              <ul>
                                <li>
                                  <p>
                                    <Link
                                      legacyBehavior
                                      href="/company-details"
                                    >
                                      <a>Marko Company</a>
                                    </Link>
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    <span className="title">Deadline:</span> 9
                                    April, 2023
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="job-discription">
                          <ul>
                            <li>
                              <p>
                                <span className="title">Salary:</span> $60-$90 /
                                <span className="time">Per Hour</span>
                              </p>
                            </li>
                            <li>
                              <p>
                                <span className="title">Experience:</span> 3-3.5
                                Years
                              </p>
                            </li>
                            <li>
                              <p>
                                <span className="title">Location:</span> Dhaka,
                                Bangladesh
                              </p>
                            </li>
                          </ul>
                        </div>
                        <div className="job-type-apply">
                          <div className="job-type">
                            <span className="light-green">Part Time</span>
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
              <div
                className="tab-pane fade"
                id="pills-technology"
                role="tabpanel"
                aria-labelledby="pills-technology-tab"
              >
                <div className="row g-4">
                  <div className="col-lg-4 col-md-6">
                    <div className="job-listing-card2">
                      <div className="job-thumb">
                        <img
                          className="img-fluid"
                          src="assets/images/bg/job-list-1.png"
                          alt=""
                        />
                        <div className="bookmark">
                          <i className="bi bi-bookmark"></i>
                        </div>
                      </div>
                      <div className="job-content">
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
                                  WordPress Developer
                                </Link>
                              </h5>
                              <ul>
                                <li>
                                  <p>
                                    <Link
                                      legacyBehavior
                                      href="/company-details"
                                    >
                                      <a>Bistro Tech Ltd</a>
                                    </Link>
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    <span className="title">Deadline:</span> 2
                                    April, 2023
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="job-discription">
                          <ul>
                            <li>
                              <p>
                                <span className="title">Salary:</span> $60-$90 /
                                <span className="time">Per Hour</span>
                              </p>
                            </li>
                            <li>
                              <p>
                                <span className="title">Experience:</span> 3-3.5
                                Years
                              </p>
                            </li>
                            <li>
                              <p>
                                <span className="title">Location:</span> Dhaka,
                                Bangladesh
                              </p>
                            </li>
                          </ul>
                        </div>
                        <div className="job-type-apply">
                          <div className="job-type">
                            <span className="light-green">Full Time</span>
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
                  <div className="col-lg-4 col-md-6">
                    <div className="job-listing-card2">
                      <div className="job-thumb">
                        <img
                          className="img-fluid"
                          src="assets/images/bg/job-list-2.png"
                          alt=""
                        />
                        <div className="bookmark">
                          <i className="bi bi-bookmark"></i>
                        </div>
                      </div>
                      <div className="job-content">
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
                                  Assistant Manager
                                </Link>
                              </h5>
                              <ul>
                                <li>
                                  <p>
                                    <Link
                                      legacyBehavior
                                      href="/company-details"
                                    >
                                      <a>Hangman Gold</a>
                                    </Link>
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    <span className="title">Deadline:</span> 3
                                    April, 2023
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="job-discription">
                          <ul>
                            <li>
                              <p>
                                <span className="title">Salary:</span> $20k-$50k
                                /<span className="time">Per Hour</span>
                              </p>
                            </li>
                            <li>
                              <p>
                                <span className="title">Experience:</span> 2-2.5
                                Years
                              </p>
                            </li>
                            <li>
                              <p>
                                <span className="title">Location:</span> Sylhet,
                                Bangladesh
                              </p>
                            </li>
                          </ul>
                        </div>
                        <div className="job-type-apply">
                          <div className="job-type">
                            <span className="light-green">Full Time</span>
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
                  <div className="col-lg-4 col-md-6">
                    <div className="job-listing-card2">
                      <div className="job-thumb">
                        <img
                          className="img-fluid"
                          src="assets/images/bg/job-list-3.png"
                          alt=""
                        />
                        <div className="bookmark">
                          <i className="bi bi-bookmark"></i>
                        </div>
                      </div>
                      <div className="job-content">
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
                                  UI/UX Designer
                                </Link>
                              </h5>
                              <ul>
                                <li>
                                  <p>
                                    <Link
                                      legacyBehavior
                                      href="/company-details"
                                    >
                                      <a>Tech-Bath IT Ltd</a>
                                    </Link>
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    <span className="title">Deadline:</span> 5
                                    April, 2023
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="job-discription">
                          <ul>
                            <li>
                              <p>
                                <span className="title">Salary:</span> $50K-$90K
                                /<span className="time">Per Month</span>
                              </p>
                            </li>
                            <li>
                              <p>
                                <span className="title">Experience:</span> 2-3
                                Years
                              </p>
                            </li>
                            <li>
                              <p>
                                <span className="title">Location:</span>{" "}
                                Chicago, Australia
                              </p>
                            </li>
                          </ul>
                        </div>
                        <div className="job-type-apply">
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
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="job-listing-card2">
                      <div className="job-thumb">
                        <img
                          className="img-fluid"
                          src="assets/images/bg/job-list-4.png"
                          alt=""
                        />
                        <div className="urgent-batch">
                          <span>Urgent</span>
                        </div>
                        <div className="bookmark">
                          <i className="bi bi-bookmark"></i>
                        </div>
                      </div>
                      <div className="job-content">
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
                                  Junior Receptionist
                                </Link>
                              </h5>
                              <ul>
                                <li>
                                  <p>
                                    <Link
                                      legacyBehavior
                                      href="/company-details"
                                    >
                                      <a>Gangster.Hide</a>
                                    </Link>
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    <span className="title">Deadline:</span> 6
                                    April, 2023
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="job-discription">
                          <ul>
                            <li>
                              <p>
                                <span className="title">Salary:</span> $60-$80 /
                                <span className="time">Per Hour</span>
                              </p>
                            </li>
                            <li>
                              <p>
                                <span className="title">Experience:</span> 1-1.5
                                Years
                              </p>
                            </li>
                            <li>
                              <p>
                                <span className="title">Location:</span> Dhaka,
                                Bangladesh
                              </p>
                            </li>
                          </ul>
                        </div>
                        <div className="job-type-apply">
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
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="job-listing-card2">
                      <div className="job-thumb">
                        <img
                          className="img-fluid"
                          src="assets/images/bg/job-list-5.png"
                          alt=""
                        />
                        <div className="bookmark">
                          <i className="bi bi-bookmark"></i>
                        </div>
                      </div>
                      <div className="job-content">
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
                                  Senior Laboratoriest
                                </Link>
                              </h5>
                              <ul>
                                <li>
                                  <p>
                                    <Link
                                      legacyBehavior
                                      href="/company-details"
                                    >
                                      <a>Laballo.Lab Ltd</a>
                                    </Link>
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    <span className="title">Deadline:</span> 9
                                    April, 2023
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="job-discription">
                          <ul>
                            <li>
                              <p>
                                <span className="title">Salary:</span> $40K-$60K
                                /<span className="time">Per Month</span>
                              </p>
                            </li>
                            <li>
                              <p>
                                <span className="title">Experience:</span> 3-4
                                Years
                              </p>
                            </li>
                            <li>
                              <p>
                                <span className="title">Location:</span>{" "}
                                New-York, USA
                              </p>
                            </li>
                          </ul>
                        </div>
                        <div className="job-type-apply">
                          <div className="job-type">
                            <span className="light-green">Full Time</span>
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
                  <div className="col-lg-4 col-md-6">
                    <div className="job-listing-card2">
                      <div className="job-thumb">
                        <img
                          className="img-fluid"
                          src="assets/images/bg/job-list-6.png"
                          alt=""
                        />
                        <div className="urgent-batch">
                          <span>Urgent</span>
                        </div>
                        <div className="bookmark">
                          <i className="bi bi-bookmark"></i>
                        </div>
                      </div>
                      <div className="job-content">
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
                                  Medical Nurse
                                </Link>
                              </h5>
                              <ul>
                                <li>
                                  <p>
                                    <Link
                                      legacyBehavior
                                      href="/company-details"
                                    >
                                      <a>Marko Company</a>
                                    </Link>
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    <span className="title">Deadline:</span> 9
                                    April, 2023
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="job-discription">
                          <ul>
                            <li>
                              <p>
                                <span className="title">Salary:</span> $60-$90 /
                                <span className="time">Per Hour</span>
                              </p>
                            </li>
                            <li>
                              <p>
                                <span className="title">Experience:</span> 3-3.5
                                Years
                              </p>
                            </li>
                            <li>
                              <p>
                                <span className="title">Location:</span> Dhaka,
                                Bangladesh
                              </p>
                            </li>
                          </ul>
                        </div>
                        <div className="job-type-apply">
                          <div className="job-type">
                            <span className="light-green">Part Time</span>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home3Feature;
