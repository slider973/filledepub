
import React, { useMemo } from "react";
import CountUp from "react-countup";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination, Autoplay, Navigation]);
function Home3Feedback() {
  const slider = useMemo(()=>{
return {
  spaceBetween: 20,
	loop: true,
	slidesPerView: "auto",
	speed: 2000,
  effect: 'fade',
		autoplay: {
			delay: 1500,
		},
    navigation: {
      nextEl: ".next-6",
      prevEl: ".prev-6",
    },
    pagination: {
      el: ".swiper-pagination-g",
      type: "fraction",
    },
}
  },[])
  return (
    <div className="home3-user-feedback mb-120">
      <div className="container">
        <div className="row g-4 gy-5">
          <div className="col-lg-6">
            <div className="user-feedback-left">
              <div className="section-title1">
                <h2>
                  Our Users <span>Feedback</span>
                </h2>
                <p>
                  To choose your trending job dream &amp; to make future bright.
                </p>
              </div>
              <div className="counter-area">
                <div className="row divider justify-content-center">
                  <div className="col-sm-6 mb-60">
                    <div className="counter-single">
                      <div className="counter-icon">
                        <img src="assets/images/icon/job2.svg" alt="image" />
                      </div>
                      <div className="coundown">
                        <p>Live Jobs</p>
                        <div className="d-flex align-items-center gap-2">
                          <h3 className="odometer">
                            {" "}
                            <CountUp
                              start={0}
                              end={20223}
                              enableScrollSpy={true}
                              duration={3}
                            />
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-60">
                    <div className="counter-single two">
                      <div className="counter-icon">
                        <img
                          src="assets/images/icon/companies.svg"
                          alt="image"
                        />
                      </div>
                      <div className="coundown">
                        <p>Companies</p>
                        <div className="d-flex align-items-center gap-2">
                          <h3 className="odometer">
                            {" "}
                            <CountUp
                              start={0}
                              end={803}
                              enableScrollSpy={true}
                              duration={3}
                            />
                          </h3>
                          <span>+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 d-flex">
                    <div className="counter-single three">
                      <div className="counter-icon">
                        <img
                          src="assets/images/icon/candidates.svg"
                          alt="image"
                        />
                      </div>
                      <div className="coundown">
                        <p>Candidates</p>
                        <div className="d-flex align-items-center gap-2">
                          <h3 className="odometer">
                            {" "}
                            <CountUp
                              start={0}
                              end={500}
                              enableScrollSpy={true}
                              duration={3}
                            />
                          </h3>
                          <span>+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="counter-single four">
                      <div className="counter-icon">
                        <img
                          src="assets/images/icon/new-jobs.svg"
                          alt="image"
                        />
                      </div>
                      <div className="coundown">
                        <p>New Jobs</p>
                        <div className="d-flex align-items-center gap-2">
                          <h3 className="odometer">
                            {" "}
                            <CountUp
                              start={0}
                              end={120}
                              enableScrollSpy={true}
                              duration={3}
                            />
                          </h3>
                          <span>+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <Swiper {...slider} className="swiper user-feedback-slider3">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="user-feedback-wrap">
                    <div className="user-feedback-top">
                      <div className="author-area">
                        <div className="author-img">
                          <img
                            src="assets/images/bg/testimonial-author3.png"
                            alt=""
                          />
                        </div>
                        <div className="author-content">
                          <h5>Samuel Hungary</h5>
                          <span>PHP Developer</span>
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
                    <p>
                      "On the other hand, we denounce with righteous indignation
                      and dislike men who are so beguiled and demoralized by the
                      charms of pleasure of the moment, so blinded by desire".
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="user-feedback-wrap">
                    <div className="user-feedback-top">
                      <div className="author-area">
                        <div className="author-img">
                          <img
                            src="assets/images/bg/testimonial-author2.png"
                            alt=""
                          />
                        </div>
                        <div className="author-content">
                          <h5>David Williumson</h5>
                          <span>WordPress Developer</span>
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
                    <p>
                      "On the other hand, we denounce with righteous indignation
                      and dislike men who are so beguiled and demoralized by the
                      charms of pleasure of the moment, so blinded by desire".
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="user-feedback-wrap">
                    <div className="user-feedback-top">
                      <div className="author-area">
                        <div className="author-img">
                          <img
                            src="assets/images/bg/testimonial-author1.png"
                            alt=""
                          />
                        </div>
                        <div className="author-content">
                          <h5>Jacoline Frankly</h5>
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
                    <p>
                      "On the other hand, we denounce with righteous indignation
                      and dislike men who are so beguiled and demoralized by the
                      charms of pleasure of the moment, so blinded by desire".
                    </p>
                  </div>
                </SwiperSlide>
              </div>
              <div className="swiper-pagination-g" />
              <div className="swiper-btn-2">
                <div className="swiper-prev prev-6">
                  <i className="bi bi-chevron-left" />
                </div>
                <div className="swiper-next next-6">
                  <i className="bi bi-chevron-right" />
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home3Feedback;
