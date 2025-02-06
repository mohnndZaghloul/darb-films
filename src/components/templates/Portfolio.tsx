import { useTranslation } from "react-i18next";
import {
  PortfolioImg1,
  PortfolioImg2,
  PortfolioImg3,
  PortfolioImg4,
  PortfolioImg5,
  PortfolioImg6,
} from "../../constants/images";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Portfolio = () => {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });

  const y = useTransform(scrollYProgress, [0, 0.5], [150, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <section
      ref={ref}
      className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 md:my-16">
      <motion.div
        style={{ y, opacity }}
        className="my-8 lg:my-14 group cursor-pointer">
        <div className="relative w-full">
          <img className="w-full h-full" src={PortfolioImg3} alt="image" />
          <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black" />
        </div>
        <h3 className="relative w-fit mx-auto font-bold text-2xl sm:text-xl text-center py-4 group-hover:-translate-y-2 transition duration-300">
          {t("companyVideo")}
          <div className="absolute bottom-0 left-0 w-full h-[1px] scale-x-0 group-hover:scale-x-100 transition bg-white" />
        </h3>
      </motion.div>
      <motion.div
        style={{ y, opacity }}
        className="my-8 lg:my-14 group cursor-pointer">
        <div className="relative w-full">
          <img className="w-full h-full" src={PortfolioImg2} alt="image" />
          <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black" />
        </div>
        <h3 className="relative w-fit mx-auto font-bold text-2xl sm:text-xl text-center py-4 group-hover:-translate-y-2 transition duration-300">
          {t("portraitPhotography")}
          <div className="absolute bottom-0 left-0 w-full h-[1px] scale-x-0 group-hover:scale-x-100 transition bg-white" />
        </h3>
      </motion.div>
      <motion.div
        style={{ y, opacity }}
        className="my-8 lg:my-14 group cursor-pointer">
        <div className="relative w-full">
          <img className="w-full h-full" src={PortfolioImg1} alt="image" />
          <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black" />
        </div>
        <h3 className="relative w-fit mx-auto  font-bold text-2xl sm:text-xl text-center py-4 group-hover:-translate-y-2 transition duration3500">
          {t("eventPhotography")}
          <div className="absolute bottom-0 left-0 w-full h-[1px] scale-x-0 group-hover:scale-x-100 transition bg-white" />
        </h3>
      </motion.div>
      <motion.div
        style={{ y, opacity }}
        className="my-8 lg:my-14 group cursor-pointer">
        <div className="relative w-full">
          <img className="w-full h-full" src={PortfolioImg6} alt="image" />
          <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black" />
        </div>
        <h3 className="relative w-fit mx-auto font-bold text-2xl sm:text-xl text-center py-4 group-hover:-translate-y-2 transition duration-300">
          {t("aerialPhotography")}
          <div className="absolute bottom-0 left-0 w-full h-[1px] scale-x-0 group-hover:scale-x-100 transition bg-white" />
        </h3>
      </motion.div>
      <motion.div
        style={{ y, opacity }}
        className="my-8 lg:my-14 group cursor-pointer">
        <div className="relative w-full">
          <img className="w-full h-full" src={PortfolioImg5} alt="image" />
          <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black" />
        </div>
        <h3 className="relative w-fit mx-auto font-bold text-2xl sm:text-xl text-center py-4 group-hover:-translate-y-2 transition duration-300">
          {t("podcastProduction")}
          <div className="absolute bottom-0 left-0 w-full h-[1px] scale-x-0 group-hover:scale-x-100 transition bg-white" />
        </h3>
      </motion.div>
      <motion.div
        style={{ y, opacity }}
        className="my-8 lg:my-14 group cursor-pointer">
        <div className="relative w-full">
          <img className="w-full h-full" src={PortfolioImg4} alt="image" />
          <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black" />
        </div>
        <h3 className="relative w-fit mx-auto font-bold text-2xl sm:text-xl text-center py-4 group-hover:-translate-y-2 transition duration-300">
          {t("corporateMediaLibrary")}
          <div className="absolute bottom-0 left-0 w-full h-[1px] scale-x-0 group-hover:scale-x-100 transition bg-white" />
        </h3>
      </motion.div>
    </section>
  );
};

export default Portfolio;
