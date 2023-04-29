import Link from "next/link";

import React, { useMemo } from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination, Autoplay, Navigation]);
function RelatedJobs() {
  const slider = useMemo(() => {
    return {
      slidesPerView: "auto",
      spaceBetween: 30,
      loop: true,
      speed: 1500,
      autoplay: {
        delay: 2000,
      },
      navigation: {
        nextEl: ".next-4",
        prevEl: ".prev-4",
      },
      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 3,
        },
        1600: {
          slidesPerView: 3,
        },
      },
    };
  }, []);
  return (
    <div className="related-jobs">
      <div className="section-title mb-40">
        <h3>Related Jobs:</h3>
        <div className="swiper-btn1 d-flex align-items-center">
          <div className="left-btn prev-4">
            <img src="assets/images/icon/explore-elliose.svg" alt="" />
          </div>
          <div className="right-btn next-4">
            <img src="assets/images/icon/explore-elliose.svg" alt="" />
          </div>
        </div>
      </div>
      <Swiper {...slider} className="swiper related-job-slider">
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide">
            <div className="feature-card">
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
                        <a> React JS Developer</a>
                      </Link>
                    </h5>
                    <p>
                      <Link legacyBehavior href="/company-details">
                        <a>Elite Hangstroman</a>
                      </Link>
                    </p>
                  </div>
                  <div className="bookmark">
                    <i className="bi bi-bookmark" />
                  </div>
                </div>
              </div>
              <div className="job-discription">
                <ul>
                  <li>
                    <img src="assets/images/icon/arrow2.svg" alt="" />
                    <p>
                      <span className="title">Salary:</span> $80-$110 /{" "}
                      <span className="time">Per month</span>
                    </p>
                  </li>
                  <li>
                    <img src="assets/images/icon/arrow2.svg" alt="" />
                    <p>
                      <span className="title">Deadline: 02 March, 2023 </span>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="job-type-apply">
                <div className="job-type">
                  <span className="full-time">Full Time</span>
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
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="feature-card">
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
                        <a>Assistant Laboratorist</a>
                      </Link>
                    </h5>
                    <p>
                      <Link legacyBehavior href="/company-details">
                        <a>Norland Comapny</a>
                      </Link>
                    </p>
                  </div>
                  <div className="bookmark">
                    <i className="bi bi-bookmark" />
                  </div>
                </div>
              </div>
              <div className="job-discription">
                <ul>
                  <li>
                    <img src="assets/images/icon/arrow2.svg" alt="" />
                    <p>
                      <span className="title">Salary:</span> $30-$40 /{" "}
                      <span className="time">Per month</span>
                    </p>
                  </li>
                  <li>
                    <img src="assets/images/icon/arrow2.svg" alt="" />
                    <p>
                      <span className="title">Deadline: 02 March, 2023 </span>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="job-type-apply">
                <div className="job-type">
                  <span className="full-time">Full Time</span>
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
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="feature-card">
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
                        <a>UI/UX Designer</a>
                      </Link>
                    </h5>
                    <p>
                      <Link legacyBehavior href="/company-details">
                        <a>Techman Digita</a>
                      </Link>
                    </p>
                  </div>
                  <div className="bookmark">
                    <i className="bi bi-bookmark" />
                  </div>
                </div>
              </div>
              <div className="job-discription">
                <ul>
                  <li>
                    <img src="assets/images/icon/arrow2.svg" alt="" />
                    <p>
                      <span className="title">Salary:</span> $60-$70 /{" "}
                      <span className="time">Per month</span>
                    </p>
                  </li>
                  <li>
                    <img src="assets/images/icon/arrow2.svg" alt="" />
                    <p>
                      <span className="title">Deadline: 02 March, 2023 </span>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="job-type-apply">
                <div className="job-type">
                  <span className="full-time">Full Time</span>
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
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
}

export default RelatedJobs;
