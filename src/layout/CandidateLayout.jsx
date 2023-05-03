import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import CandidateMenu from "../components/candidates/CandidateMenu";
import FeaturedJobs from "../components/candidates/FeaturedJobs";
import RecentActivies from "../components/candidates/RecentActivies";
import Footer from "../components/footer/Footer";
import LayoutHeader from "../components/header/LayoutHeader";
import {withAuth} from "../hoc/withAuth";
import Header4 from "../components/header/Header4";

function CandidateLayout({ children }) {
  const currentPath = useRouter().pathname;
  return (
    <>
       <Header4 />
      <div className="dashboard-area pt-120 mb-120">
        <div className="container">
          <div
            className={
              currentPath === "/candidates-dashboard/view-resume"
                ? "row justify-content-center g-lg-4 gy-5 mb-90"
                : "row g-lg-4 gy-5 mb-90"
            }
          >
            {currentPath === "/candidates-dashboard/view-resume" ? (
              ""
            ) : (
              <div className="col-lg-3">
                <div className="dashboard-sidebar">
                  <CandidateMenu />
              {/*    <RecentActivies />*/}
                </div>
              </div>
            )}
            {children}
          </div>
          {currentPath === "/candidates-dashboard/dashboard" ? (
            <FeaturedJobs />
          ) : (
            ""
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default withAuth(CandidateLayout);
