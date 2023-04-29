import Link from "next/link";
import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../layout/Layout";

function CompanyDetails() {
  return (
    <Layout>
      <Breadcrumb pageName="Company Details" pageTitle="Company Details" />
      <div className="company-details-area pt-120 mb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="post-thumb">
                <img
                  className="img-fluid"
                  src="assets/images/bg/blog-dt-img.png"
                  alt=""
                />
                <div className="company-logo">
                  <img src="assets/images/bg/blog-dt-logo.png" alt="" />
                </div>
              </div>
              <div className="company-area">
                <div className="company-info">
                  <h4>Elite Hangstroman</h4>
                  <ul>
                    <li>
                      <img src="assets/images/icon/map-2.svg" alt="" /> Dhaka,
                      Bangladesh
                    </li>
                    <li>
                      <img src="assets/images/icon/category-2.svg" alt="" />
                      <span className="title">Category: </span> Software Agency
                    </li>
                  </ul>
                </div>
                <div className="company-contact">
                  <div className="websitet-link">
                    <p>
                      <img src="assets/images/icon/web-5.svg" alt="" />
                      Website Link:
                    </p>
                    <a href="#">www.example24.com</a>
                  </div>
                  <div className="social-area">
                    <p>
                      <img src="assets/images/icon/share-icon.svg" alt="" />
                      Follow Company:
                    </p>
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/">
                          <i className="bx bxl-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/">
                          <i className="bx bxl-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/">
                          <i className="bx bxl-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/">
                          <i className="bx bxl-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8">
                  <div className="company-details-content">
                    <h5>About Company</h5>
                    <p>
                      A software company is a business that develops and sells
                      computer software. Some software companies specialize in a
                      particular type of software, such as operating systems,
                      productivity tools, or games, while others develop a range
                      of software products. Many software companies also offer
                      services such as custom software development, consulting,
                      and technical support to their customers. The size and
                      scope of software companies can vary greatly, from small
                      startups to large multinational corporations.
                    </p>
                    <br />
                    <br />
                    <h5>Working Area</h5>
                    <div className="row pt-20">
                      <div className="col-sm-6 mb-50">
                        <div className="working-process">
                          <div className="icon">
                            <img
                              src="assets/images/icon/creative-design.svg"
                              alt=""
                            />
                          </div>
                          <div className="work-content">
                            <div className="sl">01</div>
                            <h6>Creative Design</h6>
                            <p>
                              Creative design is a process that involves
                              creating.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 mb-50">
                        <div className="working-process">
                          <div className="icon">
                            <img
                              src="assets/images/icon/react-next.svg"
                              alt=""
                            />
                          </div>
                          <div className="work-content">
                            <div className="sl">02</div>
                            <h6>React Next.JS</h6>
                            <p>
                              Creative design is a process that involves
                              creating.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 mb-50">
                        <div className="working-process">
                          <div className="icon">
                            <img src="assets/images/icon/html-tem.svg" alt="" />
                          </div>
                          <div className="work-content">
                            <div className="sl">03</div>
                            <h6>HTML Template</h6>
                            <p>
                              Creative design is a process that involves
                              creating.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 mb-50">
                        <div className="working-process">
                          <div className="icon">
                            <img
                              src="assets/images/icon/wordpress.svg"
                              alt=""
                            />
                          </div>
                          <div className="work-content">
                            <div className="sl">04</div>
                            <h6>WordPress</h6>
                            <p>
                              Creative design is a process that involves
                              creating.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="company-dt-sb mb-60">
                    <div className="company-overview-area mb-50">
                      <h5>Company Overview:</h5>
                      <ul>
                        <li>
                          <span>Company Name:</span> Elite Hangstroman.
                        </li>
                        <li>
                          <span>Category:</span> Software Agency.
                        </li>
                        <li>
                          <span>Location:</span> Dhaka, Bangladesh.
                        </li>
                        <li>
                          <span>Member Since:</span> 03 April, 1982.
                        </li>
                        <li>
                          <span>Company size:</span> 40 People.
                        </li>
                        <li>
                          <span>Completed Job:</span> 08.
                        </li>
                        <li>
                          <span>Last Job Posted:</span> 06 January, 2023.
                        </li>
                      </ul>
                    </div>
                    <Link legacyBehavior href="/job-listing1">
                      <a className="primry-btn-2 lg-btn">Job Available 23</a>
                    </Link>
                    <a
                      className="primry-btn-1 lg-btn"
                      href="https://www.google.com/maps/place/Egens+Lab/@23.8340712,90.3634979,17z/data=!3m1!4b1!4m5!3m4!1s0x3755c14c8682a473:0xa6c74743d52adb88!8m2!3d23.8340663!4d90.3656866"
                    >
                      Go Our Site Map
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h4>Latest Jobs:</h4>
              </div>
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
                                Senior Receptionist
                              </Link>
                            </h5>
                            <p>
                              <Link legacyBehavior href="/company-details">
                                Medico.co Ltd
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
                              <span className="title">Experience:</span> 1.5-2
                              Years
                            </p>
                          </li>
                          <li>
                            <p>
                              <span className="title">Published:</span> 05
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
                    <p>
                      <img src="assets/images/icon/company-4.svg" alt="" /> Job
                      Applied: <span> 07 Person</span>
                    </p>
                    <div className="job-type">
                      <span className="light-yellow">Full Time</span>
                      <span className="light-purple">Part Time</span>
                      <span className="light-blue">Remote</span>
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
                                <a> Senior PHP Developer</a>
                              </Link>
                            </h5>
                            <p>
                              <Link legacyBehavior href="/company-details">
                                <a> Marko Land Conpany</a>
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
                              <span className="title">Experience:</span> 3-4
                              Years
                            </p>
                          </li>
                          <li>
                            <p>
                              <span className="title">Published:</span> 08
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
                    <p>
                      <img src="assets/images/icon/company-4.svg" alt="" /> Job
                      Applied: <span> 05 Person</span>
                    </p>
                    <div className="job-type">
                      <span className="light-yellow">Full Time</span>
                      <span className="light-purple">Part Time</span>
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
                              <span className="title">Experience:</span> 1.5-2
                              Years
                            </p>
                          </li>
                          <li>
                            <p>
                              <span className="title">Published:</span> 08
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
                    <p>
                      <img src="assets/images/icon/company-4.svg" alt="" /> Job
                      Applied: <span> 06 Person</span>
                    </p>
                    <div className="job-type">
                      <span className="light-purple">Part Time</span>
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
              <div className="col-lg-12 mb-60">
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
                              <span className="title">Experience:</span> 2.5-5
                              Years
                            </p>
                          </li>
                          <li>
                            <p>
                              <span className="title">Published:</span> 08
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
                    <p>
                      <img src="assets/images/icon/company-4.svg" alt="" /> Job
                      Applied: <span> 08 Person</span>
                    </p>
                    <div className="job-type">
                      <span className="light-yellow">Full Time</span>
                      <span className="light-purple">Part Time</span>
                      <span className="light-blue">Remote</span>
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
    </Layout>
  );
}

export default CompanyDetails;
