import { useRouter } from "next/router";
import React, { useMemo } from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Autoplay, EffectFade]);
function Home2TrustedCompany() {
  const currentPage = useRouter().pathname;
  const slider = useMemo(() => {
    return {
      slidesPerView: "auto",
      spaceBetween: 24,
      loop: true,
      speed: 1500,
      autoplay: {
        delay: 2000,
      },
      breakpoints: {
        280: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        480: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 5,
        },
        1200: {
          slidesPerView: 6,
        },
        1400: {
          slidesPerView: 6,
        },
        1600: {
          slidesPerView: 6,
        },
      },
    };
  }, []);
  return (
    <div
      className={
        currentPage === "/index3"
          ? "home1-trusted-company two mt-120 mb-120"
          : "home1-trusted-company two mb-120"
      }
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h5>Our Trusted Company</h5>
            </div>
            <Swiper {...slider} className="swiper trusted-company-slider">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="company-logo">
                    <img
                      src="assets/images/icon/trusted-company-01.svg"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="company-logo">
                    <img
                      src="assets/images/icon/trusted-company-03.svg"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="company-logo">
                    <img
                      src="assets/images/icon/trusted-company-02.svg"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="company-logo">
                    <img
                      src="assets/images/icon/trusted-company-04.svg"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="company-logo">
                    <img
                      src="assets/images/icon/trusted-company-05.svg"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="company-logo">
                    <img
                      src="assets/images/icon/trusted-company-06.svg"
                      alt=""
                    />
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

export default Home2TrustedCompany;
