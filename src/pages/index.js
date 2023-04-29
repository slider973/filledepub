import React from "react";
import {useRouter} from "next/router";
import {useEffect} from "react";
import Article1 from "../components/article/Article1";
import Banner1 from "../components/banner/Banner1";
import Category1 from "../components/category/Category1";
import Feature1 from "../components/feature/Feature1";
import Footer from "../components/footer/Footer";
import Header1 from "../components/header/Header1";
import JobLocation1 from "../components/job-loaction/JobLocation1";
import Review1 from "../components/review/Review1";
import TopRecruiters1 from "../components/top-recruiters/TopRecruiters";
import TrustedCompany1 from "../components/trusted-company/TrustedCompany1";
import WorkProcess1 from "../components/work-process/WorkProcess1";
import {useAuthContext} from "../core/auth/AuthContext";

export default function Home() {
    const {user} = useAuthContext()
    const router = useRouter()
    const currentPage = useRouter().pathname;
    useEffect(() => {
        console.log('currentPage', currentPage)
        document.body.className = currentPage === "/" ? "bg-wight" : "";
    });
    useEffect(() => {
        if (user == null) {
        console.dir(user)
            router.push("/register")
        }
    }, [user])
    return (
        <>
            <Header1/>
            <Banner1/>
            <Category1/>
            <Feature1/>
            <WorkProcess1/>
            <JobLocation1/>
            <Review1/>
            <TrustedCompany1/>
            <TopRecruiters1/>
            <Article1/>
            <Footer/>
        </>
    );
}
