import React from "react";
import FeesBanner from "../components/Fees/Banner";
import bgImage from "../doctor.jpg";
import FAQ from "../components/Fees/FAQ";

const Fees = () => {
  return (
    <div>
      <FeesBanner bgImage={bgImage.src} />
      <FAQ />
    </div>
  );
};

export default Fees;
