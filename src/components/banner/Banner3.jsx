import Link from "next/link";
import React from "react";

function Banner3() {
  return (
    <div className="hero3">
      <div className="hero-wapper">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1>
                  To Choose <span>Right Jobs.</span>
                </h1>
                <p>
                  <span>2400</span> Peoples are daily search in this portal,
                  &nbsp;<span>100</span> user added job portal!
                </p>
                <div className="job-search-area">
                  <form>
                    <div className="form-inner job-title">
                      <img src="assets/images/icon/job3.svg" alt="" />
                      <input
                        type="text"
                        placeholder="What jobs are you looking for?"
                      />
                    </div>
                    <div className="form-inner">
                      <button type="submit" className="primry-btn-2">
                        <img src="assets/images/icon/search-icon.svg" alt="" />
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
                      <img src="assets/images/bg/user34.png" alt="" />
                    </li>
                    <li>
                      <img src="assets/images/bg/user35.png" alt="" />
                    </li>
                    <li>
                      <div className="total-user">
                        <h6>21k</h6>
                        <span>Users</span>
                      </div>
                    </li>
                  </ul>
                  <p>To Much People Have Connected With Us!</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-img">
                <img
                  className="img-fluid"
                  src="assets/images/bg/hero3-img-with-vec.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner3;
