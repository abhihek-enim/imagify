import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="flex items-center justify-between gap-4 py-3 mt-12 mb-6">
      <img src={assets.logo} width={150} />
      <p className="flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">
        Copyright @imagify | All rights reserved.
      </p>
      <div className="flex gap-1 cursor-pointer">
        <img src={assets.facebook_icon} width={35} alt="" />
        <img src={assets.instagram_icon} width={35} alt="" />
        <img src={assets.twitter_icon} width={35} alt="" />
      </div>
    </div>
  );
};

export default Footer;
