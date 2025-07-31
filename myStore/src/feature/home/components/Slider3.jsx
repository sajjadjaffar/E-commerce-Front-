import React from "react";

function Slider3() {
  const Card = [
    {
      imgSrc: "3.1.png",
    },
    {
      imgSrc: "3.2.png",
    },
    {
      imgSrc: "3.3.png",
    },
    {
      imgSrc: "3.4.png",
    },
    {
      imgSrc: "3.5.png",
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-5 md:gap-10 py-10 md:py-20 px-5">
        <div className="flex flex-col gap-2 text-center items-center">
          <h1 className="text-black text-3xl">Everlane On You </h1>
          <p className="text-black ">
            Share your latest look with #EverlaneOnYou for a chance to be
            featured.{" "}
          </p>
          <p>Add Your Photo</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {Card.map((item) => (
            <div className="col-span-1 h-full gap-2" key={item.imgSrc}>
              <div className="relative">
                <img src={item.imgSrc} className="aspect-square object-cover" />
                <div className="absolute top-2 right-2">
                  {" "}
                  <svg
                    width="31"
                    height="30"
                    viewBox="0 0 31 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="15.6" cy="15" r="15" fill="white" />
                    <g clipPath="url(#clip0_4_441)">
                      <path
                        d="M13.1 23.3332C13.5602 23.3332 13.9333 22.9601 13.9333 22.4998C13.9333 22.0396 13.5602 21.6665 13.1 21.6665C12.6398 21.6665 12.2667 22.0396 12.2667 22.4998C12.2667 22.9601 12.6398 23.3332 13.1 23.3332Z"
                        stroke="#262626"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M22.2667 23.3332C22.7269 23.3332 23.1 22.9601 23.1 22.4998C23.1 22.0396 22.7269 21.6665 22.2667 21.6665C21.8064 21.6665 21.4333 22.0396 21.4333 22.4998C21.4333 22.9601 21.8064 23.3332 22.2667 23.3332Z"
                        stroke="#262626"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.43334 5.8335H9.76667L12 16.9918C12.0762 17.3755 12.2849 17.7201 12.5896 17.9654C12.8943 18.2107 13.2756 18.341 13.6667 18.3335H21.7667C22.1578 18.341 22.539 18.2107 22.8437 17.9654C23.1484 17.7201 23.3571 17.3755 23.4333 16.9918L24.7667 10.0002H10.6"
                        stroke="#262626"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4_441">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="translate(5.60001 5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="flex flex-col text-start"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Slider3;
