import Link from "next/link";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import Select from "react-select";
function Banner5() {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: "1", label: "UI/UX" },
    { value: "2", label: "Marketing Coordinator" },
    { value: "3", label: "Medical Assistant" },
    { value: "4", label: "Project Manager" },
    { value: "5", label: "Librarian" },
    { value: "6", label: "Account Executive" },
  ];
  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      width: state.selectProps.width,
      borderBottom: "1px dotted pink",
      color: state.selectProps.menuColor,
      padding: 5,
      zIndex: 2,
    }),
    control: (provided) => ({
      ...provided,
      height: 16,
      width: "100%",
      maxWidth: "450px",
      marginTop: "-5px",
      paddingRight: 5,
      border: "0px solid red",
      fontSize: 15,
      fontWeight: "500",
      backgroundColor: "none",
      outline: "none",
      boxShadow: "none",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#061421",
      fontWeight: "400",
    }),
    container: (provided) => ({
      ...provided,
      // paddingLeft: 55,
      // marginTop: -12,
    }),

    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#00a7ac",
    }),
  };
  return (
    <>
      <div className="hero5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7">
              <div className="hero-left">
                <div className="hero-content">
                  <h1>
                    Find Your &nbsp;<span>Dream Jobs</span> With Based On Your
                    Skills
                  </h1>
                  <p>
                    Jobs are available on your skills, perfect jobs to make
                    bright future &amp; get your choose jobs become a strong.
                  </p>
                </div>
                <div className="job-search-area">
                  <form>
                    <div className="form-inner job-title">
                      <input type="text" placeholder="Job Title" />
                    </div>
                    <div className="form-inner category">
                      <Select
                        theme={(theme) => ({
                          ...theme,
                          borderRadius: 0,
                          padding: 0,
                          colors: {
                            ...theme.colors,
                            primary25: "#f6f6f6",
                            primary: "#00a7ac",
                          },
                        })}
                        styles={customStyles}
                        components={{
                          IndicatorSeparator: () => null,
                        }}
                        width="250px"
                        menuColor="#333"
                        defaultValue={selectedOption}
                        options={options}
                        placeholder="Select Category"
                      />
                    </div>
                    <div className="form-inner">
                      <button type="submit" className="primry-btn-3 ">
                        Search
                      </button>
                    </div>
                  </form>
                </div>
                <div className="suggest-tag">
                  <h6>
                    <img
                      src="assets/images/icon/candidates-dashboard/bookmark4.svg"
                      alt=""
                    />{" "}
                    Suggested Tag:
                  </h6>
                  <ul>
                    <li>
                      <Link legacyBehavior href="/job-listing1">
                        <a>Engineering,</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/job-listing1">
                        <a>Marketing,</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/job-listing1">
                        <a>UI/UX Design,</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/job-listing1">
                        <a>Data Analyst,</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/job-listing1">
                        <a>Programming</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-5 d-flex jsutify-content-end">
              <div className="hero-right">
                <div className="hero-img1">
                  <img
                    className="img-fluid"
                    src="assets/images/bg/h5-hero-img1.png"
                    alt=""
                  />
                  <div className="vector">
                    <img src="assets/images/icon/h5-hero-vec-01.svg" alt="" />
                  </div>
                </div>
                <div className="hero-img-group">
                  <div className="hero-img2">
                    <img
                      className="img-fluid"
                      src="assets/images/bg/h5-hero-img2.png"
                      alt=""
                    />
                  </div>
                  <div className="hero-img3">
                    <img
                      className="img-fluid"
                      src="assets/images/bg/h5-hero-img3.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="advertis-area mb-120">
        <Marquee pauseOnHover={true}>
          <h4 className="marquee_text">
            <img src="assets/images/icon/home5-marquee-icon.svg" alt="" />
            <a href="#">TO GET YOUR DREAM JOBS</a>
            <img src="assets/images/icon/home5-marquee-icon.svg" alt="" />
            <a href="#">GET 15% OFF ON SUBSCRIPTION PLAN</a>
            <img src="assets/images/icon/home5-marquee-icon.svg" alt="" />
            <a href="#">TOP CATEGORY JOBS AVAILABLE</a>
            <img src="assets/images/icon/home5-marquee-icon.svg" alt="" />
            <a href="#">TO GET YOUR DREAM JOBS</a>
          </h4>{" "}
        </Marquee>
      </div>
    </>
  );
}

export default Banner5;
