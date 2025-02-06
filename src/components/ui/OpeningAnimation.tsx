import { motion } from "framer-motion";

const OpeningAnimation = () => {
  return (
    <motion.div
      initial={{ x: "-50%", scale: 30 }}
      animate={{ x: "-50%", scale: 0 }}
      transition={{ duration: 3, type: "spring" }}
      className="fixed z-50 w-20 aspect-square bottom-0 left-1/2 bg-gradient-to-b from-black to-[#222] rounded-full"
    />
  );
};

export default OpeningAnimation;
