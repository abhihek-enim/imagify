import { assets } from "../assets/assets";

const Login = () => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <form className="relative bg-white p-10 rounded-xl text-slate-500">
        <h1 className="text-2xl md:text-3xl lg:text-4xl mb-2 font-semibold">
          Sign Up
        </h1>
        <div className="flex flex-col gap-3">
          <div className="flex gap-2 items-center   border  px-6 py-2  rounded-full">
            <img src={assets.profile_icon} className="w-6" alt="" />
            <input
              className="outline-none"
              type="text"
              placeholder="Full Name"
              required
            />
          </div>
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
        </div>
      </form>
    </div>
  );
};

export default Login;
