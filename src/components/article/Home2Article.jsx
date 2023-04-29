import Link from "next/link";
import React from "react";

function Home2Article() {
  return (
    <div className="home2-recent-article-area mb-120">
      <div className="container">
        <div className="row mb-60">
          <div className="col-12 d-flex justify-content-center">
            <div className="section-title1 text-center">
              <h2>
                Portal Recent <span>Article</span>
              </h2>
              <p>
                To choose your trending job dream &amp; to make future bright.
              </p>
            </div>
          </div>
        </div>
        <div className="row gy-5 justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="recent-article-wrrap">
              <div className="recent-article-img">
                <img
                  className="img-fluid"
                  src="assets/images/blog/blog-img-07.png"
                  alt=""
                />
                <div className="tag">
                  <Link legacyBehavior href="/blog-grid">
                    <a className="primry-btn-2">Medical</a>
                  </Link>
                </div>
              </div>
              <div className="recent-article-content">
                <div className="recent-article-meta">
                  <ul>
                    <li>
                      <Link legacyBehavior href="/blog-grid">
                        <a>
                          <img src="assets/images/icon/calender2.svg" alt="" />
                          June 02.2022
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/blog-grid">
                        <a>
                          <img src="assets/images/icon/user-2.svg" alt="" />
                          Mr. Rakhab
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <h4>
                  <Link legacyBehavior href="/blog-details">
                    <a>To Be Confident Your Dream &amp; Struggle About It.</a>
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="recent-article-wrrap">
              <div className="recent-article-img">
                <img
                  className="img-fluid"
                  src="assets/images/blog/blog-img-08.png"
                  alt=""
                />
                <div className="tag">
                  <Link legacyBehavior href="/blog-grid">
                    <a className="primry-btn-2">UI/UX</a>
                  </Link>
                </div>
              </div>
              <div className="recent-article-content">
                <div className="recent-article-meta">
                  <ul>
                    <li>
                      <Link legacyBehavior href="/blog-grid">
                        <a>
                          <img src="assets/images/icon/calender2.svg" alt="" />
                          June 02.2022
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/blog-grid">
                        <a>
                          <img src="assets/images/icon/user-2.svg" alt="" />
                          Mr. Rakhab
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <h4>
                  <Link legacyBehavior href="/blog-details">
                    <a> There Are So Many Resource In UI/UX Design Field. </a>
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="recent-article-wrrap">
              <div className="recent-article-img">
                <img
                  className="img-fluid"
                  src="assets/images/blog/blog-img-09.png"
                  alt=""
                />
                <div className="tag">
                  <Link legacyBehavior href="/blog-grid">
                    <a className="primry-btn-2">Technology</a>
                  </Link>
                </div>
              </div>
              <div className="recent-article-content">
                <div className="recent-article-meta">
                  <ul>
                    <li>
                      <Link legacyBehavior href="/blog-grid">
                        <a>
                          <img src="assets/images/icon/calender2.svg" alt="" />
                          June 02.2022
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/blog-grid">
                        <a>
                          {" "}
                          <img src="assets/images/icon/user-2.svg" alt="" />
                          Mr. Rakhab
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <h4>
                  <Link legacyBehavior href="/blog-details">
                    <a>
                      {" "}
                      Actual Technology To Improve &amp; Develop Your Idea.
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

export default Home2Article;
