import Link from "next/link";
import React, { useMemo } from "react";

import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Autoplay]);
function FeaturedJobs() {
  const slider = useMemo(() => {
    return {
      slidesPerView: "auto",
      spaceBetween: 20,
      loop: true,
      speed: 1500,
      autoplay: {
        delay: 2000,
      },
      navigation: {
        nextEl: ".next-3",
        prevEl: ".prev-3",
      },
      breakpoints: {
        280: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        480: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1.2,
        },
        992: {
          slidesPerView: 1.5,
        },
        1200: {
          slidesPerView: 2,
        },
        1400: {
          slidesPerView: 2.5,
        },
        1600: {
          slidesPerView: 2.5,
        },
      },
    };
  }, []);
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="featured-jobs-area">
          <div className="section-title">
            <h4>Featured Jobs:</h4>
          </div>
        </div>
      </div>
      <Swiper {...slider} className="swiper feature-slider2">
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide">
            <div className="feature-card2">
              <div className="company-area">
                <span />
                <div className="logo">
                  <img
                    src="/assets/images/bg/company-logo/company-02.png"
                    alt=""
                  />
                </div>
                <div className="company-details">
                  <div className="name-location">
                    <h5>
                      <Link legacyBehavior href="/job-details">
                        <a>UI/UX Engineer</a>
                      </Link>
                    </h5>
                    <ul>
                      <li>
                        <Link legacyBehavior href="/company-details">
                          <a>Norland Company</a>
                        </Link>
                      </li>
                      <li className="verified">
                        <img src="/assets/images/icon/verified.svg" alt="" />{" "}
                        Verified Company
                      </li>
                    </ul>
                  </div>
                  <div className="bookmark">
                    <i className="bi bi-bookmark-fill" />
                  </div>
                </div>
              </div>
              <div className="job-discription">
                <ul className="one">
                  <li>
                    <p>
                      <span className="title">Location:</span> Chicago,
                      Australia
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="title">Salary:</span> $80-$90 /{" "}
                      <span className="time">Per Hour</span>
                    </p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <p>
                      <span className="title">Experience:</span> 2-3 Years
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="title">Deadline:</span>
                      <span className="time"> 3 February, 2023</span>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="job-type-apply">
                <div className="apply-btn">
                  <Link legacyBehavior href="/job-details">
                    <a>
                      <span>
                        <img
                          src="/assets/images/icon/apply-ellipse.svg"
                          alt=""
                        />
                      </span>
                      Apply Now
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="feature-card2">
              <div className="company-area">
                <span />
                <div className="logo">
                  <img
                    src="/assets/images/bg/company-logo/company-03.png"
                    alt=""
                  />
                </div>
                <div className="company-details">
                  <div className="name-location">
                    <h5>
                      <Link legacyBehavior href="/job-details">
                        <a>React JS Developer</a>
                      </Link>
                    </h5>
                    <ul>
                      <li>
                        <Link legacyBehavior href="/company-details">
                          <a>UX.UI Company</a>
                        </Link>
                      </li>
                      <li className="verified">
                        <img src="/assets/images/icon/verified.svg" alt="" />{" "}
                        Verified Company
                      </li>
                    </ul>
                  </div>
                  <div className="bookmark">
                    <i className="bi bi-bookmark-fill" />
                  </div>
                </div>
              </div>
              <div className="job-discription">
                <ul className="one">
                  <li>
                    <p>
                      <span className="title">Location:</span> Dhaka, Bangladesh
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="title">Salary:</span> $60K-$80K /{" "}
                      <span className="time">Per Month</span>
                    </p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <p>
                      <span className="title">Experience:</span> 2-3 Years
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="title">Deadline:</span>
                      <span className="time"> 3 February, 2023</span>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="job-type-apply">
                <div className="apply-btn">
                  <Link legacyBehavior href="/job-details">
                    <a>
                      <span>
                        <img
                          src="/assets/images/icon/apply-ellipse.svg"
                          alt=""
                        />
                      </span>
                      Apply Now
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="feature-card2">
              <div className="company-area">
                <span />
                <div className="logo">
                  <img
                    src="/assets/images/bg/company-logo/company-04.png"
                    alt=""
                  />
                </div>
                <div className="company-details">
                  <div className="name-location">
                    <h5>
                      <Link legacyBehavior href="/job-details">
                        <a>Receptionist</a>
                      </Link>
                    </h5>
                    <ul>
                      <li>
                        <Link legacyBehavior href="/company-details">
                          <a>Germaine Group Ltd</a>
                        </Link>
                      </li>
                      <li className="verified">
                        <img src="/assets/images/icon/verified.svg" alt="" />{" "}
                        Verified Company
                      </li>
                    </ul>
                  </div>
                  <div className="bookmark">
                    <i className="bi bi-bookmark-fill" />
                  </div>
                </div>
              </div>
              <div className="job-discription">
                <ul className="one">
                  <li>
                    <p>
                      <span className="title">Location:</span> West London, Uk
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="title">Salary:</span> $50K-$60K /{" "}
                      <span className="time">Per Hour</span>
                    </p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <p>
                      <span className="title">Experience:</span> 2-2.5 Years
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="title">Deadline:</span>
                      <span className="time"> 4 February, 2023</span>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="job-type-apply">
                <div className="apply-btn">
                  <Link legacyBehavior href="/job-details">
                    <a>
                      {" "}
                      <span>
                        <img
                          src="/assets/images/icon/apply-ellipse.svg"
                          alt=""
                        />
                      </span>
                      Apply Now
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
}

export default FeaturedJobs;
