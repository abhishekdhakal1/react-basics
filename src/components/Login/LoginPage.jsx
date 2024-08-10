//import { useState } from "react";

function LoginPage() {
  return (
    <>
      <div className="flex justify-center items-center h-screen border-2 border-black">
        <div className="p-2 w-64 h-custom text-center bg-indigo-100 border-2 border-black inline-block rounded">
          <p className="text-blue-500 text-xl font-medium">LogIn</p>
          <div className="mt-10 p-2">
            <input
              type="text"
              placeholder="Username"
              className="h-5 text-center focus:outline-none bg-transparent"
            />
          </div>
          <div className="mt-10 p-2">
            <input
              type="Password"
              placeholder="Password"
              className="h-5 text-center focus:outline-none bg-transparent"
            />
          </div>
          <button className="p-1 mt-10 border-2 text-xl rounded hover:bg-orange-100">
            {" "}
            Submit{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
