import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import ContactPageContent from "../components/contact/ContactPageContent";
import Layout from "../layout/Layout";

function ContactPage() {
  const currentPage = useRouter().pathname;
  useEffect(() => {
    document.body.className = currentPage === "/contact" ? "bg-wight" : "";
  });
  return (
    <Layout>
      <Breadcrumb pageName="Contact" pageTitle="Contact" />
      <ContactPageContent />
    </Layout>
  );
}

export default ContactPage;
