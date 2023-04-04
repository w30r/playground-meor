import React from "react";

type Props = {};

function TopBar({}: Props) {
  return (
    <div className="bg-white fixed z-10 top-0 left-0 w-full flex justify-between border-gray-200 ">
      <div className="flex ">
        <h1 className="text-xl font-semibold text-stone-600 ml-4 bg-orange-400 p-4 my-6 rounded-full ">💊
        </h1>
        <h1 className="text-xl tracking-wider font-semibold text-stone-600 p-4 my-6 rounded-lg cursor-pointer">
          KompeniKu
        </h1>
      </div>
      <h1 className="text-sm font-semibold text-white bg-blue-600 px-6 py-2 rounded-full mr-4 self-center cursor-pointer">
        Start free trial
      </h1>
    </div>
  );
}

export default TopBar;
