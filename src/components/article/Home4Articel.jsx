import Link from "next/link";
import React from "react";

function Home4Articel() {
  return (
    <div className="home4-recent-article-area">
      <div className="container">
        <div className="row mb-60">
          <div className="col-12 d-flex flex-wrap align-items-end justify-content-md-between justify-content-start gap-3">
            <div className="section-title1">
              <h2>
                Our Recent <span>Article</span>
              </h2>
              <p>
                To much valuable feed from our trusted users in world-wide.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center g-lg-4 gy-5">
          <div className="col-lg-4 col-md-6">
            <div className="home4-recent-article-wrap">
              <div className="recent-article-img">
                <img
                  className="img-fluid"
                  src="assets/images/blog/log-img-41.png"
                  alt=""
                />
              </div>
              <div className="recent-article-content">
                <div className="recent-article-meta">
                  <div className="date">
                    <Link legacyBehavior href="/blog-grid">
                      <a className="primry-btn-2">05 January, 2023</a>
                    </Link>
                  </div>
                  <div className="author">
                    <Link legacyBehavior href="/blog-grid">
                      <a>
                        <img src="assets/images/icon/user-2.svg" alt="" />
                        Mr. Rakhab
                      </a>
                    </Link>
                  </div>
                </div>
                <h4>
                  <Link legacyBehavior href="/blog-details">
                    <a>
                      To Be Continue Redesign &amp; Build Up Your Career
                      Opportunity.{" "}
                    </a>
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="home4-recent-article-wrap">
              <div className="recent-article-img">
                <img
                  className="img-fluid"
                  src="assets/images/blog/log-img-42.png"
                  alt=""
                />
              </div>
              <div className="recent-article-content">
                <div className="recent-article-meta">
                  <div className="date">
                    <Link legacyBehavior href="/blog-grid">
                      <a className="primry-btn-2">05 March, 2023</a>
                    </Link>
                  </div>
                  <div className="author">
                    <Link legacyBehavior href="/blog-grid">
                      <a>
                        {" "}
                        <img src="assets/images/icon/user-2.svg" alt="" />
                        Mr. Rakhab
                      </a>
                    </Link>
                  </div>
                </div>
                <h4>
                  <Link legacyBehavior href="/blog-details">
                    <a>
                      To Make Your Smartness &amp; Speak To Smartly In
                      Interviewing.
                    </a>
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="home4-recent-article-wrap">
              <div className="recent-article-img">
                <img
                  className="img-fluid"
                  src="assets/images/blog/log-img-43.png"
                  alt=""
                />
              </div>
              <div className="recent-article-content">
                <div className="recent-article-meta">
                  <div className="date">
                    <Link legacyBehavior href="/blog-grid">
                      <a className="primry-btn-2">07 January,2023</a>
                    </Link>
                  </div>
                  <div className="author">
                    <Link legacyBehavior href="/blog-grid">
                      <a>
                        {" "}
                        <img src="assets/images/icon/user-2.svg" alt="" />
                        Mr. Rakhab
                      </a>
                    </Link>
                  </div>
                </div>
                <h4>
                  <Link legacyBehavior href="/blog-details">
                    <a>
                      How To Improve Your Skills &amp; Speak Fluently Any Job
                      Viva.
                    </a>
                  </Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home4Articel;
