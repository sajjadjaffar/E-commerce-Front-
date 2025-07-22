import React from "react";

function ContactUS() {
  return (
    <>
      <div className="grid grid-cols-3 w-full">
        <div className="col-span-2">
          <img src="CTA.png" alt="" className="w-full h-full" />
        </div>
        <div className="col-span-1 p-3 bg-gray-400">
          <div className="flex flex-col  w-fit gap-2 text-black">
            <p>Full Name</p>
            <input
              placeholder="Enter Name"
              className="border-2 rounded-xs bg-white border-gray-900 h-full"
            />{" "}
            <p>Email</p>
            <input
              placeholder="Enter Email"
              className="border-2 rounded-xs bg-white border-gray-900 h-full"
            />{" "}
            <p>Message</p>
            <textarea
              rows={5}
              cols={40}
              className="border-2 rounded-xs bg-white border-gray-900 h-full"
            />{" "}
            <button className="rounded-2xl bg-gray-500 text-black py-2 px-10 w-fit">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUS;
