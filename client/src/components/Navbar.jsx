import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets.js";
import { useState } from "react";
const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center py-4">
      <Link to="/">
        <img src={assets.logo} className="w-28 sm:w-32 lg:w-40" alt="" />
      </Link>
      <div>
        {user ? (
          <div></div>
        ) : (
          <div className="flex items-center gap-2 sm:gap-5">
            <p
              onClick={() => navigate("/buyCredit")}
              className="cursor-pointer"
            >
              Pricing
            </p>
            <button className="bg-zinc-800 text-white rounded-full px-7 py-2 text-sm sm:px-10">
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
