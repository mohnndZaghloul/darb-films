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
    <div className={`absolute group ${position}`}>
      <motion.div
        ref={constraintsRef}
        onClick={() => setIsVisible(!isVisible)}
        className="group relative w-14 lg:w-20 cursor-grab flex">
        <div className="absolute top-0 z-0 left-0 w-full h-full border opacity-50 group-hover:opacity-80 group-hover:scale-150 transition duration-300 rounded-full" />
        <motion.img
          className="z-20"
          initial={{scale:1}}
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{scale:0.95}}
          transition={{duration:300}}
          src={icon}
          alt={title}
        />
      </motion.div>
    </div>
  );
};

export default HeroIcon;
// import { motion } from "framer-motion";
// import { useRef, useState } from "react";
// const HeroIcon = ({
//   icon,
//   title,
//   position,
// }: {
//   icon: string;
//   title: string;
//   position: string;
// }) => {
//   const constraintsRef = useRef<HTMLDivElement>(null);
//   const [isVisible, setIsVisible] = useState(false);

//   return (
//     <div className={`absolute ${position}`}>
//       <motion.div
//         ref={constraintsRef}
//         onClick={() => setIsVisible(!isVisible)}
//         className="group relative w-14 lg:w-20 cursor-grab flex">
//         <div className="absolute top-0 z-0 left-0 w-full h-full border opacity-50 group-active:opacity-80 group-active:scale-150 transition duration-300 rounded-full" />
//         <motion.img
//           className="z-10"
//           whileHover={{
//             scale: [1.1, 1, 1.1],
//             transition: { repeat: Infinity },
//           }}
//           whileTap={{ scale: 0.9 }}
//           whileDrag={{ rotate: 40 }}
//           transition={{ type: "spring" }}
//           drag
//           dragConstraints={constraintsRef}
//           dragElastic={0.3}
//           src={icon}
//           alt={title}
//         />
//         {isVisible ? (
//           <motion.span
//             initial={{ x: 0, opacity: 0 }}
//             animate={{ x: "110%", opacity: 1 }}
//             exit={{ x: 0, opacity: 0 }}
//             className="absolute bg-black rounded-xl p-2">
//             {title}
//           </motion.span>
//         ) : null}
//       </motion.div>
//     </div>
//   );
// };

// export default HeroIcon;
