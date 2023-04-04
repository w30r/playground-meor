import React from "react";

type Props = {};

function LoginBox({}: Props) {
  return (
    <div className="bg-stone-200 h-screen flex justify-center pt-52">
      <div className="bg-white h-1/3 w-1/2 drop-shadow-lg rounded-xl">
        <h1 className="text-center text-2xl font-semibold p-4">Log In</h1>
        <p className="text-center text-xs font-light p-4">
          New to KompeniKu?
          <span className="text-orange-500 text-xs font-medium">
            {" Sign up for a free trial"}
          </span>
        </p>
        <div className="bg-gray-300 p-2 flex flex-col justify-center">
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            className="outline-none mt-1 block rounded-md mx-4 p-1 w-56 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          <input
            type="text"
            id="password"
            name="password"
            placeholder="********"
            className=" outline-none mt-1 block rounded-md mx-4 p-1 w-56 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
      </div>
    </div>
  );
}

export default LoginBox;
