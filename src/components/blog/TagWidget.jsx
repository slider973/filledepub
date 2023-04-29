import Link from "next/link";
import React from "react";

function TagWidget() {
  return (
    <div className="job-widget">
      <div className="check-box-item">
        <h5 className="job-widget-title mb-10">Blog Tags</h5>
        <ul className="tags">
          <li>
            <Link legacyBehavior href="/blog-right-sidebar">
              <a>Technology,</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/blog-right-sidebar">
              <a>Marketing,</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/blog-right-sidebar">
              <a>Sales,</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/blog-right-sidebar">
              <a>Transport,</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/blog-right-sidebar">
              <a>Medical,</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/blog-right-sidebar">
              <a>Design,</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/blog-right-sidebar">
              <a>Data Analyst, </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/blog-right-sidebar">
              <a>Development,</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/blog-right-sidebar">
              <a>Non-Profit,</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/blog-right-sidebar">
              <a>Manager,</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/blog-right-sidebar">
              <a>Health,</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TagWidget;
