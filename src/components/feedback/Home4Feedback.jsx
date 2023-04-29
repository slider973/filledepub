import React, { useMemo } from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination, Autoplay, Navigation]);
function Home4Feedback() {
  const slider = useMemo(() => {
    return {
      slidesPerView: "auto",
      spaceBetween: 20,
      centeredSlides: true,
      loop: true,
      navigation: {
        nextEl: ".next-10",
        prevEl: ".prev-10",
      },

      breakpoints: {
        280: {
          slidesPerView: 1,
          centeredSlides: false,
        },
        480: {
          slidesPerView: 1,
          centeredSlides: false,
        },
        768: {
          slidesPerView: 1,
          centeredSlides: false,
        },
        992: {
          slidesPerView: 3,
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
  const slider2 = useMemo(() => {
    return {
      slidesPerView: "auto",
      spaceBetween: 20,
      centeredSlides: true,
      loop: true,
      navigation: {
        nextEl: ".next-10",
        prevEl: ".prev-10",
      },
      breakpoints: {
        280: {
          slidesPerView: 1,
          centeredSlides: false,
        },
        480: {
          slidesPerView: 1,
          centeredSlides: false,
        },
        768: {
          slidesPerView: 1,
          centeredSlides: false,
        },
        992: {
          slidesPerView: 3,
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
    <div className="home4-feedback-area mb-120">
      <div className="container">
        <div className="row mb-60">
          <div className="col-12 d-flex flex-wrap align-items-end justify-content-md-between justify-content-start gap-3">
            <div className="section-title1">
              <h2>
                <span>Feedback</span> From Our Clients
              </h2>
              <p>
                To choose your trending job dream &amp; to make future bright.
              </p>
            </div>
            <div className="swiper-btn1 d-flex align-items-center">
              <div className="left-btn prev-10">
                <img src="assets/images/icon/explore-elliose.svg" alt="" />
              </div>
              <div className="right-btn next-10">
                <img src="assets/images/icon/explore-elliose.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <Swiper className="swiper home4-feedback-slider mb-50" {...slider}>
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="feedback-wrap">
                  <div className="quat-icon">
                    <svg
                      width={35}
                      height={22}
                      viewBox="0 0 35 22"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M21.7572 0H28.927C29.8792 0 30.6993 0.671284 30.8875 1.60468L34.517 19.6047C34.7667 20.8431 33.8198 22 32.5565 22H28.6738C27.846 22 27.1038 21.4901 26.8069 20.7174L19.8903 2.71737C19.387 1.40746 20.3539 0 21.7572 0Z" />
                      <path d="M2.91153 0H10.0813C11.0335 0 11.8536 0.671284 12.0418 1.60468L15.6713 19.6047C15.921 20.8431 14.9741 22 13.7108 22H9.82808C9.00031 22 8.25807 21.4901 7.96116 20.7174L1.04461 2.71737C0.541269 1.40746 1.50824 0 2.91153 0Z" />
                    </svg>
                  </div>
                  <p>
                    On the other hand, we denounce with righteous indignation
                    and to the dislike men who are so the beguiled and
                    demoralized.
                  </p>
                  <div className="author-name-deg">
                    <h5>Mr. Jacoline Frankly</h5>
                    <span>UI/UX Engineer</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="feedback-wrap">
                  <div className="quat-icon">
                    <svg
                      width={35}
                      height={22}
                      viewBox="0 0 35 22"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M21.7572 0H28.927C29.8792 0 30.6993 0.671284 30.8875 1.60468L34.517 19.6047C34.7667 20.8431 33.8198 22 32.5565 22H28.6738C27.846 22 27.1038 21.4901 26.8069 20.7174L19.8903 2.71737C19.387 1.40746 20.3539 0 21.7572 0Z" />
                      <path d="M2.91153 0H10.0813C11.0335 0 11.8536 0.671284 12.0418 1.60468L15.6713 19.6047C15.921 20.8431 14.9741 22 13.7108 22H9.82808C9.00031 22 8.25807 21.4901 7.96116 20.7174L1.04461 2.71737C0.541269 1.40746 1.50824 0 2.91153 0Z" />
                    </svg>
                  </div>
                  <p>
                    On the other hand, we denounce with righteous indignation
                    and to the dislike men who are so the beguiled and
                    demoralized.
                  </p>
                  <div className="author-name-deg">
                    <h5>Mr. Robertson Maike</h5>
                    <span>PHP Developer</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="feedback-wrap">
                  <div className="quat-icon">
                    <svg
                      width={35}
                      height={22}
                      viewBox="0 0 35 22"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M21.7572 0H28.927C29.8792 0 30.6993 0.671284 30.8875 1.60468L34.517 19.6047C34.7667 20.8431 33.8198 22 32.5565 22H28.6738C27.846 22 27.1038 21.4901 26.8069 20.7174L19.8903 2.71737C19.387 1.40746 20.3539 0 21.7572 0Z" />
                      <path d="M2.91153 0H10.0813C11.0335 0 11.8536 0.671284 12.0418 1.60468L15.6713 19.6047C15.921 20.8431 14.9741 22 13.7108 22H9.82808C9.00031 22 8.25807 21.4901 7.96116 20.7174L1.04461 2.71737C0.541269 1.40746 1.50824 0 2.91153 0Z" />
                    </svg>
                  </div>
                  <p>
                    On the other hand, we denounce with righteous indignation
                    and to the dislike men who are so the beguiled and
                    demoralized.
                  </p>
                  <div className="author-name-deg">
                    <h5>David Williumson </h5>
                    <span>WordPress Developer</span>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
          <Swiper className="swiper home4-feedback-slider2" {...slider2}>
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="author-img">
                  <img
                    src="assets/images/bg/home4-feedback-author1.png"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="author-img">
                  <img
                    src="assets/images/bg/home4-feedback-author2.png"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="author-img">
                  <img
                    src="assets/images/bg/home4-feedback-author3.png"
                    alt=""
                  />
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Home4Feedback;
