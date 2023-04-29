import Link from "next/link";
import React, { useState } from "react";
import Select from "react-select";
function Banner4() {
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
    <div className="hero4">
      <div className="scroll-down-btn">
        <a href="#home4-category">Scroll Down</a>
      </div>
      <div className="hero-wapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-7 col-lg-12 d-flex align-items-center">
              <div className="hero-content">
                <h1>
                  To The Make Sure Job <span>Opportunity.</span>
                </h1>
                <p>
                  <span>2400</span> Peoples are daily search in this portal,{" "}
                  <span>100</span> user added job portal!
                </p>
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
                        placeholder="Select"
                      />
                    </div>
                    <div className="form-inner">
                      <button type="submit" className="primry-btn-2 ">
                        <img src="assets/images/icon/search-icon.svg" alt="" />{" "}
                        24 Jobs
                      </button>
                    </div>
                  </form>
                </div>
                <div className="suggest-tag">
                  <h6>
                    <i className="bi bi-bookmark-fill" />
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
            <div className="col-xl-5 col-lg-6 d-flex jsutify-content-end">
              <div className="hero-img-wrap">
                <div className="banner-vector">
                  <img
                    className="star-banner-4"
                    src="assets/images/icon/star-banner-4.svg"
                    alt=""
                  />
                  <img
                    className="banner4-vec-1"
                    src="assets/images/icon/banner4-vec-2.svg"
                    alt=""
                  />
                </div>
                <div className="banner-right">
                  <img
                    className="banner4-vec-2"
                    src="assets/images/icon/banner4-vec-1.svg"
                    alt=""
                  />
                  <div className="hero-img">
                    <img
                      className="img-fluid"
                      src="assets/images/bg/h4-banner-img.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner4;
