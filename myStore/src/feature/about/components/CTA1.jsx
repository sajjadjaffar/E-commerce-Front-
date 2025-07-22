import React from "react";

function CTA1() {
  return (
    <div className="relative h-[650px] w-full">
      <img src="CTA1.png" alt="" className="h-[650px] w-full object-cover" />
      <div className="absolute top-1/5 right-1/3 flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-7xl max-w-96 text-white text-center">
          We believe we can all make a difference.
        </h1>
        <p className="max-w-96 text-white text-center">
          Our way: Exceptional quality. Ethical factories. Radical Transparency.
        </p>
      </div>
    </div>
  );
}

export default CTA1;
