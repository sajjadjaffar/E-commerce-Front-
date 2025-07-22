import React from "react";
import { NavLink } from "react-router-dom";

function CTA2() {
  return (
    <>
      <div
        className="w-full h-[250px] flex flex-col justify-center px-20"
        style={{
          backgroundImage: `url('/CTA2.png')`,
        }}
      >
        <div className=" flex flex-col gap-3 text-center items-center">
          <h1 className="text-white text-xl md:text-3xl">
            We’re on a Mission To Clean Up the Industry
          </h1>
          <p className="text-white text-base md:text-xl ">
            Read about our progress in our latest Impact Report.{" "}
          </p>
          <NavLink to="/listing" className="bg-white p-2 md:px-8 md:py-4 w-fit">
            SHOP NOW
          </NavLink>{" "}
        </div>
      </div>
    </>
  );
}

export default CTA2;
