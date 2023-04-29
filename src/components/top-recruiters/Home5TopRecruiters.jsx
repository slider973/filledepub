import Link from "next/link";
import React, { useMemo } from "react";
import Slide from "react-slick";
function Home5TopRecruiters() {
  const slider = useMemo(() => {
    return {
      rows: 2,
      dots: false,
      arrows: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 2000,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            arrows: false,
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            arrows: false,
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 991,
          settings: {
            arrows: false,
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 576,
          settings: {
            arrows: false,
            slidesToShow: 1,
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
    <div className="home5-top-recruiters-area mb-120">
      <div className="container">
        <div className="row mb-60">
          <div className="col-12 d-flex flex-wrap align-items-end justify-content-md-between justify-content-start gap-3">
            <div className="section-title3">
              <h2>Our Top Recruiters</h2>
              <p>
                To choose your trending job dream &amp; to make future bright.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="slick-wrapper">
            <Slide {...slider} id="slick4">
              <div className="slide-item">
                <div className="recruters-card hover-btn">
                  <div className="company-logo">
                    <span className="for-border" />
                    <img
                      src="assets/images/bg/company-logo/company-01.png"
                      alt=""
                    />
                  </div>
                  <div className="company-area">
                    <div className="name-location">
                      <h5>
                        <Link legacyBehavior href="/company-listing1">
                          <a>New Sky-Mistro</a>
                        </Link>
                      </h5>
                      <p><img src="assets/images/icon/person-dark.svg" alt=""/> 46 People</p>
                      <p>
                        <img
                          src="assets/images/icon/home5-location-icon.svg"
                          alt=""
                        />
                        New-York, USA
                      </p>
                    </div>
                    <div className="apply-btn">
                      <Link legacyBehavior href="/company-details">
                        <a>
                          <span>
                            <img
                              src="assets/images/icon/apply-ellipse5.svg"
                              alt=""
                            />
                          </span>
                          View Details
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="recruters-card hover-btn">
                  <div className="company-logo">
                    <span className="for-border" />
                    <img
                      src="assets/images/bg/company-logo/company-02.png"
                      alt=""
                    />
                  </div>
                  <div className="company-area">
                    <div className="name-location">
                      <h5>
                        <Link legacyBehavior href="/company-listing1">
                          <a>UI.UX Company Ltd</a>
                        </Link>
                      </h5>
                      <p><img src="assets/images/icon/person-dark.svg" alt=""/> 42 People</p>
                      <p>
                        <img
                          src="assets/images/icon/home5-location-icon.svg"
                          alt=""
                        />
                        Dhaka, Bangladesh
                      </p>
                    </div>
                    <div className="apply-btn">
                      <Link legacyBehavior href="/company-details">
                        <a>
                          <span>
                            <img
                              src="assets/images/icon/apply-ellipse5.svg"
                              alt=""
                            />
                          </span>
                          View Details
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="recruters-card hover-btn">
                  <div className="company-logo">
                    <span className="for-border" />
                    <img
                      src="assets/images/bg/company-logo/company-03.png"
                      alt=""
                    />
                  </div>
                  <div className="company-area">
                    <div className="name-location">
                      <h5>
                        <Link legacyBehavior href="/company-listing1">
                          <a>Norland Company</a>
                        </Link>
                      </h5>

                      <p><img src="assets/images/icon/person-dark.svg" alt=""/> 47 People</p>
                      <p>
                        <img
                          src="assets/images/icon/home5-location-icon.svg"
                          alt=""
                        />
                        New-York, USA
                      </p>
                    </div>
                    <div className="apply-btn">
                      <Link legacyBehavior href="/company-details">
                        <a>
                          <span>
                            <img
                              src="assets/images/icon/apply-ellipse5.svg"
                              alt=""
                            />
                          </span>
                          View Details
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="recruters-card hover-btn">
                  <div className="company-logo">
                    <span className="for-border" />
                    <img
                      src="assets/images/bg/company-logo/company-04.png"
                      alt=""
                    />
                  </div>
                  <div className="company-area">
                    <div className="name-location">
                      <h5>
                        <Link legacyBehavior href="/company-listing1">
                          <a>Germain Group Ltd</a>
                        </Link>
                      </h5>
                      <p><img src="assets/images/icon/person-dark.svg" alt=""/> 47 People</p>
                      <p>
                        <img
                          src="assets/images/icon/home5-location-icon.svg"
                          alt=""
                        />
                        Dhaka, Bangladesh
                      </p>
                    </div>
                    <div className="apply-btn">
                      <Link legacyBehavior href="/company-details">
                        <a>
                          <span>
                            <img
                              src="assets/images/icon/apply-ellipse5.svg"
                              alt=""
                            />
                          </span>
                          View Details
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="recruters-card hover-btn">
                  <div className="company-logo">
                    <span className="for-border" />
                    <img
                      src="assets/images/bg/company-logo/company-05.png"
                      alt=""
                    />
                  </div>
                  <div className="company-area">
                    <div className="name-location">
                      <h5>
                        <Link legacyBehavior href="/company-listing1">
                          <a>Tech-Bath Company</a>
                        </Link>
                      </h5>
                      <p><img src="assets/images/icon/person-dark.svg" alt=""/> 76 People</p>
                      <p>
                        <img
                          src="assets/images/icon/home5-location-icon.svg"
                          alt=""
                        />
                        Sylhet, Bangladesh
                      </p>
                    </div>
                    <div className="apply-btn">
                      <Link legacyBehavior href="/company-details">
                        <a>
                          <span>
                            <img
                              src="assets/images/icon/apply-ellipse5.svg"
                              alt=""
                            />
                          </span>
                          View Details
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="recruters-card hover-btn">
                  <div className="company-logo">
                    <span className="for-border" />
                    <img
                      src="assets/images/bg/company-logo/company-06.png"
                      alt=""
                    />
                  </div>
                  <div className="company-area">
                    <div className="name-location">
                      <h5>
                        <Link legacyBehavior href="/company-listing1">
                          <a>Bistro.Hub Ltd</a>
                        </Link>
                      </h5>
                      <p><img src="assets/images/icon/person-dark.svg" alt=""/> 36 People</p>
                      <p>
                        <img
                          src="assets/images/icon/home5-location-icon.svg"
                          alt=""
                        />
                        Chicago, Australia
                      </p>
                    </div>
                    <div className="apply-btn">
                      <Link legacyBehavior href="/company-details">
                        <a>
                          <span>
                            <img
                              src="assets/images/icon/apply-ellipse5.svg"
                              alt=""
                            />
                          </span>
                          View Details
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="recruters-card hover-btn">
                  <div className="company-logo">
                    <span className="for-border" />
                    <img
                      src="assets/images/bg/company-logo/company-07.png"
                      alt=""
                    />
                  </div>
                  <div className="company-area">
                    <div className="name-location">
                      <h5>
                        <Link legacyBehavior href="/company-listing1">
                          <a>Neuro Science Ltd</a>
                        </Link>
                      </h5>
                      <p><img src="assets/images/icon/person-dark.svg" alt=""/> 26 People</p>
                      <p>
                        <img
                          src="assets/images/icon/home5-location-icon.svg"
                          alt=""
                        />
                        Dhaka, Bangladesh
                      </p>
                    </div>
                    <div className="apply-btn">
                      <Link legacyBehavior href="/company-details">
                        <a>
                          <span>
                            <img
                              src="assets/images/icon/apply-ellipse5.svg"
                              alt=""
                            />
                          </span>
                          View Details
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="recruters-card hover-btn">
                  <div className="company-logo">
                    <span className="for-border" />
                    <img
                      src="assets/images/bg/company-logo/company-08.png"
                      alt=""
                    />
                  </div>
                  <div className="company-area">
                    <div className="name-location">
                      <h5>
                        <Link legacyBehavior href="/company-listing1">
                          <a>Wiestrong Industry</a>
                        </Link>
                      </h5>
                      <p><img src="assets/images/icon/person-dark.svg" alt=""/> 56 People</p>
                      <p>
                        <img
                          src="assets/images/icon/home5-location-icon.svg"
                          alt=""
                        />
                        New-York, USA
                      </p>
                    </div>
                    <div className="apply-btn">
                      <Link legacyBehavior href="/company-details">
                        <a>
                          <span>
                            <img
                              src="assets/images/icon/apply-ellipse5.svg"
                              alt=""
                            />
                          </span>
                          View Details
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="recruters-card hover-btn">
                  <div className="company-logo">
                    <span className="for-border" />
                    <img
                      src="assets/images/bg/company-logo/company-01.png"
                      alt=""
                    />
                  </div>
                  <div className="company-area">
                    <div className="name-location">
                      <h5>
                        <Link legacyBehavior href="/company-listing1">
                          <a>New Sky-Mistro</a>
                        </Link>
                      </h5>
                      <p><img src="assets/images/icon/person-dark.svg" alt=""/> 18 People</p>
                      <p>
                        <img
                          src="assets/images/icon/home5-location-icon.svg"
                          alt=""
                        />
                        New-York, USA
                      </p>
                    </div>
                    <div className="apply-btn">
                      <Link legacyBehavior href="/company-details">
                        <a>
                          <span>
                            <img
                              src="assets/images/icon/apply-ellipse5.svg"
                              alt=""
                            />
                          </span>
                          View Details
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="recruters-card hover-btn">
                  <div className="company-logo">
                    <span className="for-border" />
                    <img
                      src="assets/images/bg/company-logo/company-02.png"
                      alt=""
                    />
                  </div>
                  <div className="company-area">
                    <div className="name-location">
                      <h5>
                        <Link legacyBehavior href="/company-listing1">
                          <a>UI.UX Company Ltd</a>
                        </Link>
                      </h5>
                      <p><img src="assets/images/icon/person-dark.svg" alt=""/> 19 People</p>
                      <p>
                        <img
                          src="assets/images/icon/home5-location-icon.svg"
                          alt=""
                        />
                        Dhaka, Bangladesh
                      </p>
                    </div>
                    <div className="apply-btn">
                      <Link legacyBehavior href="/company-details">
                        <a>
                          <span>
                            <img
                              src="assets/images/icon/apply-ellipse5.svg"
                              alt=""
                            />
                          </span>
                          View Details
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="recruters-card hover-btn">
                  <div className="company-logo">
                    <span className="for-border" />
                    <img
                      src="assets/images/bg/company-logo/company-03.png"
                      alt=""
                    />
                  </div>
                  <div className="company-area">
                    <div className="name-location">
                      <h5>
                        <Link legacyBehavior href="/company-listing1">
                          <a>Norland Company</a>
                        </Link>
                      </h5>
                      <p><img src="assets/images/icon/person-dark.svg" alt=""/> 98 People</p>
                      <p>
                        <img
                          src="assets/images/icon/home5-location-icon.svg"
                          alt=""
                        />
                        New-York, USA
                      </p>
                    </div>
                    <div className="apply-btn">
                      <Link legacyBehavior href="/company-details">
                        <a>
                          <span>
                            <img
                              src="assets/images/icon/apply-ellipse5.svg"
                              alt=""
                            />
                          </span>
                          View Details
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="recruters-card hover-btn">
                  <div className="company-logo">
                    <span className="for-border" />
                    <img
                      src="assets/images/bg/company-logo/company-04.png"
                      alt=""
                    />
                  </div>
                  <div className="company-area">
                    <div className="name-location">
                      <h5>
                        <Link legacyBehavior href="/company-listing1">
                          <a>Germain Group Ltd</a>
                        </Link>
                      </h5>
                      <p><img src="assets/images/icon/person-dark.svg" alt=""/> 86 People</p>
                      <p>
                        <img
                          src="assets/images/icon/home5-location-icon.svg"
                          alt=""
                        />
                        Dhaka, Bangladesh
                      </p>
                    </div>
                    <div className="apply-btn">
                      <Link legacyBehavior href="/company-details">
                        <a>
                          <span>
                            <img
                              src="assets/images/icon/apply-ellipse5.svg"
                              alt=""
                            />
                          </span>
                          View Details
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home5TopRecruiters;
