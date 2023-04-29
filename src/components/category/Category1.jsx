import Link from "next/link";
import React from "react";
import trandingJobData from "../../data/trandingJob.json";
function Category1() {
  return (
    <>
      <div className="home1-category pt-120 mb-120">
        <div className="container">
          <div className="row mb-60">
            <div className="col-12 d-flex flex-wrap align-items-end justify-content-md-between justify-content-start gap-3">
              <div className="section-title1">
                <h2>
                  Trending Jobs <span>Category</span>
                </h2>
                <p>
                  To choose your trending job dream &amp; to make future bright.
                </p>
              </div>
              <div className="explore-btn">
                <Link legacyBehavior href="/category">
                  <a>
                    Explore More
                    <span>
                      <img
                        src="assets/images/icon/explore-elliose.svg"
                        alt=""
                      />
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="row row-cols-xxl-5 row-cols-xl-4 row-cols-md-3 row-cols-sm-2 row-cols-1 g-3 cf justify-content-center">
            {trandingJobData.map((item) => {
              const { id, img, title, job_available } = item;
              return (
                <div key={id} className="col">
                  <div className="single-category">
                    <div className="category-top">
                      <div className="icon">
                        <img src={img} alt="" />
                      </div>
                      <div className="sl-no">
                        <h6>{id}</h6>
                      </div>
                    </div>
                    <div className="category-content">
                      <h5>
                        <Link legacyBehavior href="/job-listing1">
                          <a>{title}</a>
                        </Link>
                      </h5>
                      <p>
                        Job Available: <span>{job_available}</span>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default Category1;
