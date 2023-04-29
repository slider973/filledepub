import React, { useEffect, useRef } from "react";
import CountUp from "react-countup";
function Home6Counter() {
  const targetRef = useRef(null);
  useEffect(() => {
    if (targetRef.current) {
      // Do any necessary initialization for the target element here
      // For example, you can set its initial value
      targetRef.current.innerText = "0";
    }
  }, []);
  return (
    <div className="home6-counter-area pt-120 pb-120 ml-185 mr-185">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="counter-wrapper">
              <div className="counter-single one">
                <div className="counter-icon">
                  <img src="assets/images/icon/home4-counter-1.svg" alt="" />
                </div>
                <div className="coundown">
                  <div className="d-flex align-items-center gap-2">
                    <h3 className="odometer">
                      <CountUp
                        target={targetRef.current}
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
                        target={targetRef.current}
                      />
                    </h3>
                    <span>K+</span>
                  </div>
                  <p>Daily User Visited</p>
                </div>
              </div>
              <div className="counter-single">
                <div className="counter-icon">
                  <img src="assets/images/icon/home4-counter-3.svg" alt="" />
                </div>
                <div className="coundown">
                  <div className="d-flex align-items-center gap-2">
                    <h3 className="odometer">
                      {" "}
                      <CountUp
                        target={targetRef.current}
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
                  <img src="assets/images/icon/home4-counter-4.svg" alt="" />
                </div>
                <div className="coundown">
                  <div className="d-flex align-items-center gap-2">
                    <h3 className="odometer">
                      {" "}
                      <CountUp
                        target={targetRef.current}
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
  );
}

export default Home6Counter;
