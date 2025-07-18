import React from "react";

function GiftsPicks() {
  return (
    <>
      <div className="border-b-2 w-full border-gray-700 pb-20"></div>
      <div className="flex flex-row justify-center items-center gap-10 py-20">
        <div className="flex flex-col justify-center items-center gap-5">
          <h1 className="text-2xl text-gray-900">Our Holiday Gift Picks</h1>
          <img src="towels.png" alt="" className="h-[750px]" />
          <p className="text-sm text-gray-800">
            {" "}
            The best presents for everyone on your list.
          </p>
          <p className="text-sm text-gray-800">Read More</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <h1 className="text-2xl text-gray-900">Cleaner Fashion</h1>
          <img src="flowers.png" alt="" className="h-[750px]" />
          <p className="text-sm text-gray-800">
            {" "}
            See the sustainability efforts behind each of our products.{" "}
          </p>
          <p className="text-sm text-gray-800">Learn More</p>
        </div>
      </div>

      <div className="border-b-2 w-full border-gray-700 pb-20"></div>
    </>
  );
}

export default GiftsPicks;
