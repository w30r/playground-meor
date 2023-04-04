import React from "react";

type Props = {};

function LoginBox({}: Props) {
  return (
    <div className="bg-stone-200 h-screen flex justify-center pt-52">
      <div className="bg-white h-1/2 w-1/2 drop-shadow-lg rounded-xl p-12">
        <h1 className="text-center text-2xl font-semibold">Log In</h1>
        <p className="text-center text-xs font-light p-4">
          New to KompeniKu?
          <span className="text-orange-500 text-xs font-medium">
            {" Sign up for a free trial"}
          </span>
        </p>
        <div className="p-2 flex flex-col items-center">
          <input
            type="text"
            id="username"
            name="username"
            placeholder="username"
            className="text-center outline-none mt-1 rounded-md mx-4 p-1 w-56  shadow-sm  "
          />
          <input
            type="text"
            id="password"
            name="password"
            placeholder="********"
            className="text-center outline-none mt-1 block rounded-md mx-4 p-1 w-56 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          <button className="text-center bg-orange-500 hover:bg-orange-700 text-white font-semibold px-4 py-1 mt-12 rounded text-sm ">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginBox;
