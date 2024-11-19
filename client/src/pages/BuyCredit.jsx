import { useContext } from "react";
import { assets, plans } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const BuyCredit = () => {
  const { user } = useContext(AppContext);
  return (
    <div className="flex flex-col justify-center items-center min-h-[80vh]">
      <button className="border border-gray-400 px-4 py-2 rounded-full">
        Our Plans
      </button>
      <p className="text-2xl sm:text-3xl lg:text-4xl mt-6">Choose Plan</p>
      <div className=" mt-6 flex flex-col  justify-center items-center gap-3 lg:flex-row md:flex-row">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="p-8 border border-gray-100 shadow-md rounded-md flex flex-col gap-4 "
          >
            <img src={assets.logo_icon} width={20} className="mb-2" alt="" />
            <p className="text-2xl">{plan.id}</p>
            <p>{plan.desc}</p>
            <p>
              <span className="text-3xl text-gray-500">${plan.price}</span> /
              {plan.credits} credits
            </p>
            <button className="text-white bg-black shadow-md hover:scale-105 transition-all duration-300 px-5 py-1 rounded-md">
              {user ? "Purchase" : "Get Started"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyCredit;
