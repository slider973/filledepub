import React from "react";
import CountUp from "react-countup";
function Home4Counter() {
  return (
    <div className="counter-area home4-counter-area mb-120">
      <div className="container">
        <div className="row g-lg-4 gy-5 justify-content-center">
          <div className="col-lg-3 col-sm-6 d-flex justify-content-center">
            <div className="counter-single">
              <div className="counter-icon">
                <img src="assets/images/icon/home4-counter-1.svg" alt="" />
              </div>
              <div className="coundown">
                <div className="d-flex align-items-center gap-2">
                  <h3 className="odometer">
                    {" "}
                    <CountUp
                      start={0}
                      end={800}
                      enableScrollSpy={true}
                      duration={3}
                    />
                  </h3>
                  <span>K+</span>
                </div>
                <p>Total Recruiters</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 d-flex justify-content-center">
            <div className="counter-single">
              <div className="counter-icon">
                <img src="assets/images/icon/home4-counter-2.svg" alt="" />
              </div>
              <div className="coundown">
                <div className="d-flex align-items-center gap-2">
                  <h3 className="odometer">
                    {" "}
                    <CountUp
                      start={0}
                      end={600}
                      enableScrollSpy={true}
                      duration={3}
                    />
                  </h3>
                  <span>K+</span>
                </div>
                <p>Daily User Visited</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 d-flex justify-content-center">
            <div className="counter-single">
              <div className="counter-icon">
                <img src="assets/images/icon/home4-counter-3.svg" alt="" />
              </div>
              <div className="coundown">
                <div className="d-flex align-items-center gap-2">
                  <h3 className="odometer">
                    {" "}
                    <CountUp
                      start={0}
                      end={10}
                      enableScrollSpy={true}
                      duration={3}
                    />
                  </h3>
                  <span>K+</span>
                </div>
                <p>Daily Job Posted</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 d-flex justify-content-center">
            <div className="counter-single">
              <div className="counter-icon">
                <img src="assets/images/icon/home4-counter-4.svg" alt="" />
              </div>
              <div className="coundown">
                <div className="d-flex align-items-center gap-2">
                  <h3 className="odometer">
                    {" "}
                    <CountUp
                      start={0}
                      end={800}
                      enableScrollSpy={true}
                      duration={3}
                    />
                  </h3>
                  <span>K+</span>
                </div>
                <p>Total Recruiters</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home4Counter;
