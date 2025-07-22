import React from "react";

function Slider2() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center content-center ">
        <div className="col-span-1 md:order-1 order-2">
          <div className="flex flex-col gap-10 justify-center items-center text-center lg:text-start">
            <p>People Are Talking</p>
            <img
              src="Frame-1.png"
              alt="stars"
              className="h-4 w-20 items-start"
            />
            <p>
              “Love this shirt! Fits perfectly and the fabric is thick without
              being stiff.”
            </p>
            <p>-- JonSnSF, The Heavyweight Overshirt</p>
          </div>
        </div>

        <div className="col-span-1 md:order-2 order-1">
          <img src="Slider1.png" alt="" className="" />
        </div>
      </div>
    </>
  );
}

export default Slider2;
