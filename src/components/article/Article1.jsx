import Link from "next/link";
import React from "react";

function Article1() {
  return (
    <div className="home1-article-area mb-120">
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
        <div className="row g-lg-4 gy-5 justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="recent-article-wrap">
              <div className="recent-article-img">
                <img
                  className="img-fluid"
                  src="assets/images/blog/blog-img-01.png"
                  alt=""
                />
                <div className="publish-area d-xl-none d-flex">
                  <Link legacyBehavior href="/blog-grid">
                    <a>
                      <span>02</span>March
                    </a>
                  </Link>
                </div>
              </div>
              <div className="recent-article-content">
                <div className="recent-article-meta">
                  <div className="publish-area">
                    <Link legacyBehavior href="/blog-grid">
                      <a>
                        <span>02</span>March
                      </a>
                    </Link>
                  </div>
                  <ul>
                    <li>
                      <Link legacyBehavior href="/blog-grid">
                        <a>
                          <img src="assets/images/icon/comment.svg" alt="" />
                          03 Comments
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/blog-grid">
                        <a>
                          <img src="assets/images/icon/user.svg" alt="" />
                          Mr. Jack Frank
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <h4>
                  <Link legacyBehavior href="/blog-details">
                    <a>To Make Your Smartness &amp; Catch Your Bright Dream.</a>
                  </Link>
                </h4>
                <div className="explore-btn">
                  <Link legacyBehavior href="/blog-details">
                    <a>
                      <span>
                        <img
                          src="assets/images/icon/explore-elliose.svg"
                          alt=""
                        />
                      </span>
                      Explore More
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="recent-article-wrap">
              <div className="recent-article-img">
                <img
                  className="img-fluid"
                  src="assets/images/blog/blog-img-02.png"
                  alt=""
                />
                <div className="publish-area d-xl-none d-flex">
                  <Link legacyBehavior href="/blog-grid">
                    <a>
                      <span>04</span>March
                    </a>
                  </Link>
                </div>
              </div>
              <div className="recent-article-content">
                <div className="recent-article-meta">
                  <div className="publish-area">
                    <Link legacyBehavior href="/blog-grid">
                      <a>
                        <span>04</span>March
                      </a>
                    </Link>
                  </div>
                  <ul>
                    <li>
                      <Link legacyBehavior href="/blog-grid">
                        <a>
                          <img src="assets/images/icon/comment.svg" alt="" />
                          11 Comments
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/blog-grid">
                        <a>
                          {" "}
                          <img src="assets/images/icon/user.svg" alt="" />
                          Mr. Marko jack
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <h4>
                  <Link legacyBehavior href="/blog-details">
                    <a>
                      Be Confident Your Dream &amp; Struggle About Your Bright
                      Dream
                    </a>
                  </Link>
                </h4>
                <div className="explore-btn">
                  <Link legacyBehavior href="/blog-details">
                    <a>
                      <span>
                        <img
                          src="assets/images/icon/explore-elliose.svg"
                          alt=""
                        />
                      </span>{" "}
                      Explore More
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="recent-article-wrap">
              <div className="recent-article-img">
                <img
                  className="img-fluid"
                  src="assets/images/blog/blog-img-03.png"
                  alt=""
                />
                <div className="publish-area d-xl-none d-flex">
                  <Link legacyBehavior href="/blog-grid">
                    <a>
                      <span>05 </span>March
                    </a>
                  </Link>
                </div>
              </div>
              <div className="recent-article-content">
                <div className="recent-article-meta">
                  <div className="publish-area">
                    <Link legacyBehavior href="/blog-grid">
                      <a>
                        <span>05 </span>March
                      </a>
                    </Link>
                  </div>
                  <ul>
                    <li>
                      <Link legacyBehavior href="/blog-grid">
                        <a>
                          <img src="assets/images/icon/comment.svg" alt="" />
                          02 Comments
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/blog-grid">
                        <a>
                          <img src="assets/images/icon/user.svg" alt="" />
                          Srikanto Frank
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <h4>
                  <Link legacyBehavior href="/blog-details">
                    <a>To Make Your Smartness &amp; Catch Your Bright Dream.</a>
                  </Link>
                </h4>
                <div className="explore-btn">
                  <Link legacyBehavior href="/blog-details">
                    <a>
                      <span>
                        <img
                          src="assets/images/icon/explore-elliose.svg"
                          alt=""
                        />
                      </span>{" "}
                      Explore More
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article1;
