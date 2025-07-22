import React from "react";

function GiftsPicks() {
  return (
    <>
      <div className="border-b-2 w-full border-gray-700 pb-20"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-5 py-10 md:py-20 px-5">
        <div className="flex flex-col justify-center items-center gap-5">
          <h1 className="text-2xl text-gray-900">Our Holiday Gift Picks</h1>
          <img src="towels.png" alt="" height={1000} width={900} className="" />
          <p className=" text-gray-800">
            {" "}
            The best presents for everyone on your list.
          </p>
          <p className=" text-gray-800">Read More</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <h1 className="text-2xl text-gray-900">Cleaner Fashion</h1>
          <img
            src="flowers.png"
            alt=""
            height={1000}
            width={900}
            className=""
          />
          <p className=" text-gray-800">
            {" "}
            See the sustainability efforts behind each of our products.{" "}
          </p>
          <p className="text-gray-800">Learn More</p>
        </div>
      </div>

      <div className="border-b-2 w-full border-gray-700 pb-10 md:pb-20"></div>
    </>
  );
}

export default GiftsPicks;
