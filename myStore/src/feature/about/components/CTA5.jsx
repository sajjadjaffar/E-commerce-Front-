import React from "react";

function CTA5() {
  return (
    <div className="flex h-[650px] w-full ">
      {" "}
      <div className="w-1/2 bg-amber-100 flex flex-col justify-center items-center px-16">
        <div className="flex flex-col justify-center items-center text-center gap-3">
          <p>OUR QUALITY</p>
          <p className="text-5xl">Designed to last.</p>
          <p>
            At Everlane, we’re not big on trends. We want you to wear our pieces
            for years, even decades, to come. That’s why we source the finest
            materials and factories for our timeless products— like our Grade-A
            cashmere sweaters, Italian shoes, and Peruvian Pima tees.
          </p>
        </div>
      </div>
      <div className="w-1/2">
        <img src="CTA5.png" alt="" />
      </div>
    </div>
  );
}

export default CTA5;
