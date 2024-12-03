import Breadcrumb from "@/components/Common/Breadcrumb";
import Legal from "@/components/Legal";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Angaben gemäß § 5 TMG",
  // other metadata
};

const LegalPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Impressum"
        description="Angaben gemäß § 5 TMG"
      />

      <Legal />
    </>
  );
};

export default LegalPage;
