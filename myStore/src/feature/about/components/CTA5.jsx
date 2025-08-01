import React from "react";

function CTA5() {
  return (
    <div className="flex w-full ">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {" "}
        <div className=" bg-amber-100 flex flex-col justify-center items-center px-16">
          <div className="flex flex-col justify-center items-center text-center gap-3">
            <p>OUR QUALITY</p>
            <p className="text-xl md:text-5xl">Designed to last.</p>
            <p className="text-sm md:text-base">
              At Infinity, we're not big on trends. We want you to wear our
              pieces for years, even decades, to come. That's why we source the
              finest materials and factories for our timeless products— like our
              Grade-A cashmere sweaters, Italian shoes, and Peruvian Pima tees.
            </p>
          </div>
        </div>
        <div className="">
          <img src="CTA5.png" alt="" className="h-[650px] w-full object-fill" />
        </div>
      </div>
    </div>
  );
}

export default CTA5;
