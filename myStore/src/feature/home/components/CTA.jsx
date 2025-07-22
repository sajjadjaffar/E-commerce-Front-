import React from "react";
import { NavLink } from "react-router-dom";

function CTA() {
  return (
    <>
      <div className="w-full flex flex-col justify-center">
        <div className="w-full relative">
          <img src="CTA.png" alt="" className="w-full" />
          <div className="md:block hidden">
            <div className=" absolute top-1/3 left-1/7 justify-center flex flex-col gap-3 text-center items-center ">
              <h1 className="text-white md:text-4xl">Your Cozy Era</h1>
              <p className="text-white md:text-2xl max-w-2xs">
                Get peak comfy-chic with new winter essentials.
              </p>
              <NavLink to="/listing" className="bg-white md:px-8 md:py-4 w-fit">
                SHOP NOW
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CTA;
