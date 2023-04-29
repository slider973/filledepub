import { useReducer } from "react";

import Breadcrumb from "../components/common/Breadcrumb.jsx";
import Layout from "../layout/Layout";

const initialState = { count: 1 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}
function PricingPlan() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // price increment
  const increment = () => {
    dispatch({ type: "increment" });
  };
  // price decrement
  const decrement = () => {
    if (state.count > 1) {
      dispatch({ type: "decrement" });
    }
  };

  return (
    <Layout>
      <Breadcrumb pageTitle="Pricing Plan" pageName="Pricing Plan" />
      <div className="pricing-plan-area pt-120 mb-120">
        <div className="container">
          <div className="row g-4 mb-70 justify-content-center align-items-center">
            <div className="col-lg-4 col-md-6">
              <div className="pricing-plan-card1">
                <div className="pricing-plan-header">
                  <div className="starting-form">
                    <span>
                      <img src="assets/images/icon/price-star.svg" alt="" />{" "}
                      Starting From
                    </span>
                  </div>
                  <div className="preview-btn">
                    <a href="#">Preview Sample</a>
                  </div>
                </div>
                <div className="price-area">
                  <h3>
                    $20 / <span>Per Job +VAT</span>
                  </h3>
                </div>
                <ul className="priceing-list">
                  <li>
                    <div className="icon">
                      <img src="assets/images/icon/check-icon.svg" alt="" />
                    </div>
                    <p>You can create more job post.</p>
                  </li>
                  <li>
                    <div className="icon">
                      <img src="assets/images/icon/check-icon.svg" alt="" />
                    </div>
                    <p>Resume and cover letter review and editing services.</p>
                  </li>
                  <li>
                    <div className="icon">
                      <img src="assets/images/icon/check-icon.svg" alt="" />
                    </div>
                    <p>Priority access to job listings and job seekers.</p>
                  </li>
                  <li>
                    <div className="icon">
                      <img src="assets/images/icon/check-icon.svg" alt="" />
                    </div>
                    <p>
                      Job displayed for &nbsp;<span>35 days.</span>
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <img src="assets/images/icon/check-icon.svg" alt="" />
                    </div>
                    <p>A dedicated account manager or career counselor.</p>
                  </li>
                  <li>
                    <div className="icon">
                      <img src="assets/images/icon/check-icon.svg" alt="" />
                    </div>
                    <p>
                      <span>Premium</span>&nbsp; support always.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="pricing-plan-card2">
                <h4>Select An Add-On</h4>
                <div className="scrolling-wrapper">
                  <div className="pricing-mathord mb-40">
                    <div className="title-and-btn">
                      <div className="title">
                        <h5>Featured Jobs</h5>
                        <h6>(Start $8 + VAT)</h6>
                      </div>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckDefault1"
                        />
                      </div>
                    </div>
                    <ul className="priceing-list">
                      <li>
                        <div className="icon">
                          <img src="assets/images/icon/check-icon.svg" alt="" />
                        </div>
                        <p>
                          You can create &nbsp;<span>4 job post.</span>
                        </p>
                      </li>
                      <li>
                        <div className="icon">
                          <img src="assets/images/icon/check-icon.svg" alt="" />
                        </div>
                        <p>
                          Resume and cover letter review and editing services.
                        </p>
                      </li>
                      <li>
                        <div className="icon">
                          <img src="assets/images/icon/check-icon.svg" alt="" />
                        </div>
                        <p>
                          Job displayed for &nbsp;<span>1 weeks.</span>
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="pricing-mathord mb-40">
                    <div className="title-and-btn">
                      <div className="title">
                        <h5>Starting + Jobs</h5>
                        <h6>(Start $10 + VAT)</h6>
                      </div>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckDefault2"
                        />
                      </div>
                    </div>
                    <ul className="priceing-list">
                      <li>
                        <div className="icon">
                          <img src="assets/images/icon/check-icon.svg" alt="" />
                        </div>
                        <p>
                          You can create &nbsp;<span>4 job post.</span>
                        </p>
                      </li>
                      <li>
                        <div className="icon">
                          <img src="assets/images/icon/check-icon.svg" alt="" />
                        </div>
                        <p>
                          Resume and cover letter review and editing services.
                        </p>
                      </li>
                      <li>
                        <div className="icon">
                          <img src="assets/images/icon/check-icon.svg" alt="" />
                        </div>
                        <p>
                          Job displayed for &nbsp;<span>1 weeks.</span>
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="pricing-mathord">
                    <div className="title-and-btn">
                      <div className="title">
                        <h5>Featured Jobs</h5>
                        <h6>(Start $8 + VAT)</h6>
                      </div>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckDefault4"
                        />
                      </div>
                    </div>
                    <ul className="priceing-list">
                      <li>
                        <div className="icon">
                          <img src="assets/images/icon/check-icon.svg" alt="" />
                        </div>
                        <p>
                          You can create &nbsp;<span>4 job post.</span>
                        </p>
                      </li>
                      <li>
                        <div className="icon">
                          <img src="assets/images/icon/check-icon.svg" alt="" />
                        </div>
                        <p>
                          Resume and cover letter review and editing services.
                        </p>
                      </li>
                      <li>
                        <div className="icon">
                          <img src="assets/images/icon/check-icon.svg" alt="" />
                        </div>
                        <p>
                          Job displayed for &nbsp;<span>1 weeks.</span>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="pricing-plan-card3">
                <h4>Order Summary</h4>
                <div className="job-qty-area">
                  <h6>Job Quantity</h6>
                  <div className="quantity d-flex align-items-center">
                    <div className="quantity-nav nice-number d-flex align-items-center">
                      <button onClick={decrement} type="button">
                        <i className="bi bi-dash"></i>
                      </button>
                      <span style={{ margin: "0 20px", fontFamily: "Cabin" }}>
                        {state.count}
                      </span>
                      <button onClick={increment} type="button">
                        <i className="bi bi-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <table>
                  <tbody>
                    <tr>
                      <td>Post jobs (02x$20)</td>
                      <td>$40</td>
                    </tr>
                    <tr>
                      <td>Featured Job </td>
                      <td>$8</td>
                    </tr>
                    <tr>
                      <td>Sub Total</td>
                      <td>$28</td>
                    </tr>
                    <tr>
                      <td>VAT (5%)</td>
                      <td>$2</td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td>= $30</td>
                    </tr>
                  </tbody>
                </table>
                <h3 className="total-price">$30</h3>
                <button className="primry-btn-2 lg-btn" type="submit">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="add-area">
                <p>
                  <span>N.B:</span> If are you never posted a job in JOBES? Get
                  15% off in your first job post.
                </p>
                <a className="primry-btn-1" href="#">
                  Get Offer
                </a>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="advertuse-area">
                <h4>Why Choose Only JOBES for your business Advertise</h4>
                <ul>
                  <li>
                    <p>
                      <span>10 thousand</span> users daily visitors
                    </p>
                  </li>
                  <li>
                    <p>Easy to post a job in this site.</p>
                  </li>
                  <li>
                    <p>
                      More than <span>5 thousand</span> CV’s in CV Bank.
                    </p>
                  </li>
                  <li>
                    <p>
                      There are more than <span>20 thousand</span> Recruiters
                      Connected here.
                    </p>
                  </li>
                  <li>
                    <p>
                      The most powerful things that <span>15 thousand</span>{" "}
                      viewers per jobs post.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default PricingPlan;
