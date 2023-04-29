import Link from "next/link";
import React, { useState } from "react";
import Select from "react-select";
function Banner2() {
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
    }),

    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#00a7ac",
    }),
  };
  return (
    <div className="hero2">
      <div className="hero-wapper">
        <div className="container-fluid px-0">
          <div className="row">
            <div className="col-lg-7 d-flex align-items-center">
              <div className="hero-content">
                <h1>
                  To Choose Your Level Best&nbsp; <span>Dream Career.</span>
                </h1>
                <p>
                  <span>2400</span> Peoples are daily search in this portal,{" "}
                  <span>100</span> user added job portal!
                </p>
                <div className="job-search-area">
                  <form>
                    <div className="form-inner job-title">
                      <input
                        type="text"
                        placeholder="What jobs are you looking for?"
                      />
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
                      <button type="submit" className="primry-btn-2 ">
                        <img src="assets/images/icon/search-icon.svg" alt="" />{" "}
                        Search
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
            <div className="col-lg-5 d-flex jsutify-content-end">
              <div className="banner-image-area">
                <div className="banner-img-left">
                  <div className="banner-img1">
                    <img
                      className="img-fluid"
                      src="assets/images/bg/home2-banner-01.png"
                      alt=""
                    />
                  </div>
                  <div className="banner-img2">
                    <img
                      className="img-fluid"
                      src="assets/images/bg/home2-banner-02.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="banner-img-center">
                  <div className="banner-img3">
                    <img
                      className="img-fluid"
                      src="assets/images/bg/home2-banner-03.png"
                      alt=""
                    />
                  </div>
                  <div className="banner-img4">
                    <div className="user-area">
                      <ul>
                        <li>
                          <img src="assets/images/bg/user31.png" alt="" />
                        </li>
                        <li>
                          <img src="assets/images/bg/user32.png" alt="" />
                        </li>
                        <li>
                          <img src="assets/images/bg/user33.png" alt="" />
                        </li>
                        <li>
                          <div className="total-user">
                            <h6>21k</h6>
                          </div>
                        </li>
                      </ul>
                      <p>Peoples Joined!</p>
                    </div>
                  </div>
                </div>
                <div className="banner-img-right">
                  <div className="banner-img5">
                    <div className="new-job-list">
                      <h3>2400+</h3>
                      <p>New Job Listed!</p>
                    </div>
                  </div>
                  <div className="banner-img6">
                    <img
                      className="img-fluid"
                      src="assets/images/bg/home2-banner-04.png"
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

export default Banner2;
