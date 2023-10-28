import React from "react";
import FeesBanner from "../components/Banner";
import bgImage from "../doctor.jpg";
import FAQ from "../components/Fees/FAQ";

const Fees = () => {
  return (
    <div>
      <FeesBanner title="Our Fees" bgImage={bgImage.src} />
      <FAQ />
    </div>
  );
};

export default Fees;
