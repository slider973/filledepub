import Link from "next/link";
import React from "react";

function DefaultContent() {
  return (
    <div className="col-lg-9">
      <div className="dashboard-inner">
        <div className="author-area">
          <div className="author-img">
            <img src="/assets/images/bg/author1.png" alt="" />
          </div>
          <div className="author-content">
            <span>Hello, I’m</span>
            <h4>JACOLINE Frankly</h4>
          </div>
        </div>
        <div className="counter-area">
          <div className="row g-lg-4 g-md-5 gy-5 justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div className="counter-single">
                <div className="counter-icon">
                  <img src="/assets/images/icon/tt-applied.svg" alt="image" />
                </div>
                <div className="coundown">
                  <p>Total Applied</p>
                  <div className="d-flex align-items-center">
                    <h3 className="odometer">250</h3>
                    <span>+</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="counter-single two">
                <div className="counter-icon">
                  <img src="/assets/images/icon/save-job.svg" alt="image" />
                </div>
                <div className="coundown">
                  <p>Saved Jobs</p>
                  <div className="d-flex align-items-center">
                    <h3 className="odometer">150</h3>
                    <span>+</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="counter-single three">
                <div className="counter-icon">
                  <img src="/assets/images/icon/massage.svg" alt="image" />
                </div>
                <div className="coundown">
                  <p>Message</p>
                  <div className="d-flex align-items-center">
                    <h3 className="odometer">120</h3>
                    <span>+</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="counter-single four">
                <div className="counter-icon">
                  <img src="/assets/images/icon/cv-review.svg" alt="image" />
                </div>
                <div className="coundown">
                  <p>Review CV</p>
                  <div className="d-flex align-items-center">
                    <h3 className="odometer">500</h3>
                    <span>+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="table-wrapper">
          <h5 className="title">Current Applied Jobs:</h5>
          <div className="scroll-table">
            <table className="eg-table table category-table mb-0">
              <thead>
                <tr>
                  <th>Job Tittle</th>
                  <th>Apply Date</th>
                  <th>Company</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Job Title">
                    <div className="company-info">
                      <div className="logo">
                        <img
                          src="/assets/images/bg/company-logo/company-06.png"
                          alt=""
                        />
                      </div>
                      <div className="company-details">
                        <div className="top">
                          <h6>
                            <Link legacyBehavior href="/job-details">
                              <a>Senior UI/UX Designer</a>
                            </Link>
                          </h6>
                          <span>
                            <img
                              src="/assets/images/icon/calender2.svg"
                              alt=""
                            />{" "}
                            1 days ago
                          </span>
                        </div>
                        <ul>
                          <li>
                            <img
                              src="/assets/images/icon/location.svg"
                              alt=""
                            />
                            New-York, USA
                          </li>
                          <li>
                            <img src="/assets/images/icon/arrow2.svg" alt="" />
                            <p>
                              <span className="title">Salary:</span> $60-$90 /{" "}
                              <span className="time">Per Hour</span>
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </td>
                  <td data-label="Apply Job">03/07/2022</td>
                  <td data-label="Company">
                    <Link legacyBehavior href="/company-details">
                      <a className="view-btn">Tech.Bath Com... </a>
                    </Link>
                  </td>
                  <td data-label="Status">
                    <button className="eg-btn purple-btn">Viewed</button>
                  </td>
                </tr>
                <tr>
                  <td data-label="Job Title">
                    <div className="company-info">
                      <div className="logo">
                        <img
                          src="/assets/images/bg/company-logo/company-02.png"
                          alt=""
                        />
                      </div>
                      <div className="company-details">
                        <div className="top">
                          <h6>
                            <Link legacyBehavior href="/job-details">
                              <a>React JS Developer</a>
                            </Link>
                          </h6>
                          <span>
                            <img
                              src="/assets/images/icon/calender2.svg"
                              alt=""
                            />{" "}
                            1 days ago
                          </span>
                        </div>
                        <ul>
                          <li>
                            <img
                              src="/assets/images/icon/location.svg"
                              alt=""
                            />
                            Dhaka, Bangladesh
                          </li>
                          <li>
                            <img src="/assets/images/icon/arrow2.svg" alt="" />
                            <p>
                              <span className="title">Salary:</span> $80-$100 /{" "}
                              <span className="time">Per Hour</span>
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </td>
                  <td data-label="Apply Job">07/07/2022</td>
                  <td data-label="Company">
                    <Link legacyBehavior href="/company-details">
                      <a className="view-btn">Gangster Group</a>
                    </Link>
                  </td>
                  <td data-label="Status">
                    <button className="eg-btn yellow-btn">Interview</button>
                  </td>
                </tr>
                <tr>
                  <td data-label="Job Title">
                    <div className="company-info">
                      <div className="logo">
                        <img
                          src="/assets/images/bg/company-logo/company-03.png"
                          alt=""
                        />
                      </div>
                      <div className="company-details">
                        <div className="top">
                          <h6>
                            <Link legacyBehavior href="/job-details">
                              <a>WordPress Developer</a>
                            </Link>
                          </h6>
                          <span>
                            <img
                              src="/assets/images/icon/calender2.svg"
                              alt=""
                            />{" "}
                            2 days ago
                          </span>
                        </div>
                        <ul>
                          <li>
                            <img
                              src="/assets/images/icon/location.svg"
                              alt=""
                            />
                            West London, UK
                          </li>
                          <li>
                            <img src="/assets/images/icon/arrow2.svg" alt="" />
                            <p>
                              <span className="title">Salary:</span> $30K-$40K /{" "}
                              <span className="time">Monthly</span>
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </td>
                  <td data-label="Apply Job">10/07/2022</td>
                  <td data-label="Company">
                    <Link legacyBehavior href="/company-details">
                      <a className="view-btn">Zoomly.Co Ltd</a>
                    </Link>
                  </td>
                  <td data-label="Status">
                    <button className="eg-btn orenge-btn">Canceled</button>
                  </td>
                </tr>
                <tr>
                  <td data-label="Job Title">
                    <div className="company-info">
                      <div className="logo">
                        <img
                          src="/assets/images/bg/company-logo/company-04.png"
                          alt=""
                        />
                      </div>
                      <div className="company-details">
                        <div className="top">
                          <h6>
                            <Link legacyBehavior href="/job-details">
                              <a>Mern-Stack Developer</a>
                            </Link>
                          </h6>
                          <span>
                            <img
                              src="/assets/images/icon/calender2.svg"
                              alt=""
                            />{" "}
                            1 week ago
                          </span>
                        </div>
                        <ul>
                          <li>
                            <img
                              src="/assets/images/icon/location.svg"
                              alt=""
                            />
                            New-York, USA
                          </li>
                          <li>
                            <img src="/assets/images/icon/arrow2.svg" alt="" />
                            <p>
                              <span className="title">Salary:</span> $20-$50 /{" "}
                              <span className="time">Per Hour</span>
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </td>
                  <td data-label="Apply Job">13/07/2022</td>
                  <td data-label="Company">
                    <Link legacyBehavior href="/company-details">
                      <a className="view-btn">Marko-land Ltd</a>
                    </Link>
                  </td>
                  <td data-label="Status">
                    <button className="eg-btn purple-btn">Viewed</button>
                  </td>
                </tr>
                <tr>
                  <td data-label="Job Title">
                    <div className="company-info">
                      <div className="logo">
                        <img
                          src="/assets/images/bg/company-logo/company-05.png"
                          alt=""
                        />
                      </div>
                      <div className="company-details">
                        <div className="top">
                          <h6>
                            <Link legacyBehavior href="/job-details">
                              <a>PHP Developer</a>
                            </Link>
                          </h6>
                          <span>
                            <img
                              src="/assets/images/icon/calender2.svg"
                              alt=""
                            />{" "}
                            2 week ago
                          </span>
                        </div>
                        <ul>
                          <li>
                            <img
                              src="/assets/images/icon/location.svg"
                              alt=""
                            />
                            New-York, USA
                          </li>
                          <li>
                            <img src="/assets/images/icon/arrow2.svg" alt="" />
                            <p>
                              <span className="title">Salary:</span> $40K-$60K /{" "}
                              <span className="time">Per Month</span>
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </td>
                  <td data-label="Apply Job">18/08/2022</td>
                  <td data-label="Company">
                    <Link legacyBehavior href="/company-details">
                      <a className="view-btn">Bistro.Tech Group</a>
                    </Link>
                  </td>
                  <td data-label="Status">
                    <button className="eg-btn green-btn">Success</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DefaultContent;
