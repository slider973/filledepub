import Link from "next/link";
import React from "react";
import CategoryWidget from "../components/blog/CategoryWidget";
import RecentPostWidget from "../components/blog/RecentPostWidget";
import TagWidget from "../components/blog/TagWidget";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../layout/Layout";
import SearchWidget from "../layout/SearchWidget";

function blogDetails() {
  return (
    <Layout>
      <Breadcrumb pageName="Blog Details" pageTitle="Blog Details" />
      <div className="blog-details-area pt-120 mb-120">
        <div className="container">
          <div className="row g-lg-4 gy-5 justify-content-center">
            <div className="col-lg-8">
              <div className="blog-details-wrap">
                <div className="recent-article-img">
                  <img
                    className="img-fluid"
                    src="assets/images/blog/blog-dt-img.png"
                    alt=""
                  />
                  <div className="publish-area d-xl-none d-flex">
                    <a href="#">
                      <span>12</span>June
                    </a>
                  </div>
                </div>
                <div className="recent-article-content">
                  <div className="recent-article-meta">
                    <div className="publish-area">
                      <a href="#">
                        <span>12</span>June
                      </a>
                    </div>
                    <ul>
                      <li>
                        <a href="#">
                          <img src="assets/images/icon/comment.svg" alt="" />
                          07 Comments
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="assets/images/icon/user.svg" alt="" />
                          Mr. Rakhab
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h2>
                    How To Improve Your Interview Question &amp; Easy Answering
                    Step By Step.{" "}
                  </h2>
                  <div className="for-devider" />
                  <p>
                    <span>A</span> n interview blog is a type of blog that
                    focuses on conducting and publishing interviews with
                    experts, thought leaders, or individuals with unique
                    experiences or perspectives. Interview blogs can cover a
                    wide range of topics and industries, and are often used to
                    share insights, advice, and personal stories with a wider
                    audience. It's important to have a consistent and engaging
                    style to post, and also consider the audience you are
                    writing for, in terms of language and technical terms used.
                  </p>
                  <h4>How To Improve Your Job Interview </h4>
                  <ul className="interview-trips">
                    <li>
                      <div className="icon">
                        <img src="assets/images/icon/check-icon.svg" alt="" />
                      </div>
                      <p>
                        <span>Prepare for the interview:</span> Research the
                        company and the position you are applying for, as well
                        as the person you will be interviewing with. Prepare a
                        list of questions you would like to interview.
                      </p>
                    </li>
                    <li>
                      <div className="icon">
                        <img src="assets/images/icon/check-icon.svg" alt="" />
                      </div>
                      <p>
                        <span>Dress professionally:</span> Make sure you are
                        dressed appropriately for the interview. Business attire
                        is usually the best option.
                      </p>
                    </li>
                    <li>
                      <div className="icon">
                        <img src="assets/images/icon/check-icon.svg" alt="" />
                      </div>
                      <p>
                        <span>Arrive on time:</span> It is important to arrive
                        at the interview on time. If you are running late, be
                        sure to call and let the interviewer know.
                      </p>
                    </li>
                    <li>
                      <div className="icon">
                        <img src="assets/images/icon/check-icon.svg" alt="" />
                      </div>
                      <p>
                        <span>Greet the interviewer:</span> Shake hands with the
                        interviewer and introduce yourself. Make sure to use
                        their name and to maintain eye contact.
                      </p>
                    </li>
                  </ul>
                  <div className="row g-4">
                    <div className="col-sm-6">
                      <div className="blog-dt-img">
                        <img
                          className="img-fluid"
                          src="assets/images/blog/blog-dt-img2.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="blog-dt-img">
                        <img
                          className="img-fluid"
                          src="assets/images/blog/blog-dt-img3.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="blog-tag-social-area">
                    <div className="bolg-tag">
                      <h6>Tag:</h6>
                      <ul>
                        <li>
                          <Link legacyBehavior href="/blog-grid">
                            <a>Job,</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/blog-grid">
                            <a>Career,</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/blog-grid">
                            <a>UI/UX Design,</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/blog-grid">
                            <a>Job Research</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="social-area">
                      <h6>Share:</h6>
                      <ul className="social-link d-flex align-items-center">
                        <li>
                          <a href="https://www.facebook.com/">
                            <i className="bx bxl-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com/">
                            <i className="bx bxl-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.pinterest.com/">
                            <i className="bx bxl-linkedin" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/">
                            <i className="bx bxl-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="next-prev-pages-area mb-120">
                <div className="previous-area next-area">
                  <Link legacyBehavior href="/blog-details">
                    <a>
                      <div className="icon">
                        <svg
                          width={9}
                          height={16}
                          viewBox="0 0 9 16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M7.63732 -9.53674e-07V-9.53674e-07C8.39992 0.798807 8.39992 2.05596 7.63732 2.85477L2.72535 8L7.63732 13.1452C8.39992 13.944 8.39992 15.2012 7.63732 16V16L0 8L7.63732 -9.53674e-07Z" />
                        </svg>
                      </div>
                      <div className="btn-wrap">
                        <img
                          src="assets/images/blog/blog-prev-img.png"
                          alt=""
                        />
                        <span>Previous Post</span>
                      </div>
                    </a>
                  </Link>
                </div>
                <div className="previous-area next-area two">
                  <Link legacyBehavior href="/blog-details">
                    <a>
                      <div className="btn-wrap">
                        <span>Next Post</span>
                        <img
                          src="assets/images/blog/blog-prev-img.png"
                          alt=""
                        />
                      </div>
                      <div className="icon">
                        <svg
                          width={9}
                          height={16}
                          viewBox="0 0 9 16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M1.36268 16C0.600082 15.2012 0.600083 13.944 1.36268 13.1452L6.27465 8L1.36268 2.85477C0.600083 2.05597 0.600082 0.798808 1.36268 0L9 8L1.36268 16Z" />
                        </svg>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="post-comment-area mb-120">
                <div className="post-title">
                  <h5>02 Comments:</h5>
                </div>
                <ul>
                  <li>
                    <div className="single-comment-area">
                      <div className="author-img">
                        <img
                          src="assets/images/blog/comment-author1.png"
                          alt=""
                        />
                      </div>
                      <div className="comment-content">
                        <div className="author-details">
                          <div className="author-name-deg">
                            <h6>Loiuse Brown,</h6>
                            <span>
                              <img
                                src="assets/images/icon/calender2.svg"
                                alt=""
                              />
                              03 August, 2023
                            </span>
                          </div>
                          <div className="date-reply-btn">
                            <div className="replay-btn">
                              <a href="#">
                                <svg
                                  width={13}
                                  height={10}
                                  viewBox="0 0 13 10"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M5.05954 1.01052C5.08146 1.00079 5.10546 0.996778 5.12932 0.99884C5.15318 1.0009 5.17615 1.00897 5.19611 1.02232C5.21606 1.03566 5.23237 1.05384 5.24354 1.07519C5.2547 1.09655 5.26036 1.12039 5.25999 1.14452V2.29752C5.25999 2.43013 5.31227 2.5573 5.40532 2.65107C5.49837 2.74484 5.62457 2.79752 5.75616 2.79752C6.41804 2.79752 7.75372 2.80252 9.03085 3.61952C10.0073 4.24352 11.0056 5.37952 11.6059 7.49552C10.5938 6.51252 9.43771 5.97952 8.42553 5.69652C7.80338 5.52336 7.164 5.42072 6.51926 5.39052C6.25535 5.37884 5.99101 5.38151 5.72738 5.39852H5.71448L5.70952 5.39952H5.70853L5.75616 5.89752L5.70654 5.39952C5.58407 5.41192 5.47055 5.46976 5.38802 5.56179C5.3055 5.65382 5.25987 5.77348 5.25999 5.89752V7.05052C5.25999 7.15852 5.15084 7.22652 5.05954 7.18452L1.1061 4.25152C1.09268 4.24149 1.07877 4.23214 1.06442 4.22352C1.04284 4.21045 1.02499 4.19198 1.01259 4.1699C1.0002 4.14782 0.993682 4.12289 0.993682 4.09752C0.993682 4.07215 1.0002 4.04721 1.01259 4.02513C1.02499 4.00305 1.04284 3.98458 1.06442 3.97152C1.07877 3.9629 1.09268 3.95356 1.1061 3.94352L5.05954 1.01052ZM6.25232 6.38352C6.3198 6.38352 6.39423 6.38652 6.47361 6.38952C6.90429 6.40952 7.49968 6.47552 8.16058 6.66052C9.47641 7.02852 11.0344 7.86252 12.0704 9.74052C12.1264 9.84189 12.2157 9.92047 12.3229 9.96279C12.4301 10.0051 12.5486 10.0085 12.658 9.97249C12.7674 9.93643 12.861 9.86314 12.9227 9.76518C12.9844 9.66721 13.0104 9.55066 12.9962 9.43552C12.5358 5.72552 11.1247 3.77352 9.56274 2.77552C8.32729 1.98552 7.05512 1.83352 6.25232 1.80452V1.14452C6.25242 0.938586 6.19735 0.736448 6.09293 0.559432C5.9885 0.382415 5.8386 0.237085 5.65904 0.138776C5.47948 0.0404668 5.27691 -0.00717605 5.07272 0.000874744C4.86852 0.00892554 4.67027 0.0723714 4.49888 0.184518L0.535507 3.12452C0.371653 3.22759 0.236523 3.37098 0.14284 3.5412C0.0491559 3.71142 0 3.90287 0 4.09752C0 4.29217 0.0491559 4.48361 0.14284 4.65383C0.236523 4.82405 0.371653 4.96745 0.535507 5.07052L4.49888 8.01052C4.67027 8.12266 4.86852 8.18611 5.07272 8.19416C5.27691 8.20221 5.47948 8.15457 5.65904 8.05626C5.8386 7.95795 5.9885 7.81262 6.09293 7.6356C6.19735 7.45859 6.25242 7.25645 6.25232 7.05052V6.38352Z" />
                                </svg>
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                        <p>
                          “Authentic reviews help companies to build a
                          relationship with customers by providing a transparent
                          representation of their product or service”.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="single-comment-area">
                      <div className="author-img">
                        <img
                          src="assets/images/blog/comment-author2.png"
                          alt=""
                        />
                      </div>
                      <div className="comment-content">
                        <div className="author-details">
                          <div className="author-name-deg">
                            <h6>Macoline Farray, </h6>
                            <span>
                              <img
                                src="assets/images/icon/calender2.svg"
                                alt=""
                              />
                              11 July, 2023
                            </span>
                          </div>
                          <div className="date-reply-btn">
                            <div className="replay-btn">
                              <a href="#">
                                <svg
                                  width={13}
                                  height={10}
                                  viewBox="0 0 13 10"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M5.05954 1.01052C5.08146 1.00079 5.10546 0.996778 5.12932 0.99884C5.15318 1.0009 5.17615 1.00897 5.19611 1.02232C5.21606 1.03566 5.23237 1.05384 5.24354 1.07519C5.2547 1.09655 5.26036 1.12039 5.25999 1.14452V2.29752C5.25999 2.43013 5.31227 2.5573 5.40532 2.65107C5.49837 2.74484 5.62457 2.79752 5.75616 2.79752C6.41804 2.79752 7.75372 2.80252 9.03085 3.61952C10.0073 4.24352 11.0056 5.37952 11.6059 7.49552C10.5938 6.51252 9.43771 5.97952 8.42553 5.69652C7.80338 5.52336 7.164 5.42072 6.51926 5.39052C6.25535 5.37884 5.99101 5.38151 5.72738 5.39852H5.71448L5.70952 5.39952H5.70853L5.75616 5.89752L5.70654 5.39952C5.58407 5.41192 5.47055 5.46976 5.38802 5.56179C5.3055 5.65382 5.25987 5.77348 5.25999 5.89752V7.05052C5.25999 7.15852 5.15084 7.22652 5.05954 7.18452L1.1061 4.25152C1.09268 4.24149 1.07877 4.23214 1.06442 4.22352C1.04284 4.21045 1.02499 4.19198 1.01259 4.1699C1.0002 4.14782 0.993682 4.12289 0.993682 4.09752C0.993682 4.07215 1.0002 4.04721 1.01259 4.02513C1.02499 4.00305 1.04284 3.98458 1.06442 3.97152C1.07877 3.9629 1.09268 3.95356 1.1061 3.94352L5.05954 1.01052ZM6.25232 6.38352C6.3198 6.38352 6.39423 6.38652 6.47361 6.38952C6.90429 6.40952 7.49968 6.47552 8.16058 6.66052C9.47641 7.02852 11.0344 7.86252 12.0704 9.74052C12.1264 9.84189 12.2157 9.92047 12.3229 9.96279C12.4301 10.0051 12.5486 10.0085 12.658 9.97249C12.7674 9.93643 12.861 9.86314 12.9227 9.76518C12.9844 9.66721 13.0104 9.55066 12.9962 9.43552C12.5358 5.72552 11.1247 3.77352 9.56274 2.77552C8.32729 1.98552 7.05512 1.83352 6.25232 1.80452V1.14452C6.25242 0.938586 6.19735 0.736448 6.09293 0.559432C5.9885 0.382415 5.8386 0.237085 5.65904 0.138776C5.47948 0.0404668 5.27691 -0.00717605 5.07272 0.000874744C4.86852 0.00892554 4.67027 0.0723714 4.49888 0.184518L0.535507 3.12452C0.371653 3.22759 0.236523 3.37098 0.14284 3.5412C0.0491559 3.71142 0 3.90287 0 4.09752C0 4.29217 0.0491559 4.48361 0.14284 4.65383C0.236523 4.82405 0.371653 4.96745 0.535507 5.07052L4.49888 8.01052C4.67027 8.12266 4.86852 8.18611 5.07272 8.19416C5.27691 8.20221 5.47948 8.15457 5.65904 8.05626C5.8386 7.95795 5.9885 7.81262 6.09293 7.6356C6.19735 7.45859 6.25242 7.25645 6.25232 7.05052V6.38352Z" />
                                </svg>
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                        <p>
                          “Authentic reviews help companies to build a
                          relationship with customers by providing a transparent
                          representation of their product or service”.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="comment-form form-wrapper">
                <form>
                  <div className="post-title">
                    <h5>Leave A Reply</h5>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-inner mb-25">
                        <label htmlFor="name">Your Name*</label>
                        <div className="input-area">
                          <img src="assets/images/icon/user-2.svg" alt="" />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Mr. Jackson Mile"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner mb-25">
                        <label htmlFor="email1">Email*</label>
                        <div className="input-area">
                          <img src="assets/images/icon/email-2.svg" alt="" />
                          <input
                            type="text"
                            id="email1"
                            name="email"
                            placeholder="info@example.com"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-inner mb-40">
                        <label htmlFor="description">Message</label>
                        <textarea
                          name="description"
                          id="description"
                          placeholder="Message..."
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-inner">
                        <button
                          className="primry-btn-2 lg-btn w-unset"
                          type="submit"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
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
                      <a className="primry-btn-2 lg-btn ">Find Job</a>
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

export default blogDetails;
