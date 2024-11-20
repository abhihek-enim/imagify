import { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Login = () => {
  const [state, setState] = useState("Login");
  const { setShowLogin } = useContext(AppContext);
  // remove scroll functionality when login form is mounted

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <form className="relative bg-white p-10 rounded-xl text-gray-500">
        <h1 className="text-2xl md:text-3xl lg:text-4xl mb-4 ml-1 font-semibold">
          {state}
        </h1>
        <div className="flex flex-col gap-3">
          {state !== "Login" && (
            <div className="flex gap-2 items-center   border  px-6 py-2  rounded-full">
              <img src={assets.profile_icon} className="w-6" alt="" />
              <input
                className="outline-none"
                type="text"
                placeholder="Full Name"
                required
              />
            </div>
          )}

          <div className=" flex gap-3 items-center   border  px-6 py-2  rounded-full">
            <img src={assets.email_icon} className="w-4" alt="" />
            <input
              className="outline-none text-sm"
              type="text"
              placeholder="Email"
              required
            />
          </div>
          <div className=" flex gap-3 items-center   border  px-6 py-2  rounded-full">
            <img src={assets.lock_icon} className="w-4" alt="" />
            <input
              className="outline-none"
              type="text"
              placeholder="Password"
              required
            />
          </div>
          <p className="text-sm text-blue-600 my-4 cursor-pointer">
            Forgot Password?
          </p>
          <button className="bg-blue-600 w-full text-white py-2 rounded-full">
            {state == "Login" ? "Login" : "Create Account"}
          </button>
          {state !== "Login" ? (
            <p className="mt-5 text-center ">
              Already have an account.{" "}
              <span
                onClick={() => setState("Login")}
                className="text-blue-600 cursor-pointer"
              >
                Login
              </span>
            </p>
          ) : (
            <p className="mt-5 text-center ">
              Dont have an account?{" "}
              <span
                onClick={() => setState("Sign Up")}
                className="text-blue-600 cursor-pointer"
              >
                Sign Up
              </span>
            </p>
          )}
        </div>
        <img
          src={assets.cross_icon}
          className="absolute top-5 right-5 cursor-pointer"
          alt=""
          onClick={() => setShowLogin(false)}
        />
      </form>
    </div>
  );
};

export default Login;
