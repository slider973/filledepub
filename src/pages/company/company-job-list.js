import React from "react";
import CompanyJobListArea from "../../components/company/CompanyJobListArea";
import CompanyDashbordLayout from "../../layout/CompanyDashbordLayout";

function CompanyJobList() {
  return (
    <CompanyDashbordLayout>
      <CompanyJobListArea />
    </CompanyDashbordLayout>
  );
}

export default CompanyJobList;
