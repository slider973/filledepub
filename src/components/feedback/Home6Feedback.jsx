import React, { useMemo } from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Autoplay, EffectFade]);
function Home6Feedback() {
  const slide = useMemo(() => {
    return {
      slidesPerView: "auto",
      spaceBetween: 20,
      loop: true,
      speed: 1700,
      autoplay: {
        delay: 2200,
      },
      navigation: {
        nextEl: ".next-12",
        prevEl: ".prev-12",
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
    <div className="home6-customer-feedback-area pl-185 pr-185 mb-120">
      <div className="container-fluid">
        <div className="row mb-60">
          <div className="col-12 d-flex flex-wrap align-items-end justify-content-md-between justify-content-start gap-3">
            <div className="section-title2">
              <h2>
                Trusted Customer <span>Feedback</span>
              </h2>
              <p>
                To choose your trending job dream &amp; to make future bright.
              </p>
            </div>
            <div className="swiper-btn1 d-flex align-items-center">
              <div className="left-btn prev-12">
                <img src="assets/images/icon/explore-elliose.svg" alt="" />
              </div>
              <div className="right-btn next-12">
                <img src="assets/images/icon/explore-elliose.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Swiper {...slide} className="swiper home6-feedback-slider">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="feedback-wrrap">
                    <div className="author-img-wrap">
                      <div className="icon-left-vector">
                        <svg
                          width={16}
                          height={65}
                          viewBox="0 0 13 52"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.5195 1C-2.41493 14.8071 -2.41493 37.1929 11.5195 51"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                      <div className="author-img">
                        <img
                          src="assets/images/bg/home6-feedback-author-01.png"
                          alt=""
                        />
                      </div>
                      <div className="icon-right-vector">
                        <svg
                          width={16}
                          height={65}
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
                    <div className="author-review">
                      <ul>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-half" />
                        </li>
                      </ul>
                    </div>
                    <p>
                      On the other hand, denounce with righteous to indignation
                      and dislike men who are so beguiled and demoralized.
                    </p>
                    <div className="author-name-deg">
                      <h5>Jordan Miycol</h5>
                      <span>UI/UX Engineer</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="feedback-wrrap">
                    <div className="author-img-wrap">
                      <div className="icon-left-vector">
                        <svg
                          width={16}
                          height={65}
                          viewBox="0 0 13 52"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.5195 1C-2.41493 14.8071 -2.41493 37.1929 11.5195 51"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                      <div className="author-img">
                        <img
                          src="assets/images/bg/home6-feedback-author-02.png"
                          alt=""
                        />
                      </div>
                      <div className="icon-right-vector">
                        <svg
                          width={16}
                          height={65}
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
                    <div className="author-review">
                      <ul>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-half" />
                        </li>
                      </ul>
                    </div>
                    <p>
                      On the other hand, denounce with righteous indignation and
                      dislike men who are so beguiled and demoralized by the
                      charms of pleasure of the moment, so blinded by desire.
                    </p>
                    <div className="author-name-deg">
                      <h5>Rakhab Uddin</h5>
                      <span>UI/UX Engineer</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="feedback-wrrap">
                    <div className="author-img-wrap">
                      <div className="icon-left-vector">
                        <svg
                          width={16}
                          height={65}
                          viewBox="0 0 13 52"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.5195 1C-2.41493 14.8071 -2.41493 37.1929 11.5195 51"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                      <div className="author-img">
                        <img
                          src="assets/images/bg/home6-feedback-author-03.png"
                          alt=""
                        />
                      </div>
                      <div className="icon-right-vector">
                        <svg
                          width={16}
                          height={65}
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
                    <div className="author-review">
                      <ul>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-half" />
                        </li>
                      </ul>
                    </div>
                    <p>
                      On the other hand, denounce with righteous to indignation
                      and dislike men who are so beguiled and demoralized.
                    </p>
                    <div className="author-name-deg">
                      <h5>Mrs. Jordan Harry </h5>
                      <span>Senior Nurse</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="feedback-wrrap">
                    <div className="author-img-wrap">
                      <div className="icon-left-vector">
                        <svg
                          width={16}
                          height={65}
                          viewBox="0 0 13 52"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.5195 1C-2.41493 14.8071 -2.41493 37.1929 11.5195 51"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                      <div className="author-img">
                        <img
                          src="assets/images/bg/home6-feedback-author-02.png"
                          alt=""
                        />
                      </div>
                      <div className="icon-right-vector">
                        <svg
                          width={16}
                          height={65}
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
                    <div className="author-review">
                      <ul>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-half" />
                        </li>
                      </ul>
                    </div>
                    <p>
                      On the other hand, denounce with righteous indignation and
                      dislike men who are so beguiled and demoralized by the
                      charms of pleasure of the moment, so blinded by desire.
                    </p>
                    <div className="author-name-deg">
                      <h5>Rakhab Uddin</h5>
                      <span>UI/UX Engineer</span>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home6Feedback;
