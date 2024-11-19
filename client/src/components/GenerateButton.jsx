import { assets } from "../assets/assets";

const GenerateButton = () => {
  return (
    <div className="flex flex-col justify-center items-center mb-6">
      <p className="text-2xl md:text-3xl lg:text-4xl font-medium">
        See the magic, try now..
      </p>
      <button className="sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full">
        Generate Images <img className="h-6" src={assets.star_group} alt="" />
      </button>
    </div>
  );
};

export default GenerateButton;
