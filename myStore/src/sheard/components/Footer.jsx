import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-gray-300 p-5 md:py-20 md:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 ">
          <div className="flex flex-col gap-3">
            <p>Acount</p>
            <p>Log In</p>
            <p>Sign Up</p>
            <p>Redeem a Gift Card</p>
          </div>
          <div className="flex flex-col gap-3">
            <p>Company</p>
            <p>About</p>
            <p>Environmental Initiatives</p>
            <p>Factories</p>
            <p>DEI</p>
            <p>Careers</p>
            <p>International</p>
            <p>Accessibility</p>
          </div>
          <div className="flex flex-col gap-3">
            <p>Get Help</p>
            <p>Help Center</p>
            <p>Return Policy</p>
            <p>Shipping Info</p>
            <p>Bulk Orders</p>
          </div>
          <div className="flex flex-col gap-3">
            <p>Connect</p>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Affiliates</p>
            <p>Out Stores</p>
          </div>
          <div className="flex flex-row h-10">
            <input
              placeholder="Enter email"
              className="border-2 border-gray-400 h-full"
            />
            <button className="w-10 h-10 bg-black">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_203_707)">
                  <path
                    d="M3.75 12.5H20.25"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.5 5.75L20.25 12.5L13.5 19.25"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_203_707">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
