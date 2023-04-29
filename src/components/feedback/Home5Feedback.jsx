import React, { useMemo } from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination, Autoplay, Navigation]);
function Home5Feedback() {
  const slider = useMemo(() => {
    return {
      slidesPerView: 2,
      spaceBetween: 20,
      loop: true,
      speed: 1700,
      autoplay: {
        delay: 2200,
      },
      navigation: {
        nextEl: ".next-13",
        prevEl: ".prev-13",
      },
      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 1,
        },
        1200: {
          slidesPerView: 2,
        },
        1400: {
          slidesPerView: 2,
        },
        1600: {
          slidesPerView: 2,
        },
      },
    };
  }, []);
  return (
    <div className="home5-clients-feedback-area mb-120">
      <div className="container">
        <div className="row mb-60">
          <div className="col-12 d-flex flex-wrap align-items-end justify-content-md-between justify-content-start gap-3">
            <div className="section-title3">
              <h2>Clients Feedback</h2>
              <p>
                To choose your trending job dream &amp; to make future bright.
              </p>
            </div>
            <div className="swiper-btn-1">
              <div className="swiper-prev prev-13">
                <img src="assets/images/icon/home5-slick-prev.svg" alt="" />
              </div>
              <div className="swiper-next next-13">
                <img src="assets/images/icon/home5-slick-next.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Swiper {...slider} className="swiper home5-feedback-slider">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="client-feedback-wrap hover-btn">
                    <span className="for-border" />
                    <div className="client-feedback-inner">
                      <div className="client-feedback-top">
                        <div className="author-area">
                          <div className="author-img">
                            <img
                              src="assets/images/bg/home5-testimonial-01.png"
                              alt=""
                            />
                            <div className="author-quat">
                              <img
                                className="quate1"
                                src="assets/images/icon/home5-testimonial-quat.svg"
                                alt=""
                              />
                              <img
                                className="quate2"
                                src="assets/images/icon/home5-testimonial-quat2.svg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="author-content">
                            <h5>Rakhab Uddin</h5>
                            <span>UI/UX Engineer</span>
                          </div>
                        </div>
                        <div className="reviews">
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
                      </div>
                      <div className="client-feedback-content">
                        <p>
                          On the other hand, denounce with righteous to
                          indignation and dislike men who are so the beguiled
                          and demoralized.
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="client-feedback-wrap hover-btn">
                    <span className="for-border" />
                    <div className="client-feedback-inner">
                      <div className="client-feedback-top">
                        <div className="author-area">
                          <div className="author-img">
                            <img
                              src="assets/images/bg/home5-testimonial-02.png"
                              alt=""
                            />
                            <div className="author-quat">
                              <img
                                className="quate1"
                                src="assets/images/icon/home5-testimonial-quat.svg"
                                alt=""
                              />
                              <img
                                className="quate2"
                                src="assets/images/icon/home5-testimonial-quat2.svg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="author-content">
                            <h5>Mrs. Jordan Harry</h5>
                            <span>UI/UX Engineer</span>
                          </div>
                        </div>
                        <div className="reviews">
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
                      </div>
                      <div className="client-feedback-content">
                        <p>
                          On the other hand, denounce with righteous to
                          indignation and dislike men who are so the beguiled
                          and demoralized.
                        </p>
                      </div>
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

export default Home5Feedback;
