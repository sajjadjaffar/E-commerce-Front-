import React from "react";

function Listing() {
  const Card2 = [
    {
      title: "The Cloud Relaxed Cardigan",
      color: "Black",
      price: "$12",
      imgSrc: "6.1.png",
    },
    {
      title: "The Organic Cotton Long-Sleeve Turtleneck",
      color: "Black",
      price: "$45",
      imgSrc: "6.2.png",
    },
    {
      title: "The Organic Cotton Long-Sleeve Turtleneck",
      color: "Heather Charcoal",
      price: "$68",
      imgSrc: "6.3.png",
    },
    {
      title: "The Organic Cotton Long-Sleeve Turtleneck",
      color: "Black",
      price: "$89",
      imgSrc: "6.4.png",
    },
    {
      title: "The Organic Cotton Long-Sleeve Turtleneck",
      color: "Black",
      price: "$56",
      imgSrc: "6.5.png",
    },
    {
      title: "The Organic Cotton Long-Sleeve Turtleneck",
      color: "Heather Charcoal",
      price: "$34",
      imgSrc: "6.6.png",
    },
    {
      title: "The Organic Cotton Long-Sleeve Turtleneck",
      color: "Black",
      price: "$27",
      imgSrc: "6.7.png",
    },
    {
      title: "The Organic Cotton Long-Sleeve Turtleneck",
      color: "Black",
      price: "$14",
      imgSrc: "6.8.png",
    },
    {
      title: "The Organic Cotton Long-Sleeve Turtleneck",
      color: "Heather Charcoal",
      price: "$54",
      imgSrc: "6.9.png",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 container mx-auto py-20">
        {Card2.map((item) => (
          <div className="col-span-1  " key={item.title}>
            <div className="">
              <div className="relative">
                <img src={item.imgSrc} />

                <div className="absolute top-5 left-3">
                  <p className="bg-white text-red-600 p-1">30% Off</p>
                </div>
              </div>

              <div className="flex flex-row justify-between items-center">
                <h1 className="text-xl text-black">{item.title}</h1>
                <h1 className="text-xl text-black">{item.price}</h1>
              </div>
              <h1 className="text-xl text-black">{item.color}</h1>
              <div className="flex gap-2">
                {" "}
                <div className="bg-gray-900 p-5 w-fit rounded-full "></div>
                <div className="bg-blue-900 p-5 w-fit rounded-full "></div>
                <div className="bg-red-900 p-5 w-fit rounded-full "></div>
                <div className="bg-purple-600 p-5 w-fit rounded-full "></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Listing;
