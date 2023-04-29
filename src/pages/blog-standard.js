import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import CategoryWidget from "../components/blog/CategoryWidget";
import RecentPostWidget from "../components/blog/RecentPostWidget";
import TagWidget from "../components/blog/TagWidget";
import Breadcrumb from "../components/common/Breadcrumb";
import bolgStandardData from "../data/blogGridData.json";
import Layout from "../layout/Layout";
import SearchWidget from "../layout/SearchWidget";
function BlogStandard() {
  const currentPage = useRouter().pathname;
  useEffect(() => {
    document.body.className =
      currentPage === "/blog-standard" ? "bg-wight" : "";
  });
  return (
    <Layout>
      <Breadcrumb pageName="Blog Standard" pageTitle="Blog Standard" />
      <div className="blog-standard-area pt-120 mb-120">
        <div className="container">
          <div className="row g-lg-4 gy-5 justify-content-center">
            <div className="col-lg-8">
              <div className="row g-lg-4 gy-5 justify-content-center">
                {bolgStandardData.slice(0, 3).map((item) => {
                  const {
                    id,
                    date_day,
                    date_month,
                    post_author,
                    comment_number,
                    standard_img,
                    standard_post_title,
                    standard_post_description,
                  } = item;
                  return (
                    <div key={id} className="col-md-12 mb-30">
                      <div className="recent-article-wrap">
                        <div className="recent-article-img">
                          <img
                            className="img-fluid"
                            src={standard_img}
                            alt=""
                          />
                          <div className="publish-area d-xl-none d-flex">
                            <Link legacyBehavior href="/blog-right-sidebar">
                              <a>
                                <span>{date_day}</span>
                                {date_month}
                              </a>
                            </Link>
                          </div>
                        </div>
                        <div className="recent-article-content">
                          <div className="recent-article-meta">
                            <div className="publish-area">
                              <Link legacyBehavior href="/blog-right-sidebar">
                                <a>
                                  <span>{date_day}</span>
                                  {date_month}
                                </a>
                              </Link>
                            </div>
                            <ul>
                              <li>
                                <Link legacyBehavior href="/blog-right-sidebar">
                                  <a>
                                    <img
                                      src="assets/images/icon/comment.svg"
                                      alt=""
                                    />
                                    {comment_number} Comments
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <Link legacyBehavior href="/blog-right-sidebar">
                                  <a>
                                    <img
                                      src="assets/images/icon/user.svg"
                                      alt=""
                                    />
                                    {post_author}
                                  </a>
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <h3>
                            <Link legacyBehavior href="/blog-details">
                              <a>{standard_post_title}</a>
                            </Link>
                          </h3>
                          <p>{standard_post_description}</p>
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
                  );
                })}

                <div className="col-lg-12">
                  <div className="pagination-area">
                    <nav aria-label="...">
                      <ul className="pagination">
                        <li className="page-item disabled">
                          <a className="page-link" href="#" tabIndex={-1} />
                        </li>
                        <li className="page-item active" aria-current="page">
                          <a className="page-link" href="#">
                            01
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            02
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            03
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#" />
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="job-sidebar mb-50">
                <SearchWidget />
                <CategoryWidget />
                <RecentPostWidget />
                <TagWidget />
              </div>
              <div className="job-card">
                <div className="job-content">
                  <h5>Hey! Do You Looking For Any Jobs?</h5>
                  <p>
                    Job agencies may also offer additional services such as
                    resume building.
                  </p>
                  <div className="find-job-btn">
                    <Link legacyBehavior href="/blog-details">
                      <a className="primry-btn-2 lg-btn">Find Job</a>
                    </Link>
                  </div>
                </div>
                <div className="job-img">
                  <img src="assets/images/blog/find-job.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BlogStandard;
