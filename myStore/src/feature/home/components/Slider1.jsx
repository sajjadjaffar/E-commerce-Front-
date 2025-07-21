import React from "react";
import { NavLink } from "react-router-dom";
function Slider1() {
  const Card = [
    {
      title: "The Waffle Long-Sleeve Crew",
      price: "$60",
      color: "Bone",
      imgSrc: "2.1.png",
    },
    {
      title: "The Bomber Jacket | Uniform",
      price: "$148",
      color: "Toasted Coconut",
      imgSrc: "2.2.png",
    },
    {
      title: "The Slim 4-Way Stretch Organic Jean | Uniform",
      price: "$98",
      color: "Dark Indigo",
      imgSrc: "2.3.png",
    },
    {
      title: "The Essential Organic Crew",
      price: "$30",
      color: "Vintage Black",
      imgSrc: "2.4.png",
    },
  ];
  return (
    <>
      <div className=" flex flex-col gap-3 text-center items-center py-20">
        <h1 className="text-black text-3xl">Everlane Favorites </h1>
        <p className="text-black ">
          Beautifully Functional. Purposefully Designed. Consciously Crafted.{" "}
        </p>
        <div className="flex flex-row space-x-2 ">
          {Card.map((item) => (
            <div className="" key={item.title}>
              <NavLink to="/listing" className="">
                <img src={item.imgSrc} className="h-[550px] w-full" />
              </NavLink>
              <div className="flex flex-col text-start">
                {" "}
                <h1 className="text-lg text-gray-800">{item.title}</h1>
                <p className="">{item.price}</p>
                <p className="text-lg text-gray-400">{item.color}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Slider1;
