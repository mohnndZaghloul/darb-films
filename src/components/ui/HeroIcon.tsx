import { motion } from "framer-motion";
import { useRef, useState } from "react";
const HeroIcon = ({
  icon,
  title,
  position,
}: {
  icon: string;
  title: string;
  position: string;
}) => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={`absolute ${position}`}>
      <motion.div
        ref={constraintsRef}
        onClick={() => setIsVisible(!isVisible)}
        className="w-14 lg:w-20 cursor-grab flex">
        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          drag
          dragConstraints={constraintsRef}
          dragElastic={0.3}
          src={icon}
          alt={title}
        />
        {isVisible ? (
          <motion.span
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: "110%", opacity: 1 }}
            exit={{ x: 0, opacity: 0 }}
            className="absolute bg-black rounded-xl p-2">
            {title}
          </motion.span>
        ) : null}
      </motion.div>
    </div>
  );
};

export default HeroIcon;
