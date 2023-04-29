import React, { useMemo } from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Autoplay, EffectFade]);
function Home2Feedback() {
  const slider = useMemo(() => {
    return {
      spaceBetween: 20,
      loop: true,
      slidesPerView: 1,
      speed: 2000,
      // effect: 'fade',
      autoplay: {
        delay: 1500,
      },
      navigation: {
        nextEl: ".next-6",
        prevEl: ".prev-6",
      },
    };
  }, []);
  return (
    <div className="home2-feedback-area mb-120">
      <div className="container">
        <div className="row mb-60">
          <div className="col-12 d-flex justify-content-center">
            <div className="section-title1 text-center">
              <h2>
                Feedback Of <span>Users</span>
              </h2>
              <p>
                To choose your trending job dream &amp; to make future bright.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <Swiper {...slider} className="swiper home2-feedback-slider">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="feedback-wrap">
                  <div className="author-img">
                    <img src="assets/images/bg/home2-feeback.png" alt="" />
                    <div className="quoat-icon">
                      <img
                        src="assets/images/icon/feedback-quoat1.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="feedback-content">
                    <p>
                      On the other hand, we denounce with righteous indignation
                      and dislike men who are so beguiled and demoralized by the
                      charms of pleasure of the moment, so blinded by desire,
                      that they cannot foresee the pain.
                    </p>
                  </div>
                  <div className="athor-review-content">
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
                    <div className="author-content">
                      <h5>Jacoline Frangly</h5>
                      <span>React Developer</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="feedback-wrap">
                  <div className="author-img">
                    <img src="assets/images/bg/home2-feeback2.png" alt="" />
                    <div className="quoat-icon">
                      <img
                        src="assets/images/icon/feedback-quoat1.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="feedback-content">
                    <p>
                      On the other hand, we denounce with righteous indignation
                      and dislike men who are so beguiled and demoralized by the
                      charms of pleasure of the moment, so blinded by desire,
                      that they cannot foresee the pain.
                    </p>
                  </div>
                  <div className="athor-review-content">
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
                    <div className="author-content">
                      <h5>Jordan Miycol</h5>
                      <span>UI/UX Engineer</span>
                    </div>
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

export default Home2Feedback;
