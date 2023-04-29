import Link from "next/link";
import React, { useMemo } from "react";
import Slider from "react-slick";
function Home6TopRecruiters() {
  const sldier = useMemo(() => {
    return {
      rows: 2,
      dots: false,
      arrows: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 1500,
      speed: 2000,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1750,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1100,
          settings: {
            // arrows: false,
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 576,
          settings: {
            arrows: false,
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 350,
          settings: {
            arrows: false,
            slidesToShow: 1,
          },
        },
      ],
    };
  }, []);
  return (
    <div className="home6-top-recruiters pl-185 pr-185 mb-120">
      <div className="container-fluid">
        <div className="row mb-60">
          <div className="col-12 d-flex flex-wrap align-items-end justify-content-md-between justify-content-start gap-3">
            <div className="section-title2">
              <h2>
                <span>Top</span> Recruiters
              </h2>
              <p>
                To choose your trending job dream &amp; to make future bright.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="slick-wrapper">
            <Slider {...sldier} id="slick3">
              <div className="slide-item">
                <div className="recruters-card">
                  <div className="company-area">
                    <div className="logo">
                      <img
                        src="assets/images/bg/company-logo/company-01.png"
                        alt=""
                      />
                    </div>
                    <div className="name-location">
                      <h5>
                        <Link legacyBehavior href="/company-listing1">
                          <a>Germaine Company</a>
                        </Link>
                      </h5>
                      <p>
                        <img src="assets/images/icon/location.svg" alt="" />
                        New-York, USA
                      </p>
                    </div>
                  </div>
                  <div className="job-details-vacancies">
                    <div className="vacancies">
                      <p>
                        Open Job: <span>14</span>
                      </p>
                    </div>
                    <div className="apply-btn">
                      <Link legacyBehavior href="/company-details">
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
              <div className="slide-item">
                <div className="recruters-card">
                  <div className="company-area">
                    <div className="logo">
                      <img
                        src="assets/images/bg/company-logo/company-02.png"
                        alt=""
                      />
                    </div>
                    <div className="name-location">
                      <h5>
                        <Link legacyBehavior href="/company-listing1">
                          <a>UI.UX Company Ltd</a>
                        </Link>
                      </h5>
                      <p>
                        <img src="assets/images/icon/location.svg" alt="" />{" "}
                        Dhaka, Bangladesh
                      </p>
                    </div>
                  </div>
                  <div className="job-details-vacancies">
                    <div className="vacancies">
                      <p>
                        Open Job: <span>20</span>
                      </p>
                    </div>
                    <div className="apply-btn">
                      <Link legacyBehavior href="/company-details">
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
              <div className="slide-item">
                <div className="recruters-card">
                  <div className="company-area">
                    <div className="logo">
                      <img
                        src="assets/images/bg/company-logo/company-03.png"
                        alt=""
                      />
                    </div>
                    <div className="name-location">
                      <h5>
                        <Link legacyBehavior href="/company-listing1">
                          <a>Germain Group Ltd</a>
                        </Link>
                      </h5>
                      <p>
                        <img src="assets/images/icon/location.svg" alt="" />{" "}
                        New-York, USA
                      </p>
                    </div>
                  </div>
                  <div className="job-details-vacancies">
                    <div className="vacancies">
                      <p>
                        Open Job: <span>10</span>
                      </p>
                    </div>
                    <div className="apply-btn">
                      <Link legacyBehavior href="/company-details">
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
              <div className="slide-item">
                <div className="recruters-card">
                  <div className="company-area">
                    <div className="logo">
                      <img
                        src="assets/images/bg/company-logo/company-04.png"
                        alt=""
                      />
                    </div>
                    <div className="name-location">
                      <h5>
                        <Link legacyBehavior href="/company-listing1">
                          <a>Germain Group Ltd</a>
                        </Link>
                      </h5>
                      <p>
                        <img src="assets/images/icon/location.svg" alt="" />{" "}
                        Dhaka, Bangladesh
                      </p>
                    </div>
                  </div>
                  <div className="job-details-vacancies">
                    <div className="vacancies">
                      <p>
                        Open Job: <span>40</span>
                      </p>
                    </div>
                    <div className="apply-btn">
                      <Link legacyBehavior href="/company-details">
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
              <div className="slide-item">
                <div className="recruters-card">
                  <div className="company-area">
                    <div className="logo">
                      <img
                        src="assets/images/bg/company-logo/company-05.png"
                        alt=""
                      />
                    </div>
                    <div className="name-location">
                      <h5>
                        <Link legacyBehavior href="/company-listing1">
                          <a>Tech-Bath Company</a>
                        </Link>
                      </h5>
                      <p>
                        <img src="assets/images/icon/location.svg" alt="" />{" "}
                        Sylhet, Bangladesh
                      </p>
                    </div>
                  </div>
                  <div className="job-details-vacancies">
                    <div className="vacancies">
                      <p>
                        Open Job: <span>33</span>
                      </p>
                    </div>
                    <div className="apply-btn">
                      <Link legacyBehavior href="/company-details">
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
              <div className="slide-item">
                <div className="recruters-card">
                  <div className="company-area">
                    <div className="logo">
                      <img
                        src="assets/images/bg/company-logo/company-06.png"
                        alt=""
                      />
                    </div>
                    <div className="name-location">
                      <h5>
                        <Link legacyBehavior href="/company-listing1">
                          <a>Bistro.Hub Ltd</a>
                        </Link>
                      </h5>
                      <p>
                        <img src="assets/images/icon/location.svg" alt="" />{" "}
                        Chicago, Australia
                      </p>
                    </div>
                  </div>
                  <div className="job-details-vacancies">
                    <div className="vacancies">
                      <p>
                        Open Job: <span>23</span>
                      </p>
                    </div>
                    <div className="apply-btn">
                      <Link legacyBehavior href="/company-details">
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
              <div className="slide-item">
                <div className="recruters-card">
                  <div className="company-area">
                    <div className="logo">
                      <img
                        src="assets/images/bg/company-logo/company-01.png"
                        alt=""
                      />
                    </div>
                    <div className="name-location">
                      <h5>
                        <Link legacyBehavior href="/company-listing1">
                          <a>Germaine Company</a>
                        </Link>
                      </h5>
                      <p>
                        <img src="assets/images/icon/location.svg" alt="" />{" "}
                        New-York, USA
                      </p>
                    </div>
                  </div>
                  <div className="job-details-vacancies">
                    <div className="vacancies">
                      <p>
                        Open Job: <span>14</span>
                      </p>
                    </div>
                    <div className="apply-btn">
                      <Link legacyBehavior href="/company-details">
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
              <div className="slide-item">
                <div className="recruters-card">
                  <div className="company-area">
                    <div className="logo">
                      <img
                        src="assets/images/bg/company-logo/company-02.png"
                        alt=""
                      />
                    </div>
                    <div className="name-location">
                      <h5>
                        <Link legacyBehavior href="/company-listing1">
                          <a>UI.UX Company Ltd</a>
                        </Link>
                      </h5>
                      <p>
                        <img src="assets/images/icon/location.svg" alt="" />{" "}
                        Dhaka, Bangladesh
                      </p>
                    </div>
                  </div>
                  <div className="job-details-vacancies">
                    <div className="vacancies">
                      <p>
                        Open Job: <span>20</span>
                      </p>
                    </div>
                    <div className="apply-btn">
                      <Link legacyBehavior href="/company-details">
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
              <div className="slide-item">
                <div className="recruters-card">
                  <div className="company-area">
                    <div className="logo">
                      <img
                        src="assets/images/bg/company-logo/company-03.png"
                        alt=""
                      />
                    </div>
                    <div className="name-location">
                      <h5>
                        <Link legacyBehavior href="/company-listing1">
                          <a>Norland Company</a>
                        </Link>
                      </h5>
                      <p>
                        <img src="assets/images/icon/location.svg" alt="" />{" "}
                        New-York, USA
                      </p>
                    </div>
                  </div>
                  <div className="job-details-vacancies">
                    <div className="vacancies">
                      <p>
                        Open Job: <span>10</span>
                      </p>
                    </div>
                    <div className="apply-btn">
                      <Link legacyBehavior href="/company-details">
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
              <div className="slide-item">
                <div className="recruters-card">
                  <div className="company-area">
                    <div className="logo">
                      <img
                        src="assets/images/bg/company-logo/company-04.png"
                        alt=""
                      />
                    </div>
                    <div className="name-location">
                      <h5>
                        <Link legacyBehavior href="/company-listing1">
                          <a>Germain Group Ltd</a>
                        </Link>
                      </h5>
                      <p>
                        <img src="assets/images/icon/location.svg" alt="" />{" "}
                        Dhaka, Bangladesh
                      </p>
                    </div>
                  </div>
                  <div className="job-details-vacancies">
                    <div className="vacancies">
                      <p>
                        Open Job: <span>40</span>
                      </p>
                    </div>
                    <div className="apply-btn">
                      <Link legacyBehavior href="/company-details">
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
              <div className="slide-item">
                <div className="recruters-card">
                  <div className="company-area">
                    <div className="logo">
                      <img
                        src="assets/images/bg/company-logo/company-05.png"
                        alt=""
                      />
                    </div>
                    <div className="name-location">
                      <h5>
                        <Link legacyBehavior href="/company-listing1">
                          <a>Tech-Bath Company</a>
                        </Link>
                      </h5>
                      <p>
                        <img src="assets/images/icon/location.svg" alt="" />{" "}
                        Sylhet, Bangladesh
                      </p>
                    </div>
                  </div>
                  <div className="job-details-vacancies">
                    <div className="vacancies">
                      <p>
                        Open Job: <span>33</span>
                      </p>
                    </div>
                    <div className="apply-btn">
                      <Link legacyBehavior href="/company-details">
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
              <div className="slide-item">
                <div className="recruters-card">
                  <div className="company-area">
                    <div className="logo">
                      <img
                        src="assets/images/bg/company-logo/company-06.png"
                        alt=""
                      />
                    </div>
                    <div className="name-location">
                      <h5>
                        <Link legacyBehavior href="/company-listing1">
                          <a>Bistro.Hub Ltd</a>
                        </Link>
                      </h5>
                      <p>
                        <img src="assets/images/icon/location.svg" alt="" />{" "}
                        Chicago, Australia
                      </p>
                    </div>
                  </div>
                  <div className="job-details-vacancies">
                    <div className="vacancies">
                      <p>
                        Open Job: <span>23</span>
                      </p>
                    </div>
                    <div className="apply-btn">
                      <Link legacyBehavior href="/company-details">
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
              <div className="slide-item">
                <div className="recruters-card">
                  <div className="company-area">
                    <div className="logo">
                      <img
                        src="assets/images/bg/company-logo/company-01.png"
                        alt=""
                      />
                    </div>
                    <div className="name-location">
                      <h5>
                        <Link legacyBehavior href="/company-listing1">
                          <a>Germaine Company</a>
                        </Link>
                      </h5>
                      <p>
                        <img src="assets/images/icon/location.svg" alt="" />{" "}
                        New-York, USA
                      </p>
                    </div>
                  </div>
                  <div className="job-details-vacancies">
                    <div className="vacancies">
                      <p>
                        Open Job: <span>14</span>
                      </p>
                    </div>
                    <div className="apply-btn">
                      <Link legacyBehavior href="/company-details">
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
              <div className="slide-item">
                <div className="recruters-card">
                  <div className="company-area">
                    <div className="logo">
                      <img
                        src="assets/images/bg/company-logo/company-02.png"
                        alt=""
                      />
                    </div>
                    <div className="name-location">
                      <h5>
                        <Link legacyBehavior href="/company-listing1">
                          <a>UI.UX Company Ltd</a>
                        </Link>
                      </h5>
                      <p>
                        <img src="assets/images/icon/location.svg" alt="" />{" "}
                        Dhaka, Bangladesh
                      </p>
                    </div>
                  </div>
                  <div className="job-details-vacancies">
                    <div className="vacancies">
                      <p>
                        Open Job: <span>20</span>
                      </p>
                    </div>
                    <div className="apply-btn">
                      <Link legacyBehavior href="/company-details">
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
              <div className="slide-item">
                <div className="recruters-card">
                  <div className="company-area">
                    <div className="logo">
                      <img
                        src="assets/images/bg/company-logo/company-03.png"
                        alt=""
                      />
                    </div>
                    <div className="name-location">
                      <h5>
                        <Link legacyBehavior href="/company-listing1">
                          <a>Norland Company</a>
                        </Link>
                      </h5>
                      <p>
                        <img src="assets/images/icon/location.svg" alt="" />{" "}
                        New-York, USA
                      </p>
                    </div>
                  </div>
                  <div className="job-details-vacancies">
                    <div className="vacancies">
                      <p>
                        Open Job: <span>10</span>
                      </p>
                    </div>
                    <div className="apply-btn">
                      <Link legacyBehavior href="/company-details">
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
              <div className="slide-item">
                <div className="recruters-card">
                  <div className="company-area">
                    <div className="logo">
                      <img
                        src="assets/images/bg/company-logo/company-04.png"
                        alt=""
                      />
                    </div>
                    <div className="name-location">
                      <h5>
                        <Link legacyBehavior href="/company-listing1">
                          <a>Germain Group Ltd</a>
                        </Link>
                      </h5>
                      <p>
                        <img src="assets/images/icon/location.svg" alt="" />{" "}
                        Dhaka, Bangladesh
                      </p>
                    </div>
                  </div>
                  <div className="job-details-vacancies">
                    <div className="vacancies">
                      <p>
                        Open Job: <span>40</span>
                      </p>
                    </div>
                    <div className="apply-btn">
                      <Link legacyBehavior href="/company-details">
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
              <div className="slide-item">
                <div className="recruters-card">
                  <div className="company-area">
                    <div className="logo">
                      <img
                        src="assets/images/bg/company-logo/company-05.png"
                        alt=""
                      />
                    </div>
                    <div className="name-location">
                      <h5>
                        <Link legacyBehavior href="/company-listing1">
                          <a>Tech-Bath Company</a>
                        </Link>
                      </h5>
                      <p>
                        <img src="assets/images/icon/location.svg" alt="" />{" "}
                        Sylhet, Bangladesh
                      </p>
                    </div>
                  </div>
                  <div className="job-details-vacancies">
                    <div className="vacancies">
                      <p>
                        Open Job: <span>33</span>
                      </p>
                    </div>
                    <div className="apply-btn">
                      <Link legacyBehavior href="/company-details">
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
              <div className="slide-item">
                <div className="recruters-card">
                  <div className="company-area">
                    <div className="logo">
                      <img
                        src="assets/images/bg/company-logo/company-06.png"
                        alt=""
                      />
                    </div>
                    <div className="name-location">
                      <h5>
                        <Link legacyBehavior href="/company-listing1">
                          <a>Bistro.Hub Ltd</a>
                        </Link>
                      </h5>
                      <p>
                        <img src="assets/images/icon/location.svg" alt="" />{" "}
                        Chicago, Australia
                      </p>
                    </div>
                  </div>
                  <div className="job-details-vacancies">
                    <div className="vacancies">
                      <p>
                        Open Job: <span>23</span>
                      </p>
                    </div>
                    <div className="apply-btn">
                      <Link legacyBehavior href="/company-details">
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
              <div className="slide-item">
                <div className="recruters-card">
                  <div className="company-area">
                    <div className="logo">
                      <img
                        src="assets/images/bg/company-logo/company-01.png"
                        alt=""
                      />
                    </div>
                    <div className="name-location">
                      <h5>
                        <Link legacyBehavior href="/company-listing1">
                          <a>Germaine Company</a>
                        </Link>
                      </h5>
                      <p>
                        <img src="assets/images/icon/location.svg" alt="" />{" "}
                        New-York, USA
                      </p>
                    </div>
                  </div>
                  <div className="job-details-vacancies">
                    <div className="vacancies">
                      <p>
                        Open Job: <span>14</span>
                      </p>
                    </div>
                    <div className="apply-btn">
                      <Link legacyBehavior href="/company-details">
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
              <div className="slide-item">
                <div className="recruters-card">
                  <div className="company-area">
                    <div className="logo">
                      <img
                        src="assets/images/bg/company-logo/company-02.png"
                        alt=""
                      />
                    </div>
                    <div className="name-location">
                      <h5>
                        <Link legacyBehavior href="/company-listing1">
                          <a>UI.UX Company Ltd</a>
                        </Link>
                      </h5>
                      <p>
                        <img src="assets/images/icon/location.svg" alt="" />{" "}
                        Dhaka, Bangladesh
                      </p>
                    </div>
                  </div>
                  <div className="job-details-vacancies">
                    <div className="vacancies">
                      <p>
                        Open Job: <span>20</span>
                      </p>
                    </div>
                    <div className="apply-btn">
                      <Link legacyBehavior href="/company-details">
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
              <div className="slide-item">
                <div className="recruters-card">
                  <div className="company-area">
                    <div className="logo">
                      <img
                        src="assets/images/bg/company-logo/company-03.png"
                        alt=""
                      />
                    </div>
                    <div className="name-location">
                      <h5>
                        <Link legacyBehavior href="/company-listing1">
                          <a>Norland Company</a>
                        </Link>
                      </h5>
                      <p>
                        <img src="assets/images/icon/location.svg" alt="" />{" "}
                        New-York, USA
                      </p>
                    </div>
                  </div>
                  <div className="job-details-vacancies">
                    <div className="vacancies">
                      <p>
                        Open Job: <span>10</span>
                      </p>
                    </div>
                    <div className="apply-btn">
                      <Link legacyBehavior href="/company-details">
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
              <div className="slide-item">
                <div className="recruters-card">
                  <div className="company-area">
                    <div className="logo">
                      <img
                        src="assets/images/bg/company-logo/company-04.png"
                        alt=""
                      />
                    </div>
                    <div className="name-location">
                      <h5>
                        <Link legacyBehavior href="/company-listing1">
                          <a>Germain Group Ltd</a>
                        </Link>
                      </h5>
                      <p>
                        <img src="assets/images/icon/location.svg" alt="" />{" "}
                        Dhaka, Bangladesh
                      </p>
                    </div>
                  </div>
                  <div className="job-details-vacancies">
                    <div className="vacancies">
                      <p>
                        Open Job: <span>40</span>
                      </p>
                    </div>
                    <div className="apply-btn">
                      <Link legacyBehavior href="/company-details">
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
              <div className="slide-item">
                <div className="recruters-card">
                  <div className="company-area">
                    <div className="logo">
                      <img
                        src="assets/images/bg/company-logo/company-05.png"
                        alt=""
                      />
                    </div>
                    <div className="name-location">
                      <h5>
                        <Link legacyBehavior href="/company-listing1">
                          <a>Tech-Bath Company</a>
                        </Link>
                      </h5>
                      <p>
                        <img src="assets/images/icon/location.svg" alt="" />{" "}
                        Sylhet, Bangladesh
                      </p>
                    </div>
                  </div>
                  <div className="job-details-vacancies">
                    <div className="vacancies">
                      <p>
                        Open Job: <span>33</span>
                      </p>
                    </div>
                    <div className="apply-btn">
                      <Link legacyBehavior href="/company-details">
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
              <div className="slide-item">
                <div className="recruters-card">
                  <div className="company-area">
                    <div className="logo">
                      <img
                        src="assets/images/bg/company-logo/company-06.png"
                        alt=""
                      />
                    </div>
                    <div className="name-location">
                      <h5>
                        <Link legacyBehavior href="/company-listing1">
                          <a>Bistro.Hub Ltd</a>
                        </Link>
                      </h5>
                      <p>
                        <img src="assets/images/icon/location.svg" alt="" />{" "}
                        Chicago, Australia
                      </p>
                    </div>
                  </div>
                  <div className="job-details-vacancies">
                    <div className="vacancies">
                      <p>
                        Open Job: <span>23</span>
                      </p>
                    </div>
                    <div className="apply-btn">
                      <Link legacyBehavior href="/company-details">
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
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home6TopRecruiters;
