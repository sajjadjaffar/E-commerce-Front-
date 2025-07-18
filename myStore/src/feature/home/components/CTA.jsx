import React from "react";

function CTA() {
  return (
    <>
      <div
        className="w-full h-[700px] flex flex-col justify-center px-20"
        style={{
          backgroundImage: `url('/CTA.png')`,
        }}
      >
        <div className=" w-1/3 flex flex-col gap-3 text-center items-center">
          <h1 className="text-white text-4xl">Your Cozy Era</h1>
          <p className="text-white text-2xl max-w-2xs">
            Get peak comfy-chic with new winter essentials.
          </p>
          <button className="bg-white px-8 py-4 w-fit">SHOP NOW</button>
        </div>
      </div>
    </>
  );
}

export default CTA;
