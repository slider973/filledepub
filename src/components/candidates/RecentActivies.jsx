import Link from "next/link";
import React from "react";

function RecentActivies() {
  return (
    <div className="single-widget">
      <div className="widget-title">
        <h6>Recent Activity:</h6>
      </div>
      <ul className="recent-activitys">
        <li>
          <div className="company-img">
            <img
              src="/assets/images/bg/company-logo/recent-activity-01.png"
              alt=""
            />
          </div>
          <div className="content">
            <h6>
              <Link legacyBehavior href="/blog-details">
                <a>Your application has accepted in 2 vacancies.</a>
              </Link>
            </h6>
            <span>
              <img src="/assets/images/icon/clock-1.svg" alt="" /> 7 hour ago
            </span>
          </div>
        </li>
        <li>
          <div className="company-img">
            <img
              src="/assets/images/bg/company-logo/recent-activity-02.png"
              alt=""
            />
          </div>
          <div className="content">
            <h6>
              <Link legacyBehavior href="/blog-details">
                <a>1 Day Left For Your Premium Package To Expire.</a>
              </Link>
            </h6>
            <span>
              <img src="/assets/images/icon/clock-1.svg" alt="" /> 5 hour ago
            </span>
          </div>
        </li>
        <li>
          <div className="company-img">
            <img
              src="/assets/images/bg/company-logo/recent-activity-03.png"
              alt=""
            />
          </div>
          <div className="content">
            <h6>
              <Link legacyBehavior href="/blog-details">
                <a>Your Job Posted Published On Position WordPress.</a>
              </Link>
            </h6>
            <span>
              <img src="/assets/images/icon/clock-1.svg" alt="" /> 1 hour ago
            </span>
          </div>
        </li>
        <li>
          <div className="company-img">
            <img
              src="/assets/images/bg/company-logo/recent-activity-04.png"
              alt=""
            />
          </div>
          <div className="content">
            <h6>
              <Link legacyBehavior href="/blog-details">
                <a>Your Job Posted Published On Position Frontend Developer.</a>
              </Link>
            </h6>
            <span>
              <img src="/assets/images/icon/clock-1.svg" alt="" /> 1 hour ago
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default RecentActivies;
