import React from "react";

function CTA7() {
  return (
    <div className="flex h-[650px] w-full ">
      {" "}
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center text-center gap-3">
            <p>OUR PRICES</p>
            <p className="text-5xl">Radically Transparent.</p>
            <p>
              We believe our customers have a right to know how much their
              clothes cost to make. We reveal the true costs behind all of our
              products—from materials to labor to transportation—then offer them
              to you, minus the traditional retail markup.
            </p>
          </div>
        </div>
        <div className="overflow-hidden flex ">
          <img src="CTA7.png" alt="" className="" />
        </div>
      </div>
    </div>
  );
}

export default CTA7;
