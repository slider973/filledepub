import React, { useMemo } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade, Mousewheel]);
function Review1() {
  const review = useMemo(() => {
    return {
      spaceBetween: 40,
      slidesPerView: "auto",
      loop: true,
      speed: 1500,
      autoplay: {
        delay: 2000,
      },
      navigation: {
        nextEl: ".next-2",
        prevEl: ".prev-2",
      },
      breakpoints: {
        280: {
          slidesPerView: 1,
          spaceBetween: 15,
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
    <div className="home1-review-area mb-120">
      <div className="container">
        <div className="row mb-60">
          <div className="col-12 d-flex flex-wrap align-items-end justify-content-md-between justify-content-start gap-3">
            <div className="section-title1">
              <h2>
                Trusted User <span>Reviews</span>
              </h2>
              <p>
                To choose your trending job dream &amp; to make future bright.
              </p>
            </div>
            <div className="swiper-btn1 d-flex align-items-center">
              <div className="left-btn prev-2">
                <img src="/assets/images/icon/explore-elliose.svg" alt="" />
              </div>
              <div className="right-btn next-2">
                <img src="/assets/images/icon/explore-elliose.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <Swiper {...review} className="swiper testimonial-slider1">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-card">
                  <div className="author-img">
                    <img
                      src="/assets/images/bg/testimonial-author1.png"
                      alt=""
                    />
                    <div className="quat-icon">
                      <img src="/assets/images/icon/quat-icon.svg" alt="" />
                    </div>
                  </div>
                  <div className="testimonial-content">
                    <div className="author-review-area">
                      <div className="author-area">
                        <h5>Jacoline Frangly</h5>
                        <span>React Developer</span>
                      </div>
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
                      On the other hand, we denounce with to the righteous
                      indignation and dislike the men who are so beguiled to
                      demoralized by the charms of pleasure.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-card">
                  <div className="author-img">
                    <img
                      src="/assets/images/bg/testimonial-author2.png"
                      alt=""
                    />
                    <div className="quat-icon">
                      <img src="/assets/images/icon/quat-icon.svg" alt="" />
                    </div>
                  </div>
                  <div className="testimonial-content">
                    <div className="author-review-area">
                      <div className="author-area">
                        <h5>Jordan Miycol</h5>
                        <span>UI/UX Engineer</span>
                      </div>
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
                      On the other hand, we denounce with to the righteous
                      indignation and dislike the men who are so beguiled to
                      demoralized by the charms of pleasure.
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

export default Review1;
