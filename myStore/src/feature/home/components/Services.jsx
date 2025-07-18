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
        <div className="flex flex-row gap-24">
          {Card.map((item) => (
            <div className="" key={item.title}>
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
