import Link from "next/link";
import React from "react";
import CandidateLayout from "../../layout/CandidateLayout";

function AppliedJob() {
  return (
    <CandidateLayout>
      <div className="col-lg-9">
        <div className="applied-job-area">
          <div className="table-wrapper">
            <div className="table-title-filter">
              <div className="section-title">
                <h5>Applied Jobs:</h5>
              </div>
            </div>
            <table className="eg-table table category-table mb-30">
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
                      <a className="view-btn"> Tech.Bath Com...</a>
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
                      <a className="view-btn"> Gangster Group</a>
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
                      <a className="view-btn"> Zoomly.Co Ltd</a>
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
                              PHP Developer
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
                      <a className="view-btn"> Bistro.Tech Group</a>
                    </Link>
                  </td>
                  <td data-label="Status">
                    <button className="eg-btn green-btn">Success</button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="pagination-table-info">
              <div className="table-info">
                <span>06 Results Showing In 20 Jobs</span>
              </div>
              <div className="pagination-area">
                <nav aria-label="...">
                  <ul className="pagination">
                    <li className="page-item disabled">
                      <a className="page-link" href="#" tabIndex={-1} />
                    </li>
                    <li className="page-item active" aria-current="page">
                      <a className="page-link" href="#">
                        01
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        02
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        03
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#" />
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CandidateLayout>
  );
}

export default AppliedJob;
