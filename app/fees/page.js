import React from "react";
import FeesBanner from "../components/Fees/Banner";
import bgImage from "../doctor.jpg";

const Fees = () => {
  return (
    <div>
      <FeesBanner bgImage={bgImage.src} />
    </div>
  );
};

export default Fees;
