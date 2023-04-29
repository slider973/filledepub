import Link from "next/link";
import React, { useMemo } from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination, Autoplay]);
function JobLocation1() {
  const bannerSlider = useMemo(() => {
    return {
      slidesPerView: "auto",
      spaceBetween: 24,
      // centeredSlides: true,
      loop: true,
      speed: 1500,
      autoplay: {
        delay: 2000,
      },
      navigation: {
        nextEl: ".next-1",
        prevEl: ".prev-1",
      },
      breakpoints: {
        280: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        480: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
        1400: {
          slidesPerView: 4,
        },
        1600: {
          slidesPerView: 4,
        },
      },
    };
  }, []);
  return (
    <div className="home1-location-area mb-120">
      <div className="container">
        <div className="row mb-60">
          <div className="col-12 d-flex flex-wrap align-items-end justify-content-md-between justify-content-start gap-3">
            <div className="section-title1">
              <h2>
                Get Dream With <span>Location</span>
              </h2>
              <p>
                To choose your trending job dream &amp; to make future bright.
              </p>
            </div>
            <div className="swiper-btn1 d-flex align-items-center">
              <div className="left-btn prev-1">
                <img src="assets/images/icon/explore-elliose.svg" alt="" />
              </div>
              <div className="right-btn next-1">
                <img src="assets/images/icon/explore-elliose.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <Swiper {...bannerSlider} className="swiper location-slider">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="location-card">
                  <div className="location-img">
                    <img
                      className="img-fluid"
                      src="assets/images/bg/dhaka1.png"
                      alt=""
                    />
                  </div>
                  <div className="location-content text-center">
                    <h5>
                      <Link legacyBehavior href="/job-listing1">
                        <a>
                          <img src="assets/images/icon/location.svg" alt="" />
                          Dhaka, Bangladesh
                        </a>
                      </Link>
                    </h5>
                    <p>
                      Job Available: <span>2934</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="location-card">
                  <div className="location-img">
                    <img
                      className="img-fluid"
                      src="assets/images/bg/newyork1.png"
                      alt=""
                    />
                  </div>
                  <div className="location-content text-center">
                    <h5>
                      <Link legacyBehavior href="/job-listing1">
                        <a>
                          <img src="assets/images/icon/location.svg" alt="" />
                          NewYork, USA
                        </a>
                      </Link>
                    </h5>
                    <p>
                      Job Available: <span>2186</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="location-card">
                  <div className="location-img">
                    <img
                      className="img-fluid"
                      src="assets/images/bg/chicago.png"
                      alt=""
                    />
                  </div>
                  <div className="location-content text-center">
                    <h5>
                      <Link legacyBehavior href="/job-listing1">
                        <a>
                          <img src="assets/images/icon/location.svg" alt="" />
                          Chicago, Australia
                        </a>
                      </Link>
                    </h5>
                    <p>
                      Job Available: <span>5678</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="location-card">
                  <div className="location-img">
                    <img
                      className="img-fluid"
                      src="assets/images/bg/sylhet.png"
                      alt=""
                    />
                  </div>
                  <div className="location-content text-center">
                    <h5>
                      <Link legacyBehavior href="/job-listing1">
                        <a>
                          <img src="assets/images/icon/location.svg" alt="" />
                          Sylhet, Bangladesh
                        </a>
                      </Link>
                    </h5>
                    <p>
                      Job Available: <span>1234</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="location-card">
                  <div className="location-img">
                    <img
                      className="img-fluid"
                      src="assets/images/bg/sylhet.png"
                      alt=""
                    />
                  </div>
                  <div className="location-content text-center">
                    <h5>
                      <Link legacyBehavior href="/job-listing1">
                        <a>
                          <img src="assets/images/icon/location.svg" alt="" />
                          Sylhet, Bangladesh
                        </a>
                      </Link>
                    </h5>
                    <p>
                      Job Available: <span>1234</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default JobLocation1;
