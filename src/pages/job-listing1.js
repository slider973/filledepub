import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../layout/Layout";

function JobListing1() {
  const currentPage = useRouter().pathname;
  useEffect(() => {
    document.body.className = currentPage === "/job-listing1" ? "bg-wight" : "";
  });
  const [isGrid, setIsGrid] = useState(true);
  const handleGridClick = () => {
    setIsGrid(true);
  };

  const handleListClick = () => {
    setIsGrid(false);
  };
  return (
    <Layout>
      <Breadcrumb pageName="Job Listing" pageTitle="Job Listing" />
      <div className="job-listing-area pt-120 mb-120">
        <div className="container">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-4">
              <div className="job-sidebar">
                <div className="job-widget style-1 mb-20">
                  <div className="check-box-item">
                    <h5 className="job-widget-title">Job Category</h5>
                    <div className="checkbox-container">
                      <ul>
                        <li>
                          <label className="containerss">
                            <input type="checkbox" />
                            <span className="checkmark" />
                            <span className="text">Health Care</span>
                            <span className="qty">(80)</span>
                          </label>
                        </li>
                        <li>
                          <label className="containerss">
                            <input type="checkbox" />
                            <span className="checkmark" />
                            <span className="text">Account &amp; Finance</span>
                            <span className="qty">(80)</span>
                          </label>
                        </li>
                        <li>
                          <label className="containerss">
                            <input type="checkbox" />
                            <span className="checkmark" />
                            <span className="text">Transportation</span>
                            <span className="qty">(100)</span>
                          </label>
                        </li>
                        <li>
                          <label className="containerss">
                            <input type="checkbox" />
                            <span className="checkmark" />
                            <span className="text">Medical &amp; Finance</span>
                            <span className="qty">(120)</span>
                          </label>
                        </li>
                        <li>
                          <label className="containerss">
                            <input type="checkbox" />
                            <span className="checkmark" />
                            <span className="text">Development</span>
                            <span className="qty">(30)</span>
                          </label>
                        </li>
                        <li>
                          <label className="containerss">
                            <input type="checkbox" />
                            <span className="checkmark" />
                            <span className="text">Engineering</span>
                            <span className="qty">(10)</span>
                          </label>
                        </li>
                        <li>
                          <label className="containerss">
                            <input type="checkbox" />
                            <span className="checkmark" />
                            <span className="text">Receptionist</span>
                            <span className="qty">(70)</span>
                          </label>
                        </li>
                        <li>
                          <label className="containerss">
                            <input type="checkbox" />
                            <span className="checkmark" />
                            <span className="text">Non-Profit Org.</span>
                            <span className="qty">(100)</span>
                          </label>
                        </li>
                        <li>
                          <label className="containerss">
                            <input type="checkbox" />
                            <span className="checkmark" />
                            <span className="text">Health Care</span>
                            <span className="qty">(80)</span>
                          </label>
                        </li>
                        <li>
                          <label className="containerss">
                            <input type="checkbox" />
                            <span className="checkmark" />
                            <span className="text">Account &amp; Finance</span>
                            <span className="qty">(80)</span>
                          </label>
                        </li>
                        <li>
                          <label className="containerss">
                            <input type="checkbox" />
                            <span className="checkmark" />
                            <span className="text">Transportation</span>
                            <span className="qty">(100)</span>
                          </label>
                        </li>
                        <li>
                          <label className="containerss">
                            <input type="checkbox" />
                            <span className="checkmark" />
                            <span className="text">Medical &amp; Finance</span>
                            <span className="qty">(120)</span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="job-widget mb-20">
                  <div className="check-box-item">
                    <h5 className="job-widget-title">Type of Employments</h5>
                    <div className="checkbox-container">
                      <ul>
                        <li>
                          <label className="containerss">
                            <input type="checkbox" />
                            <span className="checkmark" />
                            <span className="text">Full Time</span>
                            <span className="qty">(30)</span>
                          </label>
                        </li>
                        <li>
                          <label className="containerss">
                            <input type="checkbox" />
                            <span className="checkmark" />
                            <span className="text">Freelance</span>
                            <span className="qty">(10)</span>
                          </label>
                        </li>
                        <li>
                          <label className="containerss">
                            <input type="checkbox" />
                            <span className="checkmark" />
                            <span className="text">Part Time</span>
                            <span className="qty">(100)</span>
                          </label>
                        </li>
                        <li>
                          <label className="containerss">
                            <input type="checkbox" />
                            <span className="checkmark" />
                            <span className="text">Remote</span>
                            <span className="qty">(60)</span>
                          </label>
                        </li>
                        <li>
                          <label className="containerss">
                            <input type="checkbox" />
                            <span className="checkmark" />
                            <span className="text">Temporary</span>
                            <span className="qty">(40)</span>
                          </label>
                        </li>
                        <li>
                          <label className="containerss">
                            <input type="checkbox" />
                            <span className="checkmark" />
                            <span className="text">Permanent</span>
                            <span className="qty">(30)</span>
                          </label>
                        </li>
                        <li>
                          <label className="containerss">
                            <input type="checkbox" />
                            <span className="checkmark" />
                            <span className="text">Internship</span>
                            <span className="qty">(80)</span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="job-widget mb-20">
                  <div className="check-box-item">
                    <h5 className="job-widget-title">Date of Post</h5>
                    <div className="checkbox-container">
                      <ul>
                        <li>
                          <label className="containerss">
                            <input type="checkbox" />
                            <span className="checkmark" />
                            <span className="text">Today</span>
                            <span className="qty">(80)</span>
                          </label>
                        </li>
                        <li>
                          <label className="containerss">
                            <input type="checkbox" />
                            <span className="checkmark" />
                            <span className="text">Last week ago</span>
                            <span className="qty">(100)</span>
                          </label>
                        </li>
                        <li>
                          <label className="containerss">
                            <input type="checkbox" />
                            <span className="checkmark" />
                            <span className="text">Last month ago</span>
                            <span className="qty">(100)</span>
                          </label>
                        </li>
                        <li>
                          <label className="containerss">
                            <input type="checkbox" />
                            <span className="checkmark" />
                            <span className="text">3 month ago</span>
                            <span className="qty">(30)</span>
                          </label>
                        </li>
                        <li>
                          <label className="containerss">
                            <input type="checkbox" />
                            <span className="checkmark" />
                            <span className="text">1 year ago</span>
                            <span className="qty">(30)</span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="job-widget mb-20">
                  <div className="check-box-item">
                    <h5 className="job-widget-title mb-15">Salary Range</h5>
                    <div className="range-widget">
                      <range-slider
                        minvalue={1}
                        maxvalue={1500}
                        startminpos={300}
                        startmaxpos={1200}
                        um="K"
                      />
                      <template id="range-slider" />
                    </div>
                    <div className="salary-container">
                      <ul>
                        <li>
                          <input
                            className="form-check-input"
                            type="radio"
                            id="salary-1"
                            name="showInputBox"
                            defaultValue="salary-1"
                          />
                          <div className="content">
                            <span className="text">$5K-$15K</span>
                            <span className="qty">(80)</span>
                          </div>
                        </li>
                        <li>
                          <input
                            className="form-check-input"
                            type="radio"
                            id="salary-2"
                            name="showInputBox"
                            defaultValue="salary-2"
                          />
                          <div className="content">
                            <span className="text">$20K-$30K</span>
                            <span className="qty">(100)</span>
                          </div>
                        </li>
                        <li>
                          <input
                            className="form-check-input"
                            type="radio"
                            id="salary-3"
                            name="showInputBox"
                            defaultValue="salary-3"
                          />
                          <div className="content">
                            <span className="text">$35K-$50K</span>
                            <span className="qty">(100)</span>
                          </div>
                        </li>
                        <li>
                          <input
                            className="form-check-input"
                            type="radio"
                            id="salary-4"
                            name="showInputBox"
                            defaultValue="salary-4"
                          />
                          <div className="content">
                            <span className="text">$55K-$70K</span>
                            <span className="qty">(120)</span>
                          </div>
                        </li>
                        <li>
                          <input
                            className="form-check-input"
                            type="radio"
                            id="salary-5"
                            name="showInputBox"
                            defaultValue="salary-5"
                          />
                          <div className="content">
                            <span className="text">$75K-$100K</span>
                            <span className="qty">(30)</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="job-widget">
                  <div className="check-box-item">
                    <h5 className="job-widget-title mb-10">Date of Post</h5>
                    <ul className="tags">
                      <li>
                        <Link legacyBehavior href="/job-listing1">
                          <a>Technology,</a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="/job-listing1">
                          <a>Marketing,</a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="/job-listing1">
                          <a>Sales,</a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="/job-listing1">
                          <a>Transport,</a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="/job-listing1">
                          <a>Medical,</a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="/job-listing1">
                          <a>Design,</a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="/job-listing1">
                          <a>Data Analyst, </a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="/job-listing1">
                          <a>Development,</a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="/job-listing1">
                          <a>Non-Profit,</a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="/job-listing1">
                          <a>Manager,</a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="/job-listing1">
                          <a>Health,</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="job-widget-btn mb-20 mt-10">
                  <Link legacyBehavior href="#">
                    <a className="primry-btn-2 lg-btn text-center">
                      Go to Job Alert
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="job-listing-wrrap">
                <div className="row g-4 mb-25">
                  <div className="col-lg-6 d-flex align-items-center">
                    <p className="show-item">
                      Showing results 10 in 200 jobs list
                    </p>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center justify-content-lg-end">
                    <div className="grid-select-area">
                      <div className="select-area">
                        <select className="select1">
                          <option value={0}>Sort By(Default)</option>
                          <option value={1}>Full Time</option>
                          <option value={2}>Part Time</option>
                          <option value={3}>Remote</option>
                          <option value={3}>Internship</option>
                          <option value={3}>Freelance</option>
                        </select>
                      </div>
                      <div className="grid-area">
                        <ul>
                          <li style={{ cursor: "pointer" }}>
                            <div
                              className={isGrid ? "active" : ""}
                              onClick={handleGridClick}
                            >
                              <svg
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M6.26106 6.95674H0.695674C0.311464 6.95674 0 6.64527 0 6.26106V0.695674C0 0.311464 0.311464 0 0.695674 0H6.26106C6.64527 0 6.95674 0.311464 6.95674 0.695674V6.26106C6.95674 6.64527 6.64527 6.95674 6.26106 6.95674Z" />
                                <path d="M15.304 6.95674H9.73864C9.35443 6.95674 9.04297 6.64527 9.04297 6.26106V0.695674C9.04297 0.311464 9.35443 0 9.73864 0H15.304C15.6882 0 15.9997 0.311464 15.9997 0.695674V6.26106C15.9997 6.64527 15.6882 6.95674 15.304 6.95674Z" />
                                <path d="M6.26106 16.0004H0.695674C0.311464 16.0004 0 15.689 0 15.3048V9.73937C0 9.35517 0.311464 9.0437 0.695674 9.0437H6.26106C6.64527 9.0437 6.95674 9.35517 6.95674 9.73937V15.3048C6.95674 15.689 6.64527 16.0004 6.26106 16.0004Z" />
                                <path d="M15.304 16.0004H9.73864C9.35443 16.0004 9.04297 15.689 9.04297 15.3048V9.73937C9.04297 9.35517 9.35443 9.0437 9.73864 9.0437H15.304C15.6882 9.0437 15.9997 9.35517 15.9997 9.73937V15.3048C15.9997 15.689 15.6882 16.0004 15.304 16.0004Z" />
                              </svg>
                            </div>
                          </li>
                          <li style={{ cursor: "pointer" }}>
                            <div
                              className={!isGrid ? "active" : ""}
                              onClick={handleListClick}
                            >
                              <svg
                                width={22}
                                height={16}
                                viewBox="0 0 22 16"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M1.91313 0C0.856731 0 0 0.893707 0 1.99656C0 3.09861 0.856731 3.99157 1.91313 3.99157C2.96953 3.99157 3.82626 3.09861 3.82626 1.99656C3.82626 0.893707 2.96953 0 1.91313 0Z" />
                                <path d="M1.91313 6.00464C0.856731 6.00464 0 6.8976 0 8.00045C0 9.1025 0.856731 9.99621 1.91313 9.99621C2.96953 9.99621 3.82626 9.1025 3.82626 8.00045C3.82626 6.8976 2.96953 6.00464 1.91313 6.00464Z" />
                                <path d="M1.91313 12.0085C0.856731 12.0085 0 12.9023 0 14.0043C0 15.1064 0.856731 16.0001 1.91313 16.0001C2.96953 16.0001 3.82626 15.1064 3.82626 14.0043C3.82626 12.9023 2.96953 12.0085 1.91313 12.0085Z" />
                                <path d="M20.561 0.495117H6.95229C6.15787 0.495117 5.51367 1.16716 5.51367 1.99665C5.51367 2.82545 6.15782 3.49744 6.95229 3.49744H20.561C21.3554 3.49744 21.9996 2.82545 21.9996 1.99665C21.9996 1.16716 21.3554 0.495117 20.561 0.495117Z" />
                                <path d="M20.561 6.49878H6.95229C6.15787 6.49878 5.51367 7.17077 5.51367 8.00032C5.51367 8.82911 6.15782 9.5011 6.95229 9.5011H20.561C21.3554 9.5011 21.9996 8.82911 21.9996 8.00032C21.9996 7.17077 21.3554 6.49878 20.561 6.49878Z" />
                                <path d="M20.561 12.5034H6.95229C6.15787 12.5034 5.51367 13.1754 5.51367 14.0042C5.51367 14.833 6.15782 15.5049 6.95229 15.5049H20.561C21.3554 15.5049 21.9996 14.833 21.9996 14.0042C21.9996 13.1754 21.3554 12.5034 20.561 12.5034Z" />
                              </svg>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {!isGrid ? (
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
                                    <Link
                                      legacyBehavior
                                      href="/company-details"
                                    >
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
                                    <span className="title">Salary:</span>{" "}
                                    $20K-$50K /{" "}
                                    <span className="time">Per Month</span>
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    <span className="title">Deadline:</span> 05
                                    April, 2023
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
                                    <Link
                                      legacyBehavior
                                      href="/company-details"
                                    >
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
                                    <span className="title">Salary:</span>{" "}
                                    $50K-$70K /{" "}
                                    <span className="time">Per Month</span>
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    <span className="title">Deadline:</span> 05
                                    April, 2023
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
                                  src="assets/images/bg/company-logo/company-04.png"
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
                                    <Link
                                      legacyBehavior
                                      href="/company-details"
                                    >
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
                                    <span className="title">Salary:</span>{" "}
                                    $30K-$50K /{" "}
                                    <span className="time">Per Month</span>
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    <span className="title">Deadline:</span> 06
                                    April, 2023
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
                          <div className="job-type">
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
                                  src="assets/images/bg/company-logo/company-05.png"
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
                                    <Link
                                      legacyBehavior
                                      href="/company-details"
                                    >
                                      <a> UI.UX Company</a>
                                    </Link>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="job-discription">
                              <ul>
                                <li>
                                  <p>
                                    <span className="title">Salary:</span>{" "}
                                    $20-$50 /{" "}
                                    <span className="time">Per Hour</span>
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    <span className="title">Deadline:</span> 06
                                    April, 2023
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
                          <div className="job-type">
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
                                  src="assets/images/bg/company-logo/company-04.png"
                                  alt=""
                                />
                              </div>
                              <div className="company-details">
                                <div className="name-location">
                                  <h5>
                                    <Link legacyBehavior href="/job-details">
                                      <a>Mern Stack Developer</a>
                                    </Link>
                                  </h5>
                                  <p>
                                    <Link
                                      legacyBehavior
                                      href="/company-details"
                                    >
                                      <a> Germain Group Ltd</a>
                                    </Link>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="job-discription">
                              <ul>
                                <li>
                                  <p>
                                    <span className="title">Salary:</span>{" "}
                                    $80K-$90K /{" "}
                                    <span className="time">Per Month</span>
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    <span className="title">Deadline:</span> 07
                                    April, 2023
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
                    <div className="col-lg-12 mb-70">
                      <div className="job-listing-card">
                        <div className="job-top">
                          <div className="job-list-content">
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
                                      <a>Junior React Developer</a>
                                    </Link>
                                  </h5>
                                  <p>
                                    <Link
                                      legacyBehavior
                                      href="/company-details"
                                    >
                                      <a> Bistro.Tech Ltd</a>
                                    </Link>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="job-discription">
                              <ul>
                                <li>
                                  <p>
                                    <span className="title">Salary:</span>{" "}
                                    $80K-$90K /{" "}
                                    <span className="time">Per Month</span>
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    <span className="title">Deadline:</span> 08
                                    April, 2023
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
                    <div className="col-lg-12 d-flex justify-content-center">
                      <div className="pagination-area">
                        <nav aria-label="...">
                          <ul className="pagination">
                            <li className="page-item disabled">
                              <a className="page-link" href="#" tabIndex={-1} />
                            </li>
                            <li
                              className="page-item active"
                              aria-current="page"
                            >
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
                ) : (
                  <div className="row g-4 mb-70">
                    <div className="col-md-6">
                      <div className="job-listing-card2">
                        <div className="job-thumb">
                          <img
                            className="img-fluid"
                            src="assets/images/bg/job-list-1.png"
                            alt=""
                          />
                          <div className="bookmark">
                            <i className="bi bi-bookmark" />
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
                                    <a> WordPress Developer</a>
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
                                  <span className="title">Salary:</span> $60-$90
                                  / <span className="time">Per Hour</span>
                                </p>
                              </li>
                              <li>
                                <p>
                                  <span className="title">Experience:</span>{" "}
                                  3-3.5 Years
                                </p>
                              </li>
                              <li>
                                <p>
                                  <span className="title">Location:</span>{" "}
                                  Dhaka, Bangladesh
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
                    <div className="col-md-6">
                      <div className="job-listing-card2">
                        <div className="job-thumb">
                          <img
                            className="img-fluid"
                            src="assets/images/bg/job-list-2.png"
                            alt=""
                          />
                          <div className="bookmark">
                            <i className="bi bi-bookmark" />
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
                                    <a> Assistant Manager</a>
                                  </Link>
                                </h5>
                                <ul>
                                  <li>
                                    <p>
                                      <Link
                                        legacyBehavior
                                        href="/company-details"
                                      >
                                        <a> Hangman Gold</a>
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
                                  <span className="title">Salary:</span>{" "}
                                  $20k-$50k /{" "}
                                  <span className="time">Per Hour</span>
                                </p>
                              </li>
                              <li>
                                <p>
                                  <span className="title">Experience:</span>{" "}
                                  2-2.5 Years
                                </p>
                              </li>
                              <li>
                                <p>
                                  <span className="title">Location:</span>{" "}
                                  Sylhet, Bangladesh
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
                    <div className="col-md-6">
                      <div className="job-listing-card2">
                        <div className="job-thumb">
                          <img
                            className="img-fluid"
                            src="assets/images/bg/job-list-3.png"
                            alt=""
                          />
                          <div className="bookmark">
                            <i className="bi bi-bookmark" />
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
                                  <span className="title">Salary:</span>{" "}
                                  $50K-$90K /{" "}
                                  <span className="time">Per Month</span>
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
                    <div className="col-md-6">
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
                            <i className="bi bi-bookmark" />
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
                                  <span className="title">Salary:</span> $60-$80
                                  / <span className="time">Per Hour</span>
                                </p>
                              </li>
                              <li>
                                <p>
                                  <span className="title">Experience:</span>{" "}
                                  1-1.5 Years
                                </p>
                              </li>
                              <li>
                                <p>
                                  <span className="title">Location:</span>{" "}
                                  Dhaka, Bangladesh
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
                    <div className="col-md-6">
                      <div className="job-listing-card2">
                        <div className="job-thumb">
                          <img
                            className="img-fluid"
                            src="assets/images/bg/job-list-5.png"
                            alt=""
                          />
                          <div className="bookmark">
                            <i className="bi bi-bookmark" />
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
                                    <a> Senior Laboratoriest</a>
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
                                  <span className="title">Salary:</span>{" "}
                                  $40K-$60K /{" "}
                                  <span className="time">Per Month</span>
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
                    <div className="col-md-6">
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
                            <i className="bi bi-bookmark" />
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
                                        <a> Marko Company</a>
                                      </Link>
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      <span className="title">Deadline:</span> 9
                                      <a>April, 2023</a>
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
                                  <span className="title">Salary:</span> $60-$90
                                  / <span className="time">Per Hour</span>
                                </p>
                              </li>
                              <li>
                                <p>
                                  <span className="title">Experience:</span>{" "}
                                  3-3.5 Years
                                </p>
                              </li>
                              <li>
                                <p>
                                  <span className="title">Location:</span>{" "}
                                  Dhaka, Bangladesh
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
                    <div className="col-lg-12 d-flex justify-content-center">
                      <div className="pagination-area">
                        <nav aria-label="...">
                          <ul className="pagination">
                            <li className="page-item disabled">
                              <a className="page-link" href="#" tabIndex={-1} />
                            </li>
                            <li
                              className="page-item active"
                              aria-current="page"
                            >
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
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default JobListing1;
