import { useContext } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
const GenerateButton = () => {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();
  function onClickHandler() {
    if (user) {
      navigate("/result");
    } else {
      setShowLogin(true);
    }
  }
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col justify-center items-center mb-6"
    >
      <p className="text-2xl md:text-3xl lg:text-4xl font-medium">
        See the magic, try now..
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          default: {
            duration: 0.5,
          },
          opacity: { delay: 0.8, duration: 1 },
        }}
        onClick={onClickHandler}
        className="sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full"
      >
        Generate Images <img className="h-6" src={assets.star_group} alt="" />
      </motion.button>
    </motion.div>
  );
};

export default GenerateButton;
