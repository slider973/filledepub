import Link from "next/link";
import React from "react";

function Footer5() {
  return (
    <footer className="footer1 five">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-4 col-sm-6 mb--50 d-flex justify-content-sm-start justify-content-center">
            <div className="footer-widget">
              <div className="widget-title">
                <h5>About Company</h5>
              </div>
              <div className="menu-container">
                <ul>
                  <li>
                    <a href="contact.html">
                      Contact Us <i className="bx bx-up-arrow-alt" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Terms &amp; Condition <i className="bx bx-up-arrow-alt" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Privacy &amp; Policy <i className="bx bx-up-arrow-alt" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Candidate Listing <i className="bx bx-up-arrow-alt" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb--50 d-flex justify-content-md-center justify-content-sm-end justify-content-center">
            <div className="footer-widget">
              <div className="widget-title">
                <h5>For Candidate’s</h5>
              </div>
              <div className="menu-container">
                <ul>
                  <li>
                    <Link legacyBehavior href="/edit-profile">
                      <a>
                        Create Resume <i className="bx bx-up-arrow-alt" />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/category">
                      <a>
                        Browse Categories <i className="bx bx-up-arrow-alt" />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/candidates-dashboard/bookmark">
                      <a>
                        Save Jobs List <i className="bx bx-up-arrow-alt" />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/job-listing1">
                      <a>
                        Browse Jobs <i className="bx bx-up-arrow-alt" />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/candidates-dashboard/dashboard">
                      <a>
                        Candidate Dashboard <i className="bx bx-up-arrow-alt" />
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb--50 d-flex justify-content-lg-center justify-content-md-end justify-content-sm-start justify-content-center">
            <div className="footer-widget">
              <div className="widget-title">
                <h5>For Employer’s</h5>
              </div>
              <div className="menu-container">
                <ul>
                  <li>
                    <Link legacyBehavior href="/job-post">
                      <a>
                        Post A Job <i className="bx bx-up-arrow-alt" />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="#">
                      <a>
                        Browse Candidates <i className="bx bx-up-arrow-alt" />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/pricing-plan">
                      <a>
                        Job Packages <i className="bx bx-up-arrow-alt" />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/job-listing1">
                      <a>
                        Jobs Featured <i className="bx bx-up-arrow-alt" />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/company/company-dashboard">
                      <a>
                        Employer Dashboard <i className="bx bx-up-arrow-alt" />
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-lg-end justify-content-md-center justify-content-sm-end justify-content-center">
            <div className="footer-widget four">
              <div className="widget-title">
                <h5>Download App</h5>
              </div>
              <div className="app-list">
                <ul>
                  <li>
                    <Link legacyBehavior href="#">
                      <a>
                        <img src="assets/images/icon/apple-app.svg" alt="" />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="#">
                      <a>
                        <img src="assets/images/icon/google-play.svg" alt="" />
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-btm">
          <div className="footer-logo">
            <img src="assets/images/footer-logo2.svg" alt="" />
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 d-flex justify-content-lg-start justify-content-center">
              <div className="support">
                <div className="icon">
                  <img
                    src="assets/images/icon/footer5-support-icon.svg"
                    alt=""
                  />
                </div>
                <div className="content">
                  <h5>Support Line:</h5>
                  <a href="tel:+099-03573983465">+099-035 7398 3465</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-lg-end justify-content-center">
              <div className="footer-btm-menu">
                <ul>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms of Services</a>
                  </li>
                  <li>
                    <a href="https://www.google.com/maps/place/Egens+Lab/@23.8340712,90.3634979,17z/data=!3m1!4b1!4m5!3m4!1s0x3755c14c8682a473:0xa6c74743d52adb88!8m2!3d23.8340663!4d90.3656866">
                      Our Sitemap
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row border-top align-items-center">
            <div className="col-lg-6 d-flex  justify-content-lg-start justify-content-center">
              <div className="copyright-area">
                <p>
                  ©Copyright 2023 <a href="#">JOBES</a> | Design By{" "}
                  <a href="https://www.egenslab.com/">Egenslab</a>
                </p>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-lg-end justify-content-center">
              <div className="social-area">
                <h6>Follow JOBES:</h6>
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
        </div>
      </div>
    </footer>
  );
}

export default Footer5;
