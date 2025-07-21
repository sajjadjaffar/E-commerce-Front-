import React from "react";
import { NavLink } from "react-router-dom";

const Card2 = [
  { title: "SHOP THE LATEST", btnText: "SHOP THE LATEST", imgSrc: "1.1.png" },
  { title: "Best-Sellers", btnText: "SHOP YOUR FAVORITES", imgSrc: "1.2.png" },
  { title: "The Holiday Outfit", btnText: "SHOP OCCASION", imgSrc: "1.3.png" },
];

const Category = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center py-20">
        <h1 className="text-4xl font-normal">Shop by Category</h1>
        <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 text-center px-4 py-20">
          <div className="mx-1">
            <NavLink to="/listing">
              <img src="03678155738b7e5344c2e8ba1729f3c6e45f8123.png" />
              Shirt
            </NavLink>
          </div>{" "}
          <div className="mx-1">
            <NavLink to="/listing">
              <img src="b852e792af76ab4f7016a6cfe1821731fbee64d0.png" />
              DENIM
            </NavLink>
          </div>{" "}
          <div className="mx-1">
            <NavLink to="/listing">
              <img src="37b8a04856cd39f9c7bfa244a8cb00746abb448f.png" />
              TEES
            </NavLink>
          </div>{" "}
          <div className="mx-1">
            <NavLink to="/listing">
              <img src="a892793fc9ea835f063c0d2d9a3252808d44548d.png" />
              PANTS
            </NavLink>
          </div>{" "}
          <div className="mx-1">
            <NavLink to="/listing">
              <img src="36e9affa654ea6c5a65027ce55006ea78b04597b.png" />
              SWEATERS
            </NavLink>
          </div>{" "}
          <div className="mx-1">
            <NavLink to="/listing">
              <img src="9492a0ecf50e4e3affa9e913e942076586267f92.png" />
              OUTERWEAR
            </NavLink>
          </div>{" "}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 px-10 space-x-3 max-h-[650px] overflow-hidden">
          {Card2.map((item) => (
            <div className="col-span-1  " key={item.title}>
              <div className="relative ">
                <img src={item.imgSrc} />
                <div className="absolute top-1/2 left-1/3 flex flex-col justify-center items-center">
                  <h1 className="text-3xl text-white">{item.title}</h1>
                  <NavLink
                    to="/listing"
                    className="text-sm px-4 py-2 bg-white text-black w-fit"
                  >
                    {item.btnText}
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Category;
