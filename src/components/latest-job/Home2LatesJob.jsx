import Link from "next/link";
import React from "react";

function Home2LatesJob() {
  return (
    <div className="home2-job-list-area mb-120">
      <div className="container">
        <div className="row mb-60">
          <div className="col-12 d-flex flex-wrap align-items-end justify-content-md-between justify-content-start gap-3">
            <div className="section-title1">
              <h2>
                JOBES <span>Latest</span> Job
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
        <div className="row g-4">
          <div className="col-xl-4 col-lg-6">
            <div className="job-list-card">
              <div className="urgent-batch">
                <span>Urgent</span>
              </div>
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
                        <a>UI/UX Engineer</a>
                      </Link>
                    </h5>
                    <p>
                      <Link legacyBehavior href="/company-details">
                        <a>Germain Group Ltd</a>
                      </Link>
                    </p>
                  </div>
                  <div className="bookmark">
                    <i className="bi bi-bookmark" />
                  </div>
                </div>
              </div>
              <div className="job-discription">
                <ul>
                  <li>
                    <p>
                      <span className="title">Salary:</span> $80-$110 /{" "}
                      <span className="time">Per month</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="title">Deadline:</span>{" "}
                      <span className="time">02-04-2023</span>
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
            <div className="job-list-card">
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
                    <p>
                      <Link legacyBehavior href="/company-details">
                        <a>Norland Comapny</a>
                      </Link>
                    </p>
                  </div>
                  <div className="bookmark">
                    <i className="bi bi-bookmark" />
                  </div>
                </div>
              </div>
              <div className="job-discription">
                <ul>
                  <li>
                    <p>
                      <span className="title">Salary:</span> $30-$40 /{" "}
                      <span className="time">Per Hour</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="title">Deadline:</span>{" "}
                      <span className="time">03-04-2023</span>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="job-type-apply">
                <div className="apply-btn">
                  <Link legacyBehavior href="/job-details">
                    <a>
                      {" "}
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
            <div className="job-list-card">
              <div className="urgent-batch">
                <span>Urgent</span>
              </div>
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
                        <a>Senior WordPress Develope</a>
                      </Link>
                    </h5>
                    <p>
                      <Link legacyBehavior href="/company-details">
                        <a>Markoian Ltd</a>
                      </Link>
                    </p>
                  </div>
                  <div className="bookmark">
                    <i className="bi bi-bookmark" />
                  </div>
                </div>
              </div>
              <div className="job-discription">
                <ul>
                  <li>
                    <p>
                      <span className="title">Salary:</span> $60-$80 /{" "}
                      <span className="time">Per month</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="title">Deadline:</span>{" "}
                      <span className="time">05-04-2023</span>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="job-type-apply">
                <div className="apply-btn">
                  <Link legacyBehavior href="/job-details">
                    <a>
                      {" "}
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
            <div className="job-list-card">
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
                        <a>Senior Receptionist</a>
                      </Link>
                    </h5>
                    <p>
                      <Link legacyBehavior href="/company-details">
                        <a>Hangman Gold</a>
                      </Link>
                    </p>
                  </div>
                  <div className="bookmark">
                    <i className="bi bi-bookmark" />
                  </div>
                </div>
              </div>
              <div className="job-discription">
                <ul>
                  <li>
                    <p>
                      <span className="title">Salary:</span> $80K-$110K /{" "}
                      <span className="time">Per month</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="title">Deadline:</span>{" "}
                      <span className="time">02-04-2023</span>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="job-type-apply">
                <div className="apply-btn">
                  <Link legacyBehavior href="/job-details">
                    <a>
                      {" "}
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
            <div className="job-list-card">
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
                        <a> Manager (HR)</a>
                      </Link>
                    </h5>
                    <p>
                      <Link legacyBehavior href="/company-details">
                        <a>Digita.Co Ltd</a>
                      </Link>
                    </p>
                  </div>
                  <div className="bookmark">
                    <i className="bi bi-bookmark" />
                  </div>
                </div>
              </div>
              <div className="job-discription">
                <ul>
                  <li>
                    <p>
                      <span className="title">Salary:</span> $60K-$70K /{" "}
                      <span className="time">Per month</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="title">Deadline:</span>{" "}
                      <span className="time">07-04-2023</span>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="job-type-apply">
                <div className="apply-btn">
                  <Link legacyBehavior href="/job-details">
                    <a>
                      {" "}
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
            <div className="job-list-card">
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
                        <a>UI/UX Designer</a>
                      </Link>
                    </h5>
                    <p>
                      <Link legacyBehavior href="/company-details">
                        <a>Techman Digita</a>
                      </Link>
                    </p>
                  </div>
                  <div className="bookmark">
                    <i className="bi bi-bookmark" />
                  </div>
                </div>
              </div>
              <div className="job-discription">
                <ul>
                  <li>
                    <p>
                      <span className="title">Salary:</span> $80-$110 /{" "}
                      <span className="time">Per month</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="title">Deadline:</span>{" "}
                      <span className="time">09-04-2023</span>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="job-type-apply">
                <div className="apply-btn">
                  <Link legacyBehavior href="/job-details">
                    <a>
                      {" "}
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

export default Home2LatesJob;
