import Link from "next/link";
import React, { useState } from "react";
import Select from "react-select";
function Banner6() {
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
      paddingLeft: -3,
      textAlign: "left",
      marginTop: -20,
    }),

    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#00a7ac",
    }),
  };
  return (
    <div className="hero6">
      <div className="hero-wapper">
        <div className="scroll-btn">
          <a href="#home6-category-area">
            <img src="assets/images/icon/home6-scroll-icon.svg" alt="" />
          </a>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero-content">
                <h1>
                  1020+ &nbsp;<span>Category</span> Job’s Here
                </h1>
                <p>
                  Jobs are available on your skills, perfect jobs to make bright
                  future &amp; get your choose jobs become a strong.{" "}
                </p>
                <div className="job-search-area">
                  <form>
                    <div className="form-inner job-title">
                      <input
                        type="text"
                        placeholder="What jobs are you looking for?"
                      />
                    </div>
                    <div className="form-inner location">
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
                      <button type="submit" className="primry-btn-5 ">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner6;
