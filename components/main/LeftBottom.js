import React from "react";

export default function LeftBottom() {
  return (
    <div className=" p-2 w-[49%] flex flex-col gap-1 rounded-md bg-[rgba(96,174,247,0.091)] ">
      <p className="w-full text-center pl-4 text-xl text-[#23af84] border-b-2 border-[#23af84]   rounded-md p-1">
        Recently Added On Format
      </p>
      <div className="flex flex-col flex-wrap gap-2 justify-around">
        <div className="shadow-md p-2 flex gap-1 hover:shadow-xl text-blue-600">
          <p>1.</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing ebuttont.
            Dignissimos, ex!
          </p>
        </div>
        <div className="shadow-md p-2 flex gap-1 hover:shadow-xl text-blue-600">
          <p>2.</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing ebuttont.
            Dignissimos, ex!
          </p>
        </div>
        <div className="shadow-md p-2 flex gap-1 hover:shadow-xl text-blue-600">
          <p>3.</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing ebuttont.
            Dignissimos, ex!
          </p>
        </div>
        <div className="shadow-md p-2 flex gap-1 hover:shadow-xl text-blue-600">
          <p>3.</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing ebuttont.
            Dignissimos, ex!
          </p>
        </div>
        <div className="shadow-md p-2 flex gap-1 hover:shadow-xl text-blue-600">
          <p>3.</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing ebuttont.
            Dignissimos, ex!
          </p>
        </div>
      </div>
    </div>
  );
}