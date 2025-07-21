import React from "react";

function Progress() {
  const Card2 = [
    {
      title: "Carbon Commitment",
      imgSrc: "5.1.png",
    },
    {
      title: "Environmental Initiatives",
      imgSrc: "5.2.png",
    },
    {
      title: "Better Factories",
      imgSrc: "5.3.png",
    },
  ];
  return (
    <div>
      {" "}
      <div className="flex flex-col gap-6 py-20">
        <h1 className="text-6xl">Our Progress</h1>
        <div>
          <div className="grid grid-cols-3 gap-6">
            {Card2.map((item) => (
              <div className="col-span-1 gap-2  " key={item.title}>
                <div className="max-h-[500px] overflow-hidden h-full">
                  <img
                    src={item.imgSrc}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-start items-start gap-2">
                  <h1 className="text-3xl text-black">{item.title}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Progress;
