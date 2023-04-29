import React, { useMemo, useState } from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "yet-another-react-lightbox/styles.css";
import gallaryData from "../../data/company_gallary_data.json";
SwiperCore.use([Navigation, Pagination, Autoplay, Navigation]);

function CompanyGallary() {
  const [isOpenimg, setOpenimg] = useState({
    openingState: false,
    openingIndex: 0,
  });
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
        nextEl: ".next-3",
        prevEl: ".prev-3",
      },
      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
        1400: {
          slidesPerView: 5,
        },
        1600: {
          slidesPerView: 5,
        },
      },
    };
  }, []);
  return (
    <div className="company-gallery">
      <div className="title">
        <h5>Company Gallery Viewsss</h5>
      </div>
      <Swiper {...slider} className="swiper company-gallery-slider">
        <div className="swiper-wrapper">
          {gallaryData.map((data, index) => {
            const { id, small_img } = data;
            return (
              <SwiperSlide key={id} className="swiper-slide">
                <div data-fancybox="gallery" className="gallery2-img">
                  <div className="gallery-wrap">
                    <img className="img-fluid" src={small_img} alt="" />
                    <div className="overlay d-flex align-items-center justify-content-center">
                      <div className="items-content text-center">
                        <img
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            setOpenimg({
                              openingState: true,
                              openingIndex: index,
                            })
                          }
                          src="assets/images/icon/eye.svg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
      <Lightbox
        className="img-fluid"
        open={isOpenimg.openingState}
        plugins={[Fullscreen]}
        index={isOpenimg.openingIndex}
        close={() => setOpenimg(false)}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
        slides={gallaryData.map(function (elem) {
          return { src: elem.big_img };
        })}
      />
    </div>
  );
}

export default CompanyGallary;
