import Link from "next/link";
import React from "react";
import CountUp from "react-countup";
import applicantData from "../../data/newAppliedList.json";
import ApplicantModal from "./CompanySettingArea/ApplicantModal";
function DashbordContent() {
  return (
    <>
      <div className="col-lg-12">
        <div className="dashboard-inner">
          <div className="author-and-action-btn-area two mb-40">
            <div className="author-area two">
              <div className="author-img">
                <img src="/assets/images/bg/company-img2.png" alt="" />
              </div>
              <div className="author-content">
                <span>Hello,</span>
                <h4>Elite Hangstroman</h4>
              </div>
            </div>
            <div className="action-btn-group">
              <ul>
                <li>
                  <Link legacyBehavior href="/company/company-profile">
                    <a>
                      <span>
                        <img src="/assets/images/icon/edit2.svg" alt="" />
                      </span>
                      Edit Profile
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="counter-area">
            <div className="row g-4 justify-content-center mb-30">
              <div className="col-lg-3 col-sm-6">
                <div className="counter-single">
                  <div className="counter-icon">
                    <img src="/assets/images/icon/tt-applied.svg" alt="image" />
                  </div>
                  <div className="coundown">
                    <p>Total Applied</p>
                    <div className="d-flex align-items-center">
                      <h3 className="odometer">
                        <CountUp
                          start={0}
                          end={30}
                          // enableScrollSpy={true}
                          duration={3}
                        />
                      </h3>
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
                    <p>Live Jobs</p>
                    <div className="d-flex align-items-center">
                      <h3 className="odometer">
                        {" "}
                        <CountUp
                          start={0}
                          end={80}
                          // enableScrollSpy={true}
                          duration={3}
                        />
                      </h3>
                      <span>+</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter-single three">
                  <div className="counter-icon">
                    <img
                      src="/assets/images/icon/pending-icon.svg"
                      alt="image"
                    />
                  </div>
                  <div className="coundown">
                    <p>Pending Job</p>
                    <div className="d-flex align-items-center">
                      <h3 className="odometer">
                        {" "}
                        <CountUp
                          start={0}
                          end={120}
                          // enableScrollSpy={true}
                          duration={3}
                        />
                      </h3>
                      <span>+</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter-single four">
                  <div className="counter-icon">
                    <img
                      src="/assets/images/icon/closed-icon.svg"
                      alt="image"
                    />
                  </div>
                  <div className="coundown">
                    <p>Closed Jobs</p>
                    <div className="d-flex align-items-center">
                      <h3 className="odometer">
                        {" "}
                        <CountUp
                          start={0}
                          end={900}
                          // enableScrollSpy={true}
                          duration={3}
                        />
                      </h3>
                      <span>+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-4 justify-content-cente">
              <div className="col-lg-3 col-sm-6">
                <div className="counter-single">
                  <div className="counter-icon">
                    <img
                      src="/assets/images/icon/total-view-icon.svg"
                      alt="image"
                    />
                  </div>
                  <div className="coundown">
                    <p>Total View</p>
                    <div className="d-flex align-items-center">
                      <h3 className="odometer">
                        {" "}
                        <CountUp
                          start={0}
                          end={2500}
                          // enableScrollSpy={true}
                          duration={3}
                        />
                      </h3>
                      <span>+</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter-single two">
                  <div className="counter-icon">
                    <img
                      src="/assets/images/icon/follow-icon.svg"
                      alt="image"
                    />
                  </div>
                  <div className="coundown">
                    <p>Our Followers</p>
                    <div className="d-flex align-items-center">
                      <h3 className="odometer">
                        {" "}
                        <CountUp
                          start={0}
                          end={250}
                          // enableScrollSpy={true}
                          duration={3}
                        />
                      </h3>
                      <span>+</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter-single three">
                  <div className="counter-icon">
                    <img
                      src="/assets/images/icon/highlight-icon.svg"
                      alt="image"
                    />
                  </div>
                  <div className="coundown">
                    <p>Highlighted Jobs</p>
                    <div className="d-flex align-items-center">
                      <h3 className="odometer">
                        {" "}
                        <CountUp
                          start={0}
                          end={154}
                          // enableScrollSpy={true}
                          duration={3}
                        />
                      </h3>
                      <span>+</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter-single five">
                  <div className="counter-icon">
                    <img
                      src="/assets/images/icon/featured-icon.svg"
                      alt="image"
                    />
                  </div>
                  <div className="coundown">
                    <p>Our Followers</p>
                    <div className="d-flex align-items-center">
                      <h3 className="odometer">
                        {" "}
                        <CountUp
                          start={0}
                          end={500}
                          // enableScrollSpy={true}
                          duration={3}
                        />
                      </h3>
                      <span>+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="new-applied-job-area">
            <h5>New Applied List:</h5>
            <div className="table-wrapper2">
              <table className="eg-table table category-table mb-0">
                <tbody>
                  {applicantData.slice(0, 6).map((item) => {
                    const {
                      id,
                      applicent_name,
                      applicent_img,
                      applicent_university,
                      applicent_designation,
                      applicent_exprience,
                      applicent_salary,
                      applicent_privious_compnay_name,
                      applied_date,
                    } = item;
                    return (
                      <tr key={id}>
                        <td data-label="Candidate Name">
                          <div className="employee-info">
                            <div className="employee-img">
                              <img src={applicent_img} alt="" />
                            </div>
                            <div className="employee-content">
                              <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                              >
                                {applicent_name}
                              </button>
                              {/* Modal */}
                              <ApplicantModal />
                              <span>
                                <img
                                  src="/assets/images/icon/company-2.svg"
                                  alt=""
                                />
                                {applicent_university}
                              </span>
                              <p>
                                <span>Applied On:</span> {applied_date}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td data-label="Carrer Summary">
                          <div className="carrer-summary">
                            <h6>
                              {applicent_privious_compnay_name} &nbsp;{" "}
                              <span>({applicent_designation})</span>
                            </h6>
                            <ul>
                              <li>
                                <span>Experience:</span> {applicent_exprience}
                              </li>
                              <li>
                                <span>Salary:</span> {applicent_salary}
                              </li>
                            </ul>
                          </div>
                        </td>
                        <td data-label="Actions">
                          <div className="action-btn-group">
                            <ul>
                              <li>
                                <button>
                                  <img
                                    src="/assets/images/icon/shortlist-icon.svg"
                                    alt=""
                                  />{" "}
                                  Shortlist
                                </button>
                              </li>
                              <li>
                                <button className="reject">
                                  <img
                                    src="/assets/images/icon/rejected-icon.svg"
                                    alt=""
                                  />{" "}
                                  Rejected
                                </button>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashbordContent;
