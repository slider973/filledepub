import Link from "next/link";
import React from "react";

function RecentPostWidget() {
  return (
    <div className="job-widget mb-20">
      <h5 className="job-widget-title mb-10">Recent Post</h5>
      <ul className="recent-activitys">
        <li>
          <div className="blog-img">
            <img src="assets/images/blog/blog-sb-1.png" alt="" />
          </div>
          <div className="content">
            <h6>
              <Link legacyBehavior href="/blog-details">
                <a>To Make Your Smartness &amp; Catch Your Dream.</a>
              </Link>
            </h6>
            <span>
              <img src="assets/images/icon/calender2.svg" alt="" /> 02 January,
              2023
            </span>
          </div>
        </li>
        <li>
          <div className="blog-img">
            <img src="assets/images/blog/blog-sb-2.png" alt="" />
          </div>
          <div className="content">
            <h6>
              <Link legacyBehavior href="/blog-details">
                <a> Be Awareness Your Job Interviewing &amp; Punctual.</a>
              </Link>
            </h6>
            <span>
              <img src="assets/images/icon/calender2.svg" alt="" /> 03 August,
              2022
            </span>
          </div>
        </li>
        <li>
          <div className="blog-img">
            <img src="assets/images/blog/blog-sb-3.png" alt="" />
          </div>
          <div className="content">
            <h6>
              <Link legacyBehavior href="/blog-details">
                <a>There 20 Tips Of Trending UI/UX Design In 2023.</a>
              </Link>
            </h6>
            <span>
              <img src="assets/images/icon/calender2.svg" alt="" /> 02 January,
              2023
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default RecentPostWidget;
