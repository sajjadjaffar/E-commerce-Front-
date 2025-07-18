import React from "react";

function CTA3() {
  return (
    <div className="flex h-[650px] w-full ">
      <div className="w-1/2">
        <img src="CTA3.png" alt="" />
      </div>
      <div className="w-1/2 bg-amber-100 flex flex-col justify-center items-center px-16">
        <div className="flex flex-col justify-center items-center text-center gap-3">
          <p>OUR FACTORIES</p>
          <p className="text-5xl">Our ethical approach.</p>
          <p>
            We spend months finding the best factories around the world—the same
            ones that produce your favorite designer labels. We visit them often
            and build strong personal relationships with the owners. Each
            factory is given a compliance audit to evaluate factors like fair
            wages, reasonable hours, and environment. Our goal? A score of 90 or
            above for every factory.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CTA3;
