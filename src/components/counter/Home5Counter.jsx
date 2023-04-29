import React from "react";
import CountUp from "react-countup";
function Home5Counter() {
  return (
    <>
      <div className="home5-counter-area mb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="counter-wrapper">
                <div className="counter-single one">
                  <div className="counter-icon">
                    <img src="assets/images/icon/home5-counter-1.svg" alt="" />
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
                <div className="counter-single">
                  <div className="counter-icon">
                    <img src="assets/images/icon/home5-counter-2.svg" alt="" />
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
                <div className="counter-single">
                  <div className="counter-icon">
                    <img src="assets/images/icon/home5-counter-3.svg" alt="" />
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
                <div className="counter-single">
                  <div className="counter-icon">
                    <img src="assets/images/icon/home5-counter-4.svg" alt="" />
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
      </div>
    </>
  );
}

export default Home5Counter;
