import React from "react";

function ContactUS() {
  return (
    <>
      <div className="relative">
        <img src="CTA.png" alt="" />
      </div>
      <div className="absolute top-44 container mx-auto items-end flex justify-end">
        <div className="flex flex-col  w-fit gap-2 text-white">
          <p>Full Name</p>
          <input
            placeholder="Enter Name"
            className="border-2 rounded-xs bg-white border-gray-400 h-full"
          />{" "}
          <p>Email</p>
          <input
            placeholder="Enter Email"
            className="border-2 rounded-xs bg-white border-gray-400 h-full"
          />{" "}
          <p>Message</p>
          <textarea
            rows={5}
            cols={40}
            className="border-2 rounded-xs bg-white border-gray-400 h-full"
          />{" "}
          <button className="rounded-2xl bg-gray-500 text-white py-2 px-10 w-fit">
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default ContactUS;
