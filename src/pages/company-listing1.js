import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import CompanyListSidebar from "../components/company/CompanyListSidebar";
import jobListData from "../data/company_job_list.json";
import Layout from "../layout/Layout";
function CompanyListing1() {
  const currentPage = useRouter().pathname;
  useEffect(() => {
    document.body.className =
      currentPage === "/company-listing1" ? "bg-wight" : "";
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
      <Breadcrumb pageName="Company Listing-1" pageTitle="Company Listing-1" />
      <div className="company-listing-area pt-120 mb-120">
        <div className="container">
          <div className="row g-lg-4 gy-5">
            <CompanyListSidebar />
            <div className="col-lg-8">
              <div className="company-listing-wrap">
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
                          <li>
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
                          <li>
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
                {isGrid ? (
                  <div className="row g-4 mb-70">
                    {jobListData.map((job) => {
                      const {
                        id,
                        job_location,
                        job_title,
                        company_logo,
                        vacancies,
                      } = job;
                      return (
                        <div key={id} className="col-md-6">
                          <div className="company-list-card1">
                            <div className="company-area">
                              <div className="logo">
                                <img src={company_logo} alt="" />
                              </div>
                              <div className="company-content">
                                <div className="company-details">
                                  <div className="name-location">
                                    <h5>
                                      <Link
                                        legacyBehavior
                                        href="/company-details"
                                      >
                                        <a>{job_title}</a>
                                      </Link>
                                    </h5>
                                    <p>
                                      <img
                                        src="assets/images/icon/location.svg"
                                        alt=""
                                      />
                                      {job_location}
                                    </p>
                                  </div>
                                  <div className="bookmark">
                                    <i className="bi bi-bookmark-fill" />
                                  </div>
                                </div>
                                <div className="job-details-vacancies">
                                  <div className="vacancies">
                                    <p>
                                      Vacancies: <span>{vacancies}</span>
                                    </p>
                                  </div>
                                  <div className="apply-btn">
                                    <Link
                                      legacyBehavior
                                      href="/company-details"
                                    >
                                      <a>
                                        <span>
                                          <img
                                            src="assets/images/icon/apply-ellipse.svg"
                                            alt=""
                                          />
                                        </span>
                                        View Details
                                      </a>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="row gy-5 mb-70 justify-content-center">
                    {jobListData.map((job) => {
                      const {
                        id,
                        job_location,
                        job_title,
                        company_logo,
                        vacancies,
                      } = job;
                      return (
                        <div key={id} className="col-md-6 col-sm-10">
                          <div className="company-listing-card2">
                            <div className="company-area">
                              <span />
                              <div className="logo">
                                <img src={company_logo} alt="" />
                              </div>
                              <div className="company-details">
                                <div className="name-location">
                                  <h5>
                                    <Link
                                      legacyBehavior
                                      href="/company-details"
                                    >
                                      <a>{job_title}</a>
                                    </Link>
                                  </h5>
                                  <ul>
                                    <li>
                                      <img
                                        src="assets/images/icon/location.svg"
                                        alt=""
                                      />{" "}
                                      {job_location}
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="job-details-vacancies">
                              <div className="vacancies">
                                <p>
                                  Vacancies: <span>{vacancies}</span>
                                </p>
                              </div>
                              <div className="apply-btn">
                                <Link legacyBehavior href="/company-details">
                                  <a>
                                    View Details
                                    <span>
                                      <img
                                        src="assets/images/icon/apply-ellipse.svg"
                                        alt=""
                                      />
                                    </span>
                                  </a>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                <div className="row">
                  <div className="col-lg-12 d-flex justify-content-center">
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
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CompanyListing1;
