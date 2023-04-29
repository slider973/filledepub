import React, { useMemo } from "react";
import Slider from "react-slick";
function Home5TrustedCompany() {
  const slider = useMemo(() => {
    return {
      rows: 2,
      dots: false,
      arrows: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 2000,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            arrows: false,
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            arrows: false,
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 991,
          settings: {
            arrows: false,
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            arrows: false,
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 350,
          settings: {
            arrows: false,
            slidesToShow: 1,
          },
        },
      ],
    };
  }, []);
  return (
    <div className="home5-trusted-company two mb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h5>Our Trusted 23 Millions Company</h5>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="slick-wrapper">
            <Slider {...slider} id="slick5">
              <div className="slide-item">
                <div className="company-logo">
                  <img
                    src="assets/images/bg/company-logo/home5-company-logo-1.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="slide-item">
                <div className="company-logo">
                  <img
                    src="assets/images/bg/company-logo/home5-company-logo-3.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="slide-item">
                <div className="company-logo">
                  <img
                    src="assets/images/bg/company-logo/home5-company-logo-4.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="slide-item">
                <div className="company-logo">
                  <img
                    src="assets/images/bg/company-logo/home5-company-logo-5.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="slide-item">
                <div className="company-logo">
                  <img
                    src="assets/images/bg/company-logo/home5-company-logo-6.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="slide-item">
                <div className="company-logo">
                  <img
                    src="assets/images/bg/company-logo/home5-company-logo-7.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="slide-item">
                <div className="company-logo">
                  <img
                    src="assets/images/bg/company-logo/home5-company-logo-8.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="slide-item">
                <div className="company-logo">
                  <img
                    src="assets/images/bg/company-logo/home5-company-logo-9.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="slide-item">
                <div className="company-logo">
                  <img
                    src="assets/images/bg/company-logo/home5-company-logo-10.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="slide-item">
                <div className="company-logo">
                  <img
                    src="assets/images/bg/company-logo/home5-company-logo-1.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="slide-item">
                <div className="company-logo">
                  <img
                    src="assets/images/bg/company-logo/home5-company-logo-2.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="slide-item">
                <div className="company-logo">
                  <img
                    src="assets/images/bg/company-logo/home5-company-logo-3.png"
                    alt=""
                  />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home5TrustedCompany;
