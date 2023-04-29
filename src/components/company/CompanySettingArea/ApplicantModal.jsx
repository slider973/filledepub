import React from 'react'

function ApplicantModal() {
  return (
    <div
                            className="modal fade"
                            id="exampleModal"
                            tabIndex={-1}
                            aria-hidden="true"
                          >
                            <div className="modal-dialog">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <div className="button-groups">
                                    <ul>
                                      <li>
                                        <button className="primary-bg">
                                          <img
                                            src="/assets/images/icon/pdf2.svg"
                                            alt=""
                                          />{" "}
                                          Download PDF
                                        </button>
                                      </li>
                                      <li>
                                        <button>
                                          <img
                                            src="/assets/images/icon/shortlist2.svg"
                                            alt=""
                                          />{" "}
                                          Shortlist
                                        </button>
                                      </li>
                                      <li>
                                        <button className="red-bg">
                                          <img
                                            src="/assets/images/icon/reject2.svg"
                                            alt=""
                                          />{" "}
                                          reject
                                        </button>
                                      </li>
                                    </ul>
                                  </div>
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  />
                                </div>
                                <div className="modal-body">
                                  <div className="row justify-content-center">
                                    <div className="col-lg-12">
                                      <div className="resume-area">
                                        <div className="row g-4 mb-40">
                                          <div className="col-lg-6">
                                            <div className="author-area">
                                              <div className="author-img">
                                                <img
                                                  src="/assets/images/bg/resume-author.png"
                                                  alt=""
                                                />
                                              </div>
                                              <div className="name-degination">
                                                <h4>Mr. Jacoline Frankly</h4>
                                                <span>UI/UX Engineer</span>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col-lg-6">
                                            <div className="contact-area">
                                              <h4>Contact Info</h4>
                                              <ul>
                                                <li>
                                                  Phone:
                                                  <a href="#">
                                                    +880-177 443 5455{" "}
                                                    <span>
                                                      <img
                                                        src="/assets/images/icon/phone-5.svg"
                                                        alt=""
                                                      />
                                                    </span>
                                                  </a>
                                                </li>
                                                <li>
                                                  Email:
                                                  <a href="#">
                                                    info@example.com{" "}
                                                    <span>
                                                      <img
                                                        src="/assets/images/icon/envlop-5.svg"
                                                        alt=""
                                                      />
                                                    </span>
                                                  </a>
                                                </li>
                                                <li>
                                                  Website:
                                                  <a href="#">
                                                    www.infositeexample.com{" "}
                                                    <span>
                                                      <img
                                                        src="/assets/images/icon/web-5.svg "
                                                        alt=""
                                                      />
                                                    </span>
                                                  </a>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-lg-12">
                                          <div className="single-information-area">
                                            <div className="section-title">
                                              <h6>Career Objective</h6>
                                              <div className="dash" />
                                            </div>
                                            <div className="description">
                                              <p>
                                                I'm a passionate UI/UX designer
                                                and can bring innovative ideas
                                                &amp; concepts to life for
                                                client-based design projects. I
                                                have more than 3 years of design
                                                experience in
                                                digital/e-commerce. I
                                                experienced at tackle various
                                                needs from landing page designs,
                                                web app interfaces. I have
                                                skills in User Experience Design
                                                (UXD), user-centered Design,
                                                Interaction and Visual Design
                                                for websites, applications, web,
                                                and mobile products, wireframes,
                                                mock-ups, qualitative and
                                                quantitative user studies,
                                                usability analysis, and informal
                                                usability audits.
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-lg-12">
                                          <div className="single-information-area">
                                            <div className="section-title">
                                              <h6>Personal Information</h6>
                                              <div className="dash" />
                                            </div>
                                            <div className="row g-4">
                                              <div className="col-lg-6 devaider1 position-relative">
                                                <div className="informations">
                                                  <ul>
                                                    <li>
                                                      <span>
                                                        Father’s Name:
                                                      </span>{" "}
                                                      Mr. Norman Frankly
                                                    </li>
                                                    <li>
                                                      <span>
                                                        Date of Birth:
                                                      </span>{" "}
                                                      03 January,1998
                                                    </li>
                                                    <li>
                                                      <span>Nationality:</span>{" "}
                                                      Bangladeshi
                                                    </li>
                                                    <li>
                                                      <span>
                                                        Marital Status:
                                                      </span>{" "}
                                                      Unmarried
                                                    </li>
                                                    <li>
                                                      <span>Height:</span> 5’
                                                      5’’
                                                    </li>
                                                    <li>
                                                      <span>Blood Group:</span>{" "}
                                                      O ve+
                                                    </li>
                                                    <li>
                                                      <span>
                                                        Permanent Address:
                                                      </span>{" "}
                                                      Village: Mirpur-12
                                                      Block-C, Thana: Pallavi,
                                                      District: Dhaka, Division:
                                                      Dhaka
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                              <div className="col-lg-6 pl-40">
                                                <div className="informations d-flex justify-content-end">
                                                  <ul>
                                                    <li>
                                                      <span>
                                                        Mother’s Name:
                                                      </span>{" "}
                                                      Mrs. Macoline Frankly
                                                    </li>
                                                    <li>
                                                      <span>National ID:</span>{" "}
                                                      88 9919 6712 8762
                                                    </li>
                                                    <li>
                                                      <span>Religion:</span>{" "}
                                                      Islam
                                                    </li>
                                                    <li>
                                                      <span>Gender:</span> Male
                                                    </li>
                                                    <li>
                                                      <span>Weight:</span> 75 KG
                                                    </li>
                                                    <li>
                                                      <span>Height:</span> 5’
                                                      5’’
                                                    </li>
                                                    <li>
                                                      <span>
                                                        Present Address:
                                                      </span>{" "}
                                                      Village: Mirpur DOSH,
                                                      Block-C, Avenue-02, Thana:
                                                      Pallavi, District: Dhaka,
                                                      Division: Dhaka.
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-lg-12">
                                          <div className="single-information-area">
                                            <div className="section-title">
                                              <h6>Educational Qualification</h6>
                                              <div className="dash" />
                                            </div>
                                            <div className="educational-qualification mb-30">
                                              <div className="passing-year">
                                                <p>
                                                  <span>01.</span>April, 2016-
                                                  May, 2020
                                                </p>
                                                <span />
                                              </div>
                                              <div className="education-dt">
                                                <h6>
                                                  Royals Republic Science &amp;
                                                  Technology University
                                                </h6>
                                                <ul>
                                                  <li>
                                                    <span>
                                                      Education Level:
                                                    </span>{" "}
                                                    Graduation
                                                  </li>
                                                  <li>
                                                    <span>My Major:</span>{" "}
                                                    Bachelor Degree In CSE
                                                  </li>
                                                  <li>
                                                    <span>Result/GPA:</span>{" "}
                                                    3.75/4.00
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                            <div className="educational-qualification">
                                              <div className="passing-year">
                                                <p>
                                                  <span>02.</span>June, 2014-
                                                  April, 2016
                                                </p>
                                                <span />
                                              </div>
                                              <div className="education-dt">
                                                <h6>
                                                  International Collegiate
                                                  School &amp; College
                                                </h6>
                                                <ul>
                                                  <li>
                                                    <span>
                                                      Education Level:
                                                    </span>{" "}
                                                    HSC
                                                  </li>
                                                  <li>
                                                    <span>My Major:</span>{" "}
                                                    Science
                                                  </li>
                                                  <li>
                                                    <span>Result/GPA:</span>{" "}
                                                    4.96/5.00
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-lg-12">
                                          <div className="single-information-area">
                                            <div className="section-title">
                                              <h6>Career Application</h6>
                                              <div className="dash" />
                                            </div>
                                            <div className="row g-4 ">
                                              <div className="col-lg-6 devaider1 position-relative">
                                                <div className="informations">
                                                  <ul>
                                                    <li>
                                                      <span>
                                                        Current Job Place:
                                                      </span>{" "}
                                                      Norland Tech of Industry
                                                    </li>
                                                    <li>
                                                      <span>Position:</span>{" "}
                                                      UI/UX Engineer
                                                    </li>
                                                    <li>
                                                      <span>Experiences:</span>{" "}
                                                      3 Years
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                              <div className="col-lg-6 pl-40">
                                                <div className="informations">
                                                  <ul>
                                                    <li>
                                                      <span>
                                                        Current Salary:
                                                      </span>{" "}
                                                      30000/=
                                                    </li>
                                                    <li>
                                                      <span>
                                                        Expected Salary:
                                                      </span>{" "}
                                                      40000/=
                                                    </li>
                                                    <li>
                                                      <span>Available:</span>{" "}
                                                      Full Time
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-lg-12">
                                          <div className="single-information-area">
                                            <div className="section-title">
                                              <h6>Professionals Information</h6>
                                              <div className="dash" />
                                            </div>
                                            <div className="educational-qualification mb-30">
                                              <div className="passing-year">
                                                <p>
                                                  <span>01.</span>April, 2021-
                                                  May, 2022
                                                </p>
                                                <span />
                                              </div>
                                              <div className="education-dt">
                                                <h6>
                                                  Bistro.Tech Group of Industry
                                                </h6>
                                                <p className="position">
                                                  <span>Position:</span> UI/UX
                                                  Engineer ( Full-Time)
                                                </p>
                                                <div className="responsibility">
                                                  <h6>Responsibility:</h6>
                                                  <ul>
                                                    <li>
                                                      Creating high quality
                                                      landing pages optimized
                                                      for client website brands.
                                                    </li>
                                                    <li>
                                                      Creating e-commerce
                                                      interfaces, design
                                                      enhancements, and overall
                                                      improved user experience
                                                      of existing sites
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="educational-qualification">
                                              <div className="passing-year">
                                                <p>
                                                  <span>02.</span>April, 2022-
                                                  Continuing
                                                </p>
                                                <span />
                                              </div>
                                              <div className="education-dt">
                                                <h6>
                                                  Norland Tech of Industry
                                                </h6>
                                                <p className="position">
                                                  <span>Position:</span> UI/UX
                                                  Engineer ( Full-Time)
                                                </p>
                                                <div className="responsibility">
                                                  <h6>Responsibility:</h6>
                                                  <ul>
                                                    <li>
                                                      Creating high quality
                                                      landing pages optimized
                                                      for client website brands.
                                                    </li>
                                                    <li>
                                                      Creating e-commerce
                                                      interfaces, design
                                                      enhancements, and overall
                                                      improved user experience
                                                      of existing sites
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-lg-12">
                                          <div className="single-information-area">
                                            <div className="section-title">
                                              <h6>Special Skills</h6>
                                              <div className="dash" />
                                            </div>
                                            <div className="tag-area">
                                              <ul>
                                                <li>Web Development,</li>
                                                <li>UI/UX Designer,</li>
                                                <li>React Development.</li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-lg-12">
                                          <div className="single-information-area">
                                            <div className="section-title">
                                              <h6>Social Network</h6>
                                              <div className="dash" />
                                            </div>
                                            <div className="social-area">
                                              <ul>
                                                <li>
                                                  <a href="https://www.facebook.com/">
                                                    Facebook
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="https://twitter.com/">
                                                    Twitter
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="https://www.linkedin.com/">
                                                    Linkedin
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="https://www.pinterest.com/">
                                                    Pinterest
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="https://dribbble.com/">
                                                    Dribbble
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="https://www.behance.net/">
                                                    Behance
                                                  </a>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-lg-12">
                                          <div className="declaration-area">
                                            <h6>
                                              Declaration &amp; Authentication-
                                            </h6>
                                            <p>
                                              I do hereby declare that the
                                              information given above is true of
                                              my knowledge.
                                            </p>
                                          </div>
                                          <div className="gratitude-area">
                                            <span>Yours Faithful,</span>
                                            <h6>Jacoline Frankly</h6>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="modal-footer">
                                  <div className="button-groups">
                                    <ul>
                                      <li>
                                        <button className="primary-bg">
                                          <img
                                            src="/assets/images/icon/pdf2.svg"
                                            alt=""
                                          />{" "}
                                          Download PDF
                                        </button>
                                      </li>
                                      <li>
                                        <button>
                                          <img
                                            src="/assets/images/icon/shortlist2.svg"
                                            alt=""
                                          />{" "}
                                          Shortlist
                                        </button>
                                      </li>
                                      <li>
                                        <button className="red-bg">
                                          <img
                                            src="/assets/images/icon/reject2.svg"
                                            alt=""
                                          />{" "}
                                          reject
                                        </button>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
  )
}

export default ApplicantModal