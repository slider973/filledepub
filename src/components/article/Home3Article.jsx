import Link from "next/link";
import React from "react";

function Home3Article() {
  return (
    <div className="home3-recent-article-area mb-120">
      <div className="container">
        <div className="row mb-60">
          <div className="col-12 d-flex justify-content-center gap-3">
            <div className="section-title1 text-center">
              <h2>
                Our Recent <span>Article</span>
              </h2>
              <p>To much valuable feed from our trusted users in world-wide.</p>
            </div>
          </div>
        </div>
        <div className="row g-4 gy-5 justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="recent-article-card3">
              <div className="article-img">
                <img
                  className="img-fluid"
                  src="assets/images/blog/blog-img-31.png"
                  alt=""
                />
              </div>
              <div className="article-content">
                <div className="article-category">
                  <Link legacyBehavior href="/blog-grid">
                    <a className="primry-btn-2">Marketing</a>
                  </Link>
                </div>
                <h4>
                  <Link legacyBehavior href="/blog-details">
                    <a>
                      How To Apply Your Dream Jobs In Digital Marketing, Easy
                      Solution.
                    </a>
                  </Link>
                </h4>
                <div className="author-and-btn">
                  <div className="author-area">
                    <div className="author-img">
                      <img src="assets/images/blog/blog-author-31.png" alt="" />
                    </div>
                    <div className="author-details">
                      <h6>
                        <Link legacyBehavior href="/blog-grid">
                          <a>Roland Khelcy</a>
                        </Link>
                      </h6>
                      <span>Admin</span>
                    </div>
                  </div>
                  <div className="apply-btn">
                    <Link legacyBehavior href="/blog-details">
                      <a>
                        <span>
                          <img
                            src="assets/images/icon/apply-ellipse.svg"
                            alt=""
                          />
                        </span>
                        View Details
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="recent-article-card3">
              <div className="article-img">
                <img
                  className="img-fluid"
                  src="assets/images/blog/blog-img-32.png"
                  alt=""
                />
              </div>
              <div className="article-content">
                <div className="article-category">
                  <Link legacyBehavior href="/blog-grid">
                    <a className="primry-btn-2">Design</a>
                  </Link>
                </div>
                <h4>
                  <Link legacyBehavior href="/blog-details">
                    <a>
                      To Be Continue Redesign &amp; Build Up Your Career
                      Opportunity.
                    </a>
                  </Link>
                </h4>
                <div className="author-and-btn">
                  <div className="author-area">
                    <div className="author-img">
                      <img src="assets/images/blog/blog-author-32.png" alt="" />
                    </div>
                    <div className="author-details">
                      <h6>
                        <Link legacyBehavior href="/blog-grid">
                          <a>Mrs. Rudhela Saley</a>
                        </Link>
                      </h6>
                      <span>Admin</span>
                    </div>
                  </div>
                  <div className="apply-btn">
                    <Link legacyBehavior href="/blog-details">
                      <a>
                        <span>
                          <img
                            src="assets/images/icon/apply-ellipse.svg"
                            alt=""
                          />
                        </span>
                        View Details
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="recent-article-card3">
              <div className="article-img">
                <img
                  className="img-fluid"
                  src="assets/images/blog/blog-img-33.png"
                  alt=""
                />
              </div>
              <div className="article-content">
                <div className="article-category">
                  <Link legacyBehavior href="/blog-grid">
                    <a className="primry-btn-2">Technology</a>
                  </Link>
                </div>
                <h4>
                  <Link legacyBehavior href="/blog-details">
                    <a>
                      If You Are A talented People, Make Sure Your Technology
                      Part.
                    </a>
                  </Link>
                </h4>
                <div className="author-and-btn">
                  <div className="author-area">
                    <div className="author-img">
                      <img src="assets/images/blog/blog-author-33.png" alt="" />
                    </div>
                    <div className="author-details">
                      <h6>
                        <Link legacyBehavior href="/blog-grid">
                          <a>Martoniey Sekh</a>
                        </Link>
                      </h6>
                      <span>Admin</span>
                    </div>
                  </div>
                  <div className="apply-btn">
                    <Link legacyBehavior href="/blog-details">
                      <a>
                        <span>
                          <img
                            src="assets/images/icon/apply-ellipse.svg"
                            alt=""
                          />
                        </span>
                        View Details
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home3Article;
