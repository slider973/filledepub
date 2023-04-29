import Link from "next/link";
import React, { useMemo } from "react";
import Slider from "react-slick";
function Home6Category() {
  const slicSlider = useMemo(() => {
    return {
      rows: 2,
      dots: false,
      arrows: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 1500,
      speed: 2000,
      slidesToShow: 6,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 1100,
          settings: {
            // arrows: false,
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 2,
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
    <div
      className="home6-category-area ml-185 mr-185 pt-120 mb-120"
      id="home6-category-area"
    >
      <div className="container-fluid">
        <div className="row mb-60">
          <div className="col-12 d-flex flex-wrap align-items-end justify-content-md-between justify-content-start gap-3">
            <div className="section-title2">
              <h2>
                Popular <span>Category</span> List
              </h2>
              <p>
                To choose your trending job dream &amp; to make future bright.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="slick-wrapper">
            <Slider {...slicSlider} id="slick2">
              <div className="slide-item">
                <div className="home6-category-card">
                  <div className="icon-wrap">
                    <div className="icon-left-vector">
                      <svg
                        width={13}
                        height={52}
                        viewBox="0 0 13 52"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.5195 1C-2.41493 14.8071 -2.41493 37.1929 11.5195 51"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <div className="icon">
                      <img src="assets/images/icon/technology-06.svg" alt="" />
                    </div>
                    <div className="icon-right-vector">
                      <svg
                        width={13}
                        height={52}
                        viewBox="0 0 13 52"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.48148 1C15.4159 14.8071 15.4159 37.1929 1.48148 51"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="category-content">
                    <h5>
                      <Link legacyBehavior href="/job-listing1">
                        <a>Technology</a>
                      </Link>
                    </h5>
                    <p>14 Jobs Available</p>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="home6-category-card">
                  <div className="icon-wrap">
                    <div className="icon-left-vector">
                      <svg
                        width={13}
                        height={52}
                        viewBox="0 0 13 52"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.5195 1C-2.41493 14.8071 -2.41493 37.1929 11.5195 51"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <div className="icon">
                      <img
                        src="assets/images/icon/account-finance-06.svg"
                        alt=""
                      />
                    </div>
                    <div className="icon-right-vector">
                      <svg
                        width={13}
                        height={52}
                        viewBox="0 0 13 52"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.48148 1C15.4159 14.8071 15.4159 37.1929 1.48148 51"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="category-content">
                    <h5>
                      <Link legacyBehavior href="/job-listing1">
                        <a>Account &amp; Finance</a>
                      </Link>
                    </h5>
                    <p>20 Jobs Available</p>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="home6-category-card">
                  <div className="icon-wrap">
                    <div className="icon-left-vector">
                      <svg
                        width={13}
                        height={52}
                        viewBox="0 0 13 52"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.5195 1C-2.41493 14.8071 -2.41493 37.1929 11.5195 51"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <div className="icon">
                      <img
                        src="assets/images/icon/medical-nurse-06.svg"
                        alt=""
                      />
                    </div>
                    <div className="icon-right-vector">
                      <svg
                        width={13}
                        height={52}
                        viewBox="0 0 13 52"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.48148 1C15.4159 14.8071 15.4159 37.1929 1.48148 51"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="category-content">
                    <h5>
                      <Link legacyBehavior href="/job-listing1">
                        <a>Medical &amp; Nurse </a>
                      </Link>
                    </h5>
                    <p>14 Jobs Available</p>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="home6-category-card">
                  <div className="icon-wrap">
                    <div className="icon-left-vector">
                      <svg
                        width={13}
                        height={52}
                        viewBox="0 0 13 52"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.5195 1C-2.41493 14.8071 -2.41493 37.1929 11.5195 51"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <div className="icon">
                      <img
                        src="assets/images/icon/architecture-06.svg"
                        alt=""
                      />
                    </div>
                    <div className="icon-right-vector">
                      <svg
                        width={13}
                        height={52}
                        viewBox="0 0 13 52"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.48148 1C15.4159 14.8071 15.4159 37.1929 1.48148 51"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="category-content">
                    <h5>
                      <Link legacyBehavior href="/job-listing1">
                        <a>Architecture</a>
                      </Link>
                    </h5>
                    <p>10 Jobs Available</p>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="home6-category-card">
                  <div className="icon-wrap">
                    <div className="icon-left-vector">
                      <svg
                        width={13}
                        height={52}
                        viewBox="0 0 13 52"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.5195 1C-2.41493 14.8071 -2.41493 37.1929 11.5195 51"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <div className="icon">
                      <img src="assets/images/icon/devlopment-06.svg" alt="" />
                    </div>
                    <div className="icon-right-vector">
                      <svg
                        width={13}
                        height={52}
                        viewBox="0 0 13 52"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.48148 1C15.4159 14.8071 15.4159 37.1929 1.48148 51"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="category-content">
                    <h5>
                      <Link legacyBehavior href="/job-listing1">
                        <a>Development</a>
                      </Link>
                    </h5>
                    <p>55 Jobs Available</p>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="home6-category-card">
                  <div className="icon-wrap">
                    <div className="icon-left-vector">
                      <svg
                        width={13}
                        height={52}
                        viewBox="0 0 13 52"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.5195 1C-2.41493 14.8071 -2.41493 37.1929 11.5195 51"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <div className="icon">
                      <img src="assets/images/icon/non-profit-06.svg" alt="" />
                    </div>
                    <div className="icon-right-vector">
                      <svg
                        width={13}
                        height={52}
                        viewBox="0 0 13 52"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.48148 1C15.4159 14.8071 15.4159 37.1929 1.48148 51"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="category-content">
                    <h5>
                      <Link legacyBehavior href="/job-listing1">
                        <a>Non-Profit</a>
                      </Link>
                    </h5>
                    <p>14 Jobs Available</p>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="home6-category-card">
                  <div className="icon-wrap">
                    <div className="icon-left-vector">
                      <svg
                        width={13}
                        height={52}
                        viewBox="0 0 13 52"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.5195 1C-2.41493 14.8071 -2.41493 37.1929 11.5195 51"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <div className="icon">
                      <img
                        src="assets/images/icon/marketing-sales-06.svg"
                        alt=""
                      />
                    </div>
                    <div className="icon-right-vector">
                      <svg
                        width={13}
                        height={52}
                        viewBox="0 0 13 52"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.48148 1C15.4159 14.8071 15.4159 37.1929 1.48148 51"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="category-content">
                    <h5>
                      <Link legacyBehavior href="/job-listing1">
                        <a>Marketing &amp; Sales</a>
                      </Link>
                    </h5>
                    <p>20 Jobs Available</p>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="home6-category-card">
                  <div className="icon-wrap">
                    <div className="icon-left-vector">
                      <svg
                        width={13}
                        height={52}
                        viewBox="0 0 13 52"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.5195 1C-2.41493 14.8071 -2.41493 37.1929 11.5195 51"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <div className="icon">
                      <img
                        src="assets/images/icon/creative-design-06.svg"
                        alt=""
                      />
                    </div>
                    <div className="icon-right-vector">
                      <svg
                        width={13}
                        height={52}
                        viewBox="0 0 13 52"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.48148 1C15.4159 14.8071 15.4159 37.1929 1.48148 51"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="category-content">
                    <h5>
                      <Link legacyBehavior href="/job-listing1">
                        <a>Craetive Design</a>
                      </Link>
                    </h5>
                    <p>44 Jobs Available</p>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="home6-category-card">
                  <div className="icon-wrap">
                    <div className="icon-left-vector">
                      <svg
                        width={13}
                        height={52}
                        viewBox="0 0 13 52"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.5195 1C-2.41493 14.8071 -2.41493 37.1929 11.5195 51"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <div className="icon">
                      <img src="assets/images/icon/transport-06.svg" alt="" />
                    </div>
                    <div className="icon-right-vector">
                      <svg
                        width={13}
                        height={52}
                        viewBox="0 0 13 52"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.48148 1C15.4159 14.8071 15.4159 37.1929 1.48148 51"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="category-content">
                    <h5>
                      <Link legacyBehavior href="/job-listing1">
                        <a>Transport</a>
                      </Link>
                    </h5>
                    <p>50 Jobs Available</p>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="home6-category-card">
                  <div className="icon-wrap">
                    <div className="icon-left-vector">
                      <svg
                        width={13}
                        height={52}
                        viewBox="0 0 13 52"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.5195 1C-2.41493 14.8071 -2.41493 37.1929 11.5195 51"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <div className="icon">
                      <img src="assets/images/icon/engineering-06.svg" alt="" />
                    </div>
                    <div className="icon-right-vector">
                      <svg
                        width={13}
                        height={52}
                        viewBox="0 0 13 52"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.48148 1C15.4159 14.8071 15.4159 37.1929 1.48148 51"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="category-content">
                    <h5>
                      <Link legacyBehavior href="/job-listing1">
                        <a>Engineering</a>
                      </Link>
                    </h5>
                    <p>55 Jobs Available</p>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="home6-category-card">
                  <div className="icon-wrap">
                    <div className="icon-left-vector">
                      <svg
                        width={13}
                        height={52}
                        viewBox="0 0 13 52"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.5195 1C-2.41493 14.8071 -2.41493 37.1929 11.5195 51"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <div className="icon">
                      <img
                        src="assets/images/icon/receptionist-06.svg"
                        alt=""
                      />
                    </div>
                    <div className="icon-right-vector">
                      <svg
                        width={13}
                        height={52}
                        viewBox="0 0 13 52"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.48148 1C15.4159 14.8071 15.4159 37.1929 1.48148 51"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="category-content">
                    <h5>
                      <Link legacyBehavior href="/job-listing1">
                        <a>Receptionist</a>
                      </Link>
                    </h5>
                    <p>55 Jobs Available</p>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="home6-category-card">
                  <div className="icon-wrap">
                    <div className="icon-left-vector">
                      <svg
                        width={13}
                        height={52}
                        viewBox="0 0 13 52"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.5195 1C-2.41493 14.8071 -2.41493 37.1929 11.5195 51"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <div className="icon">
                      <img src="assets/images/icon/agriculture-06.svg" alt="" />
                    </div>
                    <div className="icon-right-vector">
                      <svg
                        width={13}
                        height={52}
                        viewBox="0 0 13 52"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.48148 1C15.4159 14.8071 15.4159 37.1929 1.48148 51"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="category-content">
                    <h5>
                      <Link legacyBehavior href="/job-listing1">
                        <a>Agriculture</a>
                      </Link>
                    </h5>
                    <p>14 Jobs Available</p>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="home6-category-card">
                  <div className="icon-wrap">
                    <div className="icon-left-vector">
                      <svg
                        width={13}
                        height={52}
                        viewBox="0 0 13 52"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.5195 1C-2.41493 14.8071 -2.41493 37.1929 11.5195 51"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <div className="icon">
                      <img src="assets/images/icon/technology-06.svg" alt="" />
                    </div>
                    <div className="icon-right-vector">
                      <svg
                        width={13}
                        height={52}
                        viewBox="0 0 13 52"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.48148 1C15.4159 14.8071 15.4159 37.1929 1.48148 51"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="category-content">
                    <h5>
                      <Link legacyBehavior href="/job-listing1">
                        <a>Technology</a>
                      </Link>
                    </h5>
                    <p>14 Jobs Available</p>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="home6-category-card">
                  <div className="icon-wrap">
                    <div className="icon-left-vector">
                      <svg
                        width={13}
                        height={52}
                        viewBox="0 0 13 52"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.5195 1C-2.41493 14.8071 -2.41493 37.1929 11.5195 51"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <div className="icon">
                      <img
                        src="assets/images/icon/account-finance-06.svg"
                        alt=""
                      />
                    </div>
                    <div className="icon-right-vector">
                      <svg
                        width={13}
                        height={52}
                        viewBox="0 0 13 52"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.48148 1C15.4159 14.8071 15.4159 37.1929 1.48148 51"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="category-content">
                    <h5>
                      <Link legacyBehavior href="/job-listing1">
                        <a>Account &amp; Finance</a>
                      </Link>
                    </h5>
                    <p>20 Jobs Available</p>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="home6-category-card">
                  <div className="icon-wrap">
                    <div className="icon-left-vector">
                      <svg
                        width={13}
                        height={52}
                        viewBox="0 0 13 52"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.5195 1C-2.41493 14.8071 -2.41493 37.1929 11.5195 51"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <div className="icon">
                      <img
                        src="assets/images/icon/medical-nurse-06.svg"
                        alt=""
                      />
                    </div>
                    <div className="icon-right-vector">
                      <svg
                        width={13}
                        height={52}
                        viewBox="0 0 13 52"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.48148 1C15.4159 14.8071 15.4159 37.1929 1.48148 51"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="category-content">
                    <h5>
                      <Link legacyBehavior href="/job-listing1">
                        <a>Medical &amp; Nurse</a>
                      </Link>
                    </h5>
                    <p>14 Jobs Available</p>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="home6-category-card">
                  <div className="icon-wrap">
                    <div className="icon-left-vector">
                      <svg
                        width={13}
                        height={52}
                        viewBox="0 0 13 52"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.5195 1C-2.41493 14.8071 -2.41493 37.1929 11.5195 51"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <div className="icon">
                      <img
                        src="assets/images/icon/architecture-06.svg"
                        alt=""
                      />
                    </div>
                    <div className="icon-right-vector">
                      <svg
                        width={13}
                        height={52}
                        viewBox="0 0 13 52"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.48148 1C15.4159 14.8071 15.4159 37.1929 1.48148 51"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="category-content">
                    <h5>
                      <Link legacyBehavior href="/job-listing1">
                        <a>Architecture</a>
                      </Link>
                    </h5>
                    <p>10 Jobs Available</p>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="home6-category-card">
                  <div className="icon-wrap">
                    <div className="icon-left-vector">
                      <svg
                        width={13}
                        height={52}
                        viewBox="0 0 13 52"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.5195 1C-2.41493 14.8071 -2.41493 37.1929 11.5195 51"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <div className="icon">
                      <img src="assets/images/icon/devlopment-06.svg" alt="" />
                    </div>
                    <div className="icon-right-vector">
                      <svg
                        width={13}
                        height={52}
                        viewBox="0 0 13 52"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.48148 1C15.4159 14.8071 15.4159 37.1929 1.48148 51"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="category-content">
                    <h5>
                      <Link legacyBehavior href="/job-listing1">
                        <a>Development</a>
                      </Link>
                    </h5>
                    <p>55 Jobs Available</p>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="home6-category-card">
                  <div className="icon-wrap">
                    <div className="icon-left-vector">
                      <svg
                        width={13}
                        height={52}
                        viewBox="0 0 13 52"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.5195 1C-2.41493 14.8071 -2.41493 37.1929 11.5195 51"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <div className="icon">
                      <img src="assets/images/icon/non-profit-06.svg" alt="" />
                    </div>
                    <div className="icon-right-vector">
                      <svg
                        width={13}
                        height={52}
                        viewBox="0 0 13 52"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.48148 1C15.4159 14.8071 15.4159 37.1929 1.48148 51"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="category-content">
                    <h5>
                      <Link legacyBehavior href="/job-listing1">
                        <a>Non-Profit</a>
                      </Link>
                    </h5>
                    <p>14 Jobs Available</p>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="home6-category-card">
                  <div className="icon-wrap">
                    <div className="icon-left-vector">
                      <svg
                        width={13}
                        height={52}
                        viewBox="0 0 13 52"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.5195 1C-2.41493 14.8071 -2.41493 37.1929 11.5195 51"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <div className="icon">
                      <img
                        src="assets/images/icon/marketing-sales-06.svg"
                        alt=""
                      />
                    </div>
                    <div className="icon-right-vector">
                      <svg
                        width={13}
                        height={52}
                        viewBox="0 0 13 52"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.48148 1C15.4159 14.8071 15.4159 37.1929 1.48148 51"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="category-content">
                    <h5>
                      <Link legacyBehavior href="/job-listing1">
                        <a>Marketing &amp; Sales</a>
                      </Link>
                    </h5>
                    <p>20 Jobs Available</p>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="home6-category-card">
                  <div className="icon-wrap">
                    <div className="icon-left-vector">
                      <svg
                        width={13}
                        height={52}
                        viewBox="0 0 13 52"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.5195 1C-2.41493 14.8071 -2.41493 37.1929 11.5195 51"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <div className="icon">
                      <img
                        src="assets/images/icon/creative-design-06.svg"
                        alt=""
                      />
                    </div>
                    <div className="icon-right-vector">
                      <svg
                        width={13}
                        height={52}
                        viewBox="0 0 13 52"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.48148 1C15.4159 14.8071 15.4159 37.1929 1.48148 51"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="category-content">
                    <h5>
                      <Link legacyBehavior href="/job-listing1">
                        <a>Craetive Design</a>
                      </Link>
                    </h5>
                    <p>44 Jobs Available</p>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="home6-category-card">
                  <div className="icon-wrap">
                    <div className="icon-left-vector">
                      <svg
                        width={13}
                        height={52}
                        viewBox="0 0 13 52"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.5195 1C-2.41493 14.8071 -2.41493 37.1929 11.5195 51"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <div className="icon">
                      <img src="assets/images/icon/transport-06.svg" alt="" />
                    </div>
                    <div className="icon-right-vector">
                      <svg
                        width={13}
                        height={52}
                        viewBox="0 0 13 52"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.48148 1C15.4159 14.8071 15.4159 37.1929 1.48148 51"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="category-content">
                    <h5>
                      <Link legacyBehavior href="/job-listing1">
                        <a>Transport</a>
                      </Link>
                    </h5>
                    <p>50 Jobs Available</p>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="home6-category-card">
                  <div className="icon-wrap">
                    <div className="icon-left-vector">
                      <svg
                        width={13}
                        height={52}
                        viewBox="0 0 13 52"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.5195 1C-2.41493 14.8071 -2.41493 37.1929 11.5195 51"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <div className="icon">
                      <img src="assets/images/icon/engineering-06.svg" alt="" />
                    </div>
                    <div className="icon-right-vector">
                      <svg
                        width={13}
                        height={52}
                        viewBox="0 0 13 52"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.48148 1C15.4159 14.8071 15.4159 37.1929 1.48148 51"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="category-content">
                    <h5>
                      <Link legacyBehavior href="/job-listing1">
                        <a>Engineering</a>
                      </Link>
                    </h5>
                    <p>55 Jobs Available</p>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="home6-category-card">
                  <div className="icon-wrap">
                    <div className="icon-left-vector">
                      <svg
                        width={13}
                        height={52}
                        viewBox="0 0 13 52"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.5195 1C-2.41493 14.8071 -2.41493 37.1929 11.5195 51"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <div className="icon">
                      <img
                        src="assets/images/icon/receptionist-06.svg"
                        alt=""
                      />
                    </div>
                    <div className="icon-right-vector">
                      <svg
                        width={13}
                        height={52}
                        viewBox="0 0 13 52"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.48148 1C15.4159 14.8071 15.4159 37.1929 1.48148 51"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="category-content">
                    <h5>
                      <Link legacyBehavior href="/job-listing1">
                        <a>Receptionist</a>
                      </Link>
                    </h5>
                    <p>55 Jobs Available</p>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="home6-category-card">
                  <div className="icon-wrap">
                    <div className="icon-left-vector">
                      <svg
                        width={13}
                        height={52}
                        viewBox="0 0 13 52"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.5195 1C-2.41493 14.8071 -2.41493 37.1929 11.5195 51"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <div className="icon">
                      <img src="assets/images/icon/agriculture-06.svg" alt="" />
                    </div>
                    <div className="icon-right-vector">
                      <svg
                        width={13}
                        height={52}
                        viewBox="0 0 13 52"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.48148 1C15.4159 14.8071 15.4159 37.1929 1.48148 51"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="category-content">
                    <h5>
                      <Link legacyBehavior href="/job-listing1">
                        <a>Agriculture</a>
                      </Link>
                    </h5>
                    <p>14 Jobs Available</p>
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

export default Home6Category;
