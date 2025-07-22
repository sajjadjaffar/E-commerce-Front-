import React from "react";

function CTA8() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 px-5 py-10 md:py-20">
      <h1>More to Explore</h1>
      <div className="grid grid-cols-1 md:grid-cols-3  gap-2">
        <div className="flex flex-col justify-center items-center text-center">
          <img src="Produces.png" alt="" />
          <p>Our Products</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <img src="Stores.png" alt="" />
          <p>Our Stores</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <img src="Careers.png" alt="" />
          <p>Careers</p>
        </div>
      </div>
    </div>
  );
}

export default CTA8;
