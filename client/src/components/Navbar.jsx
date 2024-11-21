import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets.js";
import { useContext } from "react";
import { AppContext } from "../context/AppContext.jsx";
// import { useState } from "react";
const Navbar = () => {
  const navigate = useNavigate();
  const { user, setShowLogin } = useContext(AppContext);
  return (
    <div className="flex justify-between items-center py-4">
      <Link to="/">
        {" "}
        <img src={assets.logo} className="w-28 sm:w-32 lg:w-40" alt="" />
      </Link>
      <div>
        {user ? (
          <div className="flex gap-2 items-center sm:gap-4">
            <button
              onClick={() => navigate("/buyCredit")}
              className=" px-4 py-2 sm:px-6 sm:py-3 flex gap-1 items-center rounded-full bg-blue-100 hover:scale-105 transition-all duration-700 "
            >
              <img className="w-5" src={assets.credit_star} alt="" />
              <p className="text-xs sm:text-sm font-medium text-gray-600">
                Credits Left: 50
              </p>
            </button>
            <p className="text-gray-600 max-sm:hidden pl-4">Hi,Abhi</p>
            <div className="relative group cursor-pointer">
              <img
                src={assets.profile_icon}
                className="w-10 drop-shadow"
                alt=""
              />
              <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12 transition">
                <ul className="list-none m-0 p-2 bg-white rounded-md border text-sm">
                  <li className="py-1 px-2 cursor-pointer pr-10">Logout</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 sm:gap-5">
            <p
              onClick={() => navigate("/buy-credit")}
              className="cursor-pointer"
            >
              Pricing
            </p>
            <button
              onClick={() => setShowLogin(true)}
              className="bg-zinc-800 text-white rounded-full px-7 py-2 text-sm sm:px-10"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
