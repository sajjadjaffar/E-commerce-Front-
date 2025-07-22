import React from "react";

function Services() {
  const Card = [
    {
      title: "Complimentary Shipping",
      description: "Enjoy free shipping on U.S. orders over $100.",
      img: "Box.png",
    },
    {
      title: "Consciously Crafted",
      description: "Designed with you and the planet in mind.",
      img: "Recycle.png",
    },
    {
      title: "Come Say Hi",
      description: "We have 11 stores across the U.S.",
      img: "Location.png",
    },
  ];
  return (
    <>
      <div className=" flex flex-col gap-3 text-center items-center pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
          {Card.map((item) => (
            <div className="col-span-1" key={item.title}>
              <div className="flex flex-col justify-center items-center gap-5">
                <img src={item.img} alt="" className="h-20 object-cover" />
                <h1 className="text-2xl">{item.title}</h1>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Services;
