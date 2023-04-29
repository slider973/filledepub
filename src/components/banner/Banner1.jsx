import React, { useState } from "react";
import CountUp from "react-countup";
import Select from "react-select";
function Banner1() {
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
  // default Warning Error hide
  console.log = console.warn = console.error = () => {};
  return (
    <div className="hero1" suppressHydrationWarning>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="hero-content">
              <h1>
                Your Career’s <span>&nbsp;Opportunity.</span>
              </h1>
              <p>
                <span>2400</span> Peoples are daily search in this portal,&nbsp;
                <span>100</span> user added job portal!
              </p>
              <div className="counter-area">
                <div className="row g-lg-4 g-md-5 gy-5 justify-content-center">
                  <div className="col-lg-3 col-sm-6">
                    <div className="counter-single">
                      <div className="counter-icon">
                        <img src="assets/images/icon/job2.svg" alt="image" />
                      </div>
                      <div className="coundown">
                        <p>Live Jobs</p>
                        <div className="d-flex align-items-center gap-2">
                          <h3 className="odometer">
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
                  <div className="col-lg-3 col-sm-6">
                    <div className="counter-single">
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
                            <CountUp
                              start={0}
                              end={804}
                              enableScrollSpy={true}
                              duration={3}
                            />
                          </h3>
                          <span>+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="counter-single">
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
                            <CountUp
                              start={0}
                              enableScrollSpy={true}
                              end={500}
                              duration={3}
                            />
                          </h3>
                          <span>+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="counter-single">
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
                            <CountUp
                              enableScrollSpy={true}
                              start={0}
                              end={102}
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
                    <button type="submit" className="primry-btn-2 ">
                      <img src="assets/images/icon/search-icon.svg" alt="" />{" "}
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner1;
