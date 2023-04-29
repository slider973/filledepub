import React from "react";
import CompanyProfiles from "../../components/company/CompanyProfile";
import CompanyDashbordLayout from "../../layout/CompanyDashbordLayout";

function CompanyProfile() {
  return (
    <CompanyDashbordLayout>
      <CompanyProfiles />
    </CompanyDashbordLayout>
  );
}

export default CompanyProfile;
