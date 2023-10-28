import React from "react";

const FeesBanner = (props) => {
  const { bgImage, title } = props;
  return (
    <div
      className="teal-overlay z-[-3] h-full  min-h-[250px] md:min-h-[400px] bg-right-top md:bg-center  bg-cover bg-no-repeat   "
      style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="flex  justify-center pt-10 ">
        <h1 className=" text-white text-3xl md:text-5xl z-10 ">{title}</h1>
      </div>
    </div>
  );
};

export default FeesBanner;
