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
    <div className={`absolute z-10 group ${position}`}>
      <motion.div
        ref={constraintsRef}
        initial={{ x: 50, y: 25 }}
        whileInView={{ x: 0, y: 0 }}
        transition={{ duration: 2, damping: 4, type: "spring" }}
        onClick={() => setIsVisible(!isVisible)}
        className="group relative w-14 lg:w-20 cursor-pointer flex">
        <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-white group-hover:border-black group-active:border-white group-active:scale-150 group-active:border-2 transition duration-300" />
        <motion.img
          drag
          dragConstraints={constraintsRef}
          dragElastic={0.3}
          whileDrag={{ rotate: 10 }}
          transition={{ duration: 0.3, type: "spring" }}
          className="group-hover:invert ltr:!scale-x-[-1]"
          src={icon}
          alt={title}
        />
        {isVisible ? (
          <motion.span
            initial={{ x: "-50%", y: 0, opacity: 0 }}
            animate={{ x: "-50%", y: "100%", opacity: 1 }}
            exit={{ x: "-50%", y: 0, opacity: 0 }}
            className="ltr:!scale-x-[-1] translate-y-full absolute min-w-24 text-center -bottom-2 left-1/2  -translate-x-1/2 bg-black rounded-xl p-2">
            {title}
          </motion.span>
        ) : null}
      </motion.div>
    </div>
  );
};

export default HeroIcon;
