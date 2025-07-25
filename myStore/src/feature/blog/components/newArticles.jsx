import React from "react";

function NewArticles() {
  const Card1 = [
    {
      title: "How To Style Winter Whites",
      text: "Style",
      imgSrc: "4.1.png",
    },
    {
      title: "We Won A Glossy Award",
      text: "Transparency",
      imgSrc: "4.2.png",
    },
    {
      title: "Coordinate Your Style: Matching Outfits for Everyone",
      text: "Style",
      imgSrc: "4.3.png",
    },
    {
      title: "Black Friday Fund 2023",
      text: "Transparency",
      imgSrc: "4.4.png",
    },
    {
      title: "What to Wear this Season: Holiday Outfits & Ideas",
      text: "Style",
      imgSrc: "4.5.png",
    },
    {
      title: "Thanksgiving Outfit Ideas",
      text: "Style",
      imgSrc: "4.6.png",
    },
  ];
  return (
    <div>
      <div className="py-10">
        <div className="border-8 border-black  "></div>
        <div className="flex flex-col max-w-[600px]">
          <h1 className="text-5xl md:text-9xl">everworld</h1>
          <p className="text-base md:text-2xl">
            We’re on a mission to clean up a dirty industry. These are the
            people, stories, and ideas that will help us get there.
          </p>
        </div>
      </div>{" "}
      <div className="flex flex-col py-10 md:py-30 gap-5">
        <h1 className="text-6xl">The Latest</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {Card1.map((item) => (
            <div className="col-span-1 gap-2  " key={item.title}>
              <div className="h-[600px]">
                <img src={item.imgSrc} className="h-full object-cover w-full" />
              </div>
              <div className="flex flex-col justify-start items-start gap-2">
                <h1 className="text-3xl text-black">{item.title}</h1>
                <p className="text-sm border-2 border-gray-500 rounded-3xl px-4 py-2 text-black w-fit">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <button className="bg-black text-white px-5 py-2 md:py-4 md:px-24 rounded-2xl">
            Load more Articals
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 justify-items-center text-center">
        <p className="text-3xl md:text-6xl flex justify-center items-center">
          Keep it Clean
        </p>
        <img
          src="Recycle.png"
          alt=""
          className=" flex justify-center items-center"
        />
        <p className="text-3xl md:text-6xl flex justify-center items-center">
          Do right by people
        </p>
        <img
          src="Recycle.png"
          alt=""
          className=" flex justify-center items-center"
        />
        <p className="text-3xl md:text-6xl flex justify-center items-center">
          {" "}
          Keep it Clean
        </p>
      </div>
    </div>
  );
}

export default NewArticles;
