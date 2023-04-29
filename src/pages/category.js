import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import jobListData from "../data/job_list.json";
import Layout from "../layout/Layout";
function Category() {
  const currentPage = useRouter().pathname;
  useEffect(() => {
    document.body.className = currentPage === "/category" ? "bg-wight" : "";
  });
  return (
    <Layout>
      <Breadcrumb pageName="Job Category" pageTitle="Job Category" />
      <div className="category-listing-area pt-120 mb-120">
        <div className="container">
          <div className="row g-lg-4">
            <div className="col-lg-12">
              <div className="row g-4 mb-25">
                <div className="col-md-6 d-flex align-items-center">
                  <p className="show-item">
                    Showing results 10 in 200 jobs list
                  </p>
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-md-end">
                  <form>
                    <div className="form-inner">
                      <input type="text" placeholder="Search.." />
                      <button className="primry-btn-2" type="submit">
                        <img
                          src="assets/images/icon/search-category.svg"
                          alt=""
                        />
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="row row-cols-xxl-5 row-cols-xl-4 row-cols-md-3 row-cols-sm-2 row-cols-1 g-3 cf justify-content-center mb-70">
                {jobListData.map((job, index) => {
                  const { id, image, available_job, jon_title } = job;
                  return (
                    <div key={id} className="col">
                      <div className="single-category">
                        <div className="category-top">
                          <div className="icon">
                            <img src={image} alt="" />
                          </div>
                          <div className="sl-no">
                            <h6>{index}</h6>
                          </div>
                        </div>
                        <div className="category-content">
                          <h5>
                            <Link legacyBehavior href="/job-listing1">
                              <a>{jon_title}</a>
                            </Link>
                          </h5>
                          <p>
                            Job Available: <span>{available_job}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="row">
                <div className="col-lg-12 d-flex justify-content-center">
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
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Category;
