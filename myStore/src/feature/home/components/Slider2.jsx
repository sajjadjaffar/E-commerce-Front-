import React from "react";

function Slider2() {
  return (
    <>
      <div className=" flex flex-col py-20">
        <div className="flex flex-row">
          <div className="flex flex-col gap-10 w-1/2 justify-center items-center text-start">
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
          <div>
            <img src="Slider1.png" alt="" className="h-[650px]" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider2;
